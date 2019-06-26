const Joi = require('@hapi/joi');
const validator = require('express-joi-validation');

const params = validator().params(
    Joi.object().keys({
        username: Joi.string().required()
    })
);

const query = validator().query(
    Joi.object().keys({
        type: Joi.string().required(),
        sort: Joi.string().required(),
        direction: Joi.string().required()
    })
)

module.exports = {
    params,
    query
};