const express = require('express');
const hbs = require('hbs');
const path = require('path');
const bodyParser = require('body-parser');
// const bootstrap = require('bootstrap');

const app = express();

// Set port for Heroku or local port
const port = process.env.PORT || 3000;

// Routes for the application
const index = require('./routes/index');

// Set the template engine
app.set('views',path.join(__dirname,'views'));
app.set('view engine','hbs');

hbs.registerPartials(__dirname + '/views/partials');

// Serve static files
app.use(express.static(__dirname + '/public'));

// Parse all incoming request
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

// Load the routes
app.use('/',index);

app.listen(port,() => console.log('Server is started on port ' + port));
