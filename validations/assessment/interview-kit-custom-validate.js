module.exports = (req, res, next) => {
    if (!req.body.custom_questions && !req.body.scorecard_elements) {
        return response.error(res, 400, 'Custom Questions or Score Card elements is required');
    }
    next();
};
