import express from 'express';
import cors from 'cors';
import routes from './routes/indexRoute.js';
import handleErrors from './core/handleErrors.js';
import throwAnErrorOnMissingRoute from './core/throwAnErrorOnMissingRoute.js';

// setup app & its routes
const app = express();
app.use(cors());

app.get('/test', (req, res) => {
  console.log(req.query);
  res.send(`Hello! Today is: ${new Date().toString()}`);
});

app.use(routes);

app.use(throwAnErrorOnMissingRoute);
app.use(handleErrors);

// start http server
const server = app.listen(3000, () => {
  console.log(`Listening on port ${server.address().port}`);
});
