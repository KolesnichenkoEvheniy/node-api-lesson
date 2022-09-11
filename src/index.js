import express from 'express';
import cors from 'cors';
import routes from './routes/index.js';
import bodyParser from 'body-parser';

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use(routes);

const port = 3001;
app.listen(port, () => {
    console.log(`Listening to ${port}`);
})