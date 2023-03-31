import app from './app';
import { config } from './config';
import { AppDataSource } from './db';

// AppDataSource.initialize()
//     .then(() => {
//         app.listen(config.port, () => {
//             console.log(`App is running on port ${config.port}`);
//         });
//     })
//     .catch((error) => console.log(error));

const main = async () => {
    await AppDataSource.initialize();
    app.listen(config.port, () => {
        console.log(`App is running on port ${config.port}`);
    });
}

main()
