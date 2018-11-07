const express = require('express');
const hbs = require('hbs');
const path = require('path');

const app = express();

const port = 3000;

const index = require('./routes/index');

app.set('views',path.join(__dirname,'views'))
app.set('view engine','hbs');

hbs.registerPartials(__dirname + '/views/partials');

app.use('/',index);

app.listen(port,() => console.log('Server is started on port ' + port));
