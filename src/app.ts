import express from 'express'
import { graphqlHTTP } from 'express-graphql'
import router from './router'
import { resolvers } from './schema/resolvers'
import { schema } from './schema/typeDefs'

const app = express()

app.disable('etag')
app.use(express.json())
app.use(router)

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: resolvers,
  graphiql: true,
  customFormatErrorFn: (err) => {
    return {
      message: err.message,
      locations: err.locations,
      stack: err.stack ? err.stack.split('\n') : [],
      path: err.path,
    };
  },
}));

export default app
