const Joi = require('joi');

const postValidate = (req, res, next) => {

    const processStageSchema = {
        stage_name: Joi.string().required().label('Step Name'),
        stage_type: Joi.string().required().label('Step Type'),
        interview_kit_id: Joi.string().allow('').optional(),
        interview_kit_name: Joi.string().allow('').optional()
    };

    const schema = Joi.object().keys({
        process_name: Joi.string().required().label('Process Name'),
        process_stages: Joi.array().min(1).items(Joi.object(processStageSchema)).required().label("Process Steps")
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
