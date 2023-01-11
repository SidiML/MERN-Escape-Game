const express = require('express')
const router = express.Router()
require("./Model/db.Mongoose.js") //! important

const userController = require("./Controller/userController.js")
const roomController = require("./Controller/roomController.js")
const dateController = require("./Controller/dateController.js")

router.get("/", (requête, réponse) => {
    requête.writeHead(200, {'Content-Type': 'text/plain'})
    console.log("Bienvenue sur la page d'acceuil"); réponse.send("Bienvenue sur EscapeGame");
    
    console.log("body", requête.body) 
    console.log("params", requête.params)
    console.log("query", requête.query)
})

//? User
router.post("/User", userController.createUser)
router.get("/User", userController.getUser)

//? Room
router.get("/Room", roomController.getRoom)
router.post("/Room", roomController.createRoom)

//? Date
router.get("/Date", dateController.getDate)
router.post("/Date", dateController.createDate)

module.exports = router