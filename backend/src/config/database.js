// connect to the mongodb collection
const mongoose = require('mongoose');   
const { DATABASE_NAME, DATABASE_URL } = require('./constants');


const db_connection = () =>  {
    return new Promise((resolve, reject) => {
        
        mongoose.connect(DATABASE_URL, {
            dbName: DATABASE_NAME
        })
        .then(connection => {
            // console.log(connection);
            resolve(connection);
        })
        .catch( error => {
            reject(error.message);
        });

    });
}

module.exports = db_connection; 