const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/todoApp').then(()=>{

console.log("database Conected");

})

module.exports = mongoose;