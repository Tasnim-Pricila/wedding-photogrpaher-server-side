const mongoose = require('mongoose');
const colors = require('colors');

const dbconnect = () => {
    mongoose.connect(process.env.DATABASE, { dbName: "wedding-photographer" })
        .then(() => {
            console.log(`Database connection successful`.red.bold)
        })
}


module.exports = dbconnect;