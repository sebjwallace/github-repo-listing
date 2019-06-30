const Joi = require('@hapi/joi');
const validator = require('express-joi-validation');
const { type, sort, direction } = require('../config').github.params.repos;

const params = validator().params(
    Joi.object().keys({
        usertype: Joi.string().required(),
        username: Joi.string().required()
    })
);

const query = validator().query(
    Joi.object().keys({
        type: Joi.string().valid(type).required(),
        sort: Joi.string().valid(sort).required(),
        direction: Joi.string().valid(direction),
        page: Joi.number()
    })
)

module.exports = {
    params,
    query
};