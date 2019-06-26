const express = require('express');
const bodyParser = require('body-parser');
const { port } = require('./config');
const routes = require('./routes');

const app = express();

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(routes);

app.listen(port, () => 
    console.log(`Server listening on port ${port}`)
);

module.exports = app;