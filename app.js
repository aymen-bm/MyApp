var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var router = express.Router();
var session = require('cookie-session'); 


var addtxt = require('./routes/addtxt');
var lien1Router = require('./routes/lien1');
var lien2Router = require('./routes/lien2');
var lien3Router = require('./routes/lien3');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/lien1' , lien1Router);
app.use('/lien2' , lien2Router);
app.use('/lien3' , lien3Router);
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/addtxt' ,addtxt);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});

