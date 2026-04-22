const app = require("./src/app")
const connectToDb = require("./src/config/database")
require('dotenv').config()
const connection = require("./src/config/database")


connectToDb()

app.listen(3000,()=>{
    console.log("server is running")
})