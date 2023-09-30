const Joi = require('joi');

const postFood = {
    payload: Joi.object({
        description: Joi
                    .string()
                    .min(3)
                    .max(50)
                    .required(),
        value: Joi
              .number()
              .required(),
        category: Joi
                 .string()
                 .max(50)
                 .required(),
        quantity: Joi
                 .number()
                 .min(0)
                 .required()
    }).required()
}

module.exports = {postFood};
