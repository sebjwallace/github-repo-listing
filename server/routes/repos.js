const express = require('express');
const app = module.exports = express();

const controllers = require('../controllers');
const schemas = require('../schemas');

app.get(
    '/:usertype/:username/repos',
    schemas.repos.params,
    schemas.repos.query,
    controllers.repos
);