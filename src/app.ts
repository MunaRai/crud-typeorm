import express, { Express } from 'express';
import { itemsRouter } from './Router/ItemsRouter';
import bodyParser from 'body-parser';
import { DataSource } from 'typeorm';
import { Food } from './Entity/food';
import * as dotenv from 'dotenv';

dotenv.config();

const port = process.env.PORT;
const pw = process.env.PASSWORD;
const user = process.env.USER;
const pgdb = process.env.PGDATABASE;

const app: Express = express();

app.use(bodyParser.json());
app.use('/items', itemsRouter);

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: user,
    password: pw,
    database: pgdb,
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

app.listen(port, () => {
    console.log(`Listening on port ${port} `);
});