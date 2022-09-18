import express from 'express';
import cors from 'cors';
import router from './routes/index.js'

const app = express();

app.use(cors());

app.use(router)

const server = app.listen(3001, () => {
    console.log(`Listening to ${server.address().port}`);
})