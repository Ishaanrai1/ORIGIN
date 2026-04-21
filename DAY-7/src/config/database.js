const mongoose = require("mongoose")


function connecttodb(){
    mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log("db is connected")
    })
} 
module.exports = connecttodb

