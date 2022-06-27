import express, { Express } from 'express';
import { itemsRouter } from './Router/ItemsRouter';
import bodyParser from 'body-parser';
import { DataSource } from 'typeorm';
import { Food } from './Entity/food';

const PORT = 3000;

const app: Express = express();

app.use(bodyParser.json());
app.use('/items', itemsRouter);

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "muna",
    database: "munadb",
    synchronize: true,
    logging: true,
    entities: [Food],
    subscribers: [],
    migrations: [],
})

AppDataSource.initialize()
    .then(() => {
       console.log('db connected successfully')
    })
    .catch((error) => console.log(error))

app.listen(PORT, () => {
    console.log('Listening on port: ', PORT);
});