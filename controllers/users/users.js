const pool = require('../../config/config');
const selectDb = require('../../common/select-db');
const userSchema = require('../../models/users');


module.exports = {
    add: (req, res) => {
        const db = selectDb(req.connectedClientsId);
        const userModel = db.model('users', userSchema, 'users');
        console.log("hi ms::::",db);
        console.log("hi ms::::",req.connectedClientsId);
        const model = new userModel(req.body);        

        model.save((err, data) => {
            return response.success(res, data);
        })

    },
    get: (req, res) => {
        const db = selectDb(req.connectedClientsId);
        const userModel = db.model('users', userSchema, 'users');
        userModel.find({}).exec((err,data)=>{
            return response.success(res, data);
        })
        
    }
}