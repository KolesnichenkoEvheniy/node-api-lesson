// catch 404 and forward to error handler
export default function (req, res, next) {
  const err = new Error('Not Found!');
  err.status = 404;
  next(err);
}
