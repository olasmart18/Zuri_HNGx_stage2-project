import express from 'express';
import 'dotenv/config';
import connect from './utils/db.js'

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3030;

app.listen(PORT, () => {
    connect();
    console.log(`server running on port ${PORT}`);
})