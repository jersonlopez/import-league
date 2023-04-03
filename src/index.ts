import app from './app';
import { config } from './config';
import { AppDataSource } from './db';

AppDataSource.initialize()
    .then(() => {
        app.listen(config.port, () => {
            console.log(`App is running at http://localhost:${config.port}/graphql`);
        });
    })
    .catch((error) => console.log(error));
