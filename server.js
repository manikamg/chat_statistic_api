const express = require('express');
const bodyParser = require('body-parser');
// create express app
const app = express();

var debug = require('debug')('app');
const cors = require('cors');

// parse requests of content-type - application/json
var cookieParser = require('cookie-parser');
var session = require('express-session');

//debug the code
debug('Hello, %s!', 'world');
// Connecting to the database
app.use(cors());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
  
    res.header(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, DELETE, OPTIONS"
    );
  
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
  
    res.header("Access-Control-Expose-Headers");
  
    next();
});

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

app.use(session({secret: 'ssshhhhh',saveUninitialized: true,resave: true}));

app.use(cookieParser());
app.use(bodyParser.json());

require('./app/routes/routes.js')(app);

const port = process.env.PORT||4000;
const server = app.listen(port, function(){
  console.log('Listening on port ' + port);
});
