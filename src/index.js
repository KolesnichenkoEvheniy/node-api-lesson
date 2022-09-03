import express from 'express';
import cors from 'cors';
import routes from './routes/indexRoute.js';

// setup app & its routes
const app = express();
app.use(cors());

app.get('/test', function (req, res) {
  console.log(req.query)
  res.send('Hello! Today is: ' + (new Date().toString()));
})

app.use(routes);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found!');
  err.status = 404;
  next(err);
});

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  console.log(err.stack);

  res.status(err.status || 500);

  res.json({
    errors: {
      message: err.message,
      error: err,
    },
  });
});

// start http server
const server = app.listen(3000, () => {
  console.log(`Listening on port ${server.address().port}`);
});
