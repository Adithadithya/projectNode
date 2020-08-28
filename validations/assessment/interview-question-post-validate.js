const Joi = require('joi');

const postValidate = (req, res, next) => {

    const schema = Joi.object().keys({
        question: Joi.string().required().label('Question')
    });

    Joi.validate(req.body, schema, (err) => {
        if (err) {
            const errMessage = err.details[0].message;
            return response.error(res, 422, errMessage.replace(/\"/g, ''));
        }
        return next();
    });
};

module.exports = postValidate;
