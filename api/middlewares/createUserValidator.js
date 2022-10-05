import joi from 'joi'

const createBookValidator = async (req, res, next) => {
    try {
        const createUserSchema = joi.object({
            name: joi.string().required(),
            lastName: joi.string().required(),
            phone: joi.number().positive().integer().invalid(0).required(),
            email: joi.string().required(),
            password: joi.string().required(),
            cardNumber: joi.number().positive().required(),
            shippingAddress: joi.string().required()
        })

        await createUserSchema.validateAsync(req.body)
        next()
    } catch (error) {
        msg:'Validation error creating a user',
        error
    }
}

export default createBookValidator