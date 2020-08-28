const Joi = require('joi');

const postValidate = (req, res, next) => {

    const schema = Joi.object().keys({
        registrationInfo: {
            full_name: Joi.string().required().label('Full name'),
            email: Joi.string().label('Email').allow('').optional(),
            password: Joi.string().required().label('Password')
        }
    });

    const registrationBody = {
      registrationInfo: req.body.registrationInfo
    };

    Joi.validate(registrationBody, schema, (err) => {
        if (err) {
            const errMessage = err.details[0].message;
            return response.error(res, 422, errMessage.replace(/\"/g, ''));
        }
        return next();
    });
};

module.exports = postValidate;
