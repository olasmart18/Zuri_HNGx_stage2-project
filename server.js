import express from 'express';
import 'dotenv/config';

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3030;

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
})