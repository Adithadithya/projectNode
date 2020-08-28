const Joi = require('joi');

const postValidate = (req, res, next) => {

    const schema = Joi.object().keys({
        business_manager: {
            chr_user_id: Joi.number().required().label('Business manager Id'),
            name: Joi.string().required().label('Business manager name'),
            title: Joi.string().required().label('Creator Title'),
            email: Joi.string().email().required().label('Business manager email'),
            phone: Joi.string().allow("").regex(/^\d+$/).options({
                language: {
                    string: {
                        regex: {
                            base: 'is invalid'
                        }
                    }
                }
            }).label('Business manager phone')
        },
        hr_manager: {
            chr_user_id: Joi.number().required().label('HR Manager Id'),
            name: Joi.string().required().label('HR Manager name'),
            email: Joi.string().email().required().label('HR manager email'),
            phone: Joi.string().optional().allow('')
            // phone: Joi.string().regex(/^\d+$/).options({
            //     language: {
            //         string: {
            //             regex: {
            //                 base: 'is invalid'
            //             }
            //         }
            //     }
            // }).label('HR manager phone')
        },
        priority: Joi.string().required().label('Priority'),
        // department: {
        //     chr_org_id: Joi.number().required().label('Department Id'),
        //     name: Joi.string().required().label('Department name')
        // },
        reason: Joi.string().required().label('Reason'),
        budgeted: Joi.string().required().label('Budgeted'),
        vacancy: Joi.number().required().label('Vacancy'),
        country: Joi.string().required().label('Country'),
        // city: Joi.string().required().label('City'),
        primary_job_language: Joi.string().label('Primary Job Language'),
        job_info: {
            title: Joi.string().required().label('Job Title'),
            description: Joi.string().required().label('Job Description'),
            // job_role: Joi.string().required().label('Job Role'),
            // job_id : Joi.number().required().label('Job Id'),
            education: Joi.string().required().label('Job Education'),
            experience: {
                min: Joi.number().required().label('Minimum Experience Range'),
                max: Joi.number().required().label('Maximum Experience Range')
            },
            skills: Joi.array().required().label('Job Skills'),
            // currency: Joi.string().required().label('Job Currency'),
            // salary: {
            //     min: Joi.number().required().label('Minimum Salary Range'),
            //     max: Joi.number().required().label('Maximum Salary Range')
            // },
            position: Joi.array().required().label('Position'),
            language: Joi.array(),
            employment_type: Joi.string().required().label('Employment type'),
            job_medium: Joi.string().required(),
            is_referral: Joi.boolean()
        },
        expected_startdate: Joi.date().required().label('Expected Startdate'),
        benefits: Joi.array(),
        tags: Joi.array(),

        // costcenter: {
        //     chr_cc_id: Joi.string().required(),
        //     cc_name: Joi.string().required(),
        // },
        external_job_post_validate: {
            sd: Joi.date(),
            ed: Joi.date()
        },
        existing_id_template: Joi.string(),
        status: Joi.string().required(),
        save_as_template: Joi.boolean().required()
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
