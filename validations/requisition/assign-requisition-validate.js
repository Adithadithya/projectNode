module.exports = (req, res, next) => {
    if (!req.body.requisition_id) {
        let message = 'Requisition id is null';
        return response.error(res, 422, message);

    }
    if (!req.body.assignee_id) {
        let message = 'Assignee  id is null';
        return response.error(res, 422, message);

    }
    if (!req.body.assignee_name) {
        let message = 'Assignee  name is null';
        return response.error(res, 422, message);
    }
    next();
};
