const express = require('express');
const app = module.exports = express();

const controllers = require('../controllers');

app.get(
    '/params/users',
    controllers.params.users
);