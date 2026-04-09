const express = require("express")
const app = express() //server create

app.get('/',(req, res) => {
    res.send("hello world")
})



app.listen(3000) //server start 