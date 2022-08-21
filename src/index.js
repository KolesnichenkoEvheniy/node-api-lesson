const express = require('express');
const cors = require('cors');

// setup app & its routes
const app = express();
app.use(cors());

const routes = require('./routes/index.route');
app.use(routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    const err = new Error('Not Found!');
    err.status = 404;
    next(err);
});

app.use(function(err, req, res, next) {
    console.log(err.stack);

    res.status(err.status || 500);

    res.json({'errors': {
        message: err.message,
        error: err
    }});
});

// start http server
var server = app.listen( process.env.PORT || 3000, function(){
    console.log('Listening on port ' + server.address().port);
});

module.exports = { app };