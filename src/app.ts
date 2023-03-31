import express from 'express'
import { graphqlHTTP } from 'express-graphql'
import router from './router'
import { resolvers } from './schema/resolvers'
import { schema } from './schema/typeDefs'
import { importLeagueInfo, getLeagueInfo, getPlayersInfo } from './services/league'

const app = express()

app.disable('etag')
app.use(express.json())
app.use(router)

// The root provides a resolver function for each API endpoint
const root = {
  hello: ({ name }: { name: string }) => `Hello ${name}`,
  getInfo: ({leagueCode }: { leagueCode: string }) => getLeagueInfo(leagueCode),
  import: ({leagueCode }: { leagueCode: string }) => importLeagueInfo(leagueCode),
  players: ({leagueCode, teamName }: { leagueCode: string, teamName?: string }) => getPlayersInfo(leagueCode, teamName),
};

const petTypeResolver = {
  __resolveType(pet: { breed: any; color: any; }) {
    if (pet.breed) {
      return 'Dog';
    }
    if (pet.color) {
      return 'Cat';
    }
    return null; // Or throw an error if the type is unknown
  }
};

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
