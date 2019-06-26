const Joi = require('@hapi/joi');
const validator = require('express-joi-validation');
const { type, sort, direction } = require('../config').github.params.users;

const params = validator().params(
    Joi.object().keys({
        username: Joi.string().required()
    })
);

const query = validator().query(
    Joi.object().keys({
        type: Joi.string().valid(type).required(),
        sort: Joi.string().valid(sort).required(),
        direction: Joi.string().valid(direction).required()
    })
)

module.exports = {
    params,
    query
};