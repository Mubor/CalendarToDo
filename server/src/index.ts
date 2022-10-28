import express, { Request, Response }  from 'express'
import dotenv from 'dotenv'

import { Controller } from './app/controller.js'
import {Database} from './adapters/database.js'

dotenv.config()

const {PORT, DB_USER, DB_PASSWORD} = process.env;
const app = express();

const uri = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@calendar-db.r2bbfu3.mongodb.net/?retryWrites=true&w=majority`
const repository = new Database(uri, 'Accounts');

app.use(express.json())
app.use(express.static(process.cwd() + '/client'));
app.use('/', new Controller(repository).process())

app.get('/', (req:Request, res:Response) => {
    res.sendFile(process.cwd() + '/client/index.html');
});


app.listen(PORT, () => {
    console.log(`Server is working on port ${PORT}... Шо ты, голова?`);
    console.log(`http://localhost:${PORT}/`);
});

