const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
mongoose.connect('mongodb://localhost:27017/data', { dbName: "fake-api" }).then(() => {
    console.log("Connected to DataBase");
},)
module.exports = mongoose;