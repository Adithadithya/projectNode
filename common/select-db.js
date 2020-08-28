const mongoose = require('mongoose');
const config = require('../config/config');
//Object holding all your connection strings
var connections = {};
module.exports = () => {
    let dbName = 'project';
    if (connections[dbName]) {
        //database connection already exist. Return connection object
        return connections[dbName];
    } else {
        console.log("mongodb://" + config.dbuser.user + ":" + config.dbuser.pass + "@" + config.dbUrl + dbName + "?authSource=admin");
        if (config.dbuser) {
            connections[dbName] = mongoose.createConnection("mongodb+srv://" + config.dbuser.user + ":" + config.dbuser.pass + "@" + config.dbUrl + dbName + "?ssl=true");
        } else {
            connections[dbName] = mongoose.createConnection(config.dbUrl + dbName, { useNewUrlParser: true, useFindAndModify: false });
        }
        return connections[dbName];
    }
};