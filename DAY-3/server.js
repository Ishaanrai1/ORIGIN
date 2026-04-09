const express = require("express")
const app = express()

const notes = []

app.use(express.json())

app.post("/notes",(req,res)=>{
    res.send("note created")
    notes.push(req.body)

    console.log(req.body)
})
app.get("/notes",(req,res)=>{
    res.send(notes)
})


app.listen(3000,()=>{
    console.log("server is ready to console")
})