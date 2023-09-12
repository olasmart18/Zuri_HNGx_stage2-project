import express from 'express';
import 'dotenv/config';
import connect from './utils/db.js'
import userRoute from './routers/userRoute.js';

const app = express();
const PORT = process.env.PORT || 3030;

// middlewares
app.use(express.json());
app.use('/api', userRoute),


app.listen(PORT, () => {
    connect();
    console.log(`server running on port ${PORT}`);
})