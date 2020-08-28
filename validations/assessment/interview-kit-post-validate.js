const Joi = require('joi');

const postValidate = (req, res, next) => {

    const schema = Joi.object().keys({
        kit_name: Joi.string().required().label('Kit Name'),
        custom_questions: Joi.array().label('Custom Questions'),
        scorecard_elements: Joi.array().label('Scorecard Elements')
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
