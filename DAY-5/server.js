/*
server ko start karna
sever se db connect karna
 */
const app = require("./src/app")
const mongoose = require("mongoose")


function connectToDb() {
  mongoose.connect("mongodb://ISHAAN:@ac-zf6dc6i-shard-00-00.kpdpcrp.mongodb.net:27017,ac-zf6dc6i-shard-00-01.kpdpcrp.mongodb.net:27017,ac-zf6dc6i-shard-00-02.kpdpcrp.mongodb.net:27017/?ssl=true&replicaSet=atlas-4eyuii-shard-0&authSource=admin&appName=Cluster0/day6")
    .then(() => {
      console.log("ho gya")
    })
    .catch((err) => {
      console.log("Connection failed:", err.message)  // Add this
    })
}
connectToDb()

app.listen(3000, () => {
    console.log("server is running")
})