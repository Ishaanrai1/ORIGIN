const mongoose = require("mongoose")

function connectToDb(){
    mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log("db se connect", mongoose.connection.name)
    })
}
module.exports = connectToDb