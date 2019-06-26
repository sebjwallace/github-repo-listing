const express = require('express');
const app = module.exports = express();

const controllers = require('../controllers');
const schemas = require('../schemas');

app.get(
    '/users/:username',
    schemas.users.params,
    schemas.users.query,
    controllers.users
);