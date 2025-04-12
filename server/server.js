import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

import { connectDB } from './config/db.js';

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send("Hello World");
})

app.get('/message', (req, res) => {
    res.send("hi");
})

app.listen(5000, () =>{
    connectDB();
    console.log(`Server is running...`);
})