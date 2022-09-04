import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());

app.get('/hello', (req, res) => {
    console.log('Test!')
    res.send(`Hello, today is ${(new Date).toString()}`);
});

const server = app.listen(3001, () => {
    console.log(`Listening to ${server.address().port}`);
})