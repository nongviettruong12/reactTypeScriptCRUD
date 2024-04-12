import Joi from 'joi'
export const ProductObj = Joi.object({
    name:Joi.string().required(),
    price:Joi.number().required(),
    desc:Joi.string().required()
})