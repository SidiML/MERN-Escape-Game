const express = require('express')
const router = express.Router()
require("./Model/db.Mongoose.js") //! important
const jwt = require('jsonwebtoken');

const userController = require("./Controller/userController.js")
const roomController = require("./Controller/roomController.js")
const dateController = require("./Controller/dateController.js")

router.get("/", (requête, réponse, next) => {
    // requête.writeHead(200, {'Content-Type': 'text/plain'})
    réponse.setHeader("Access-Control-Allow-Origin", "*");
    réponse.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization")
    réponse.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS"); //réponse.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH, OPTIONS");
    console.log("Bienvenue sur la page d'acceuil"); réponse.send("Bienvenue sur EscapeGame")
    
    // console.log("body", requête.body) 
    // console.log("params", requête.params)
    // console.log("query", requête.query)
    next()
})

//? User
router.post("/User/Add", userController.createUser)
router.get("/User", userController.getUserByEmail)
router.post('/Token/Create', userController.createToken)

function withAuth(requête, réponse, next){
    const token = requête.headers['authorization']
        console.log(requête.headers)
        if(token === null){
            réponse.json({status:401, msg: "bad token 1"})
        }
        jwt.verify(token,'pitichat', function(err, decoded){
            if(err){
                réponse.json({status:401, msg: "bad token 2"})
                console.log(err)
            }
            requête.body._id = decoded._id
            next()
        })
}
router.get('/Token/Checked', withAuth, userController.checkToken)

//? Room
router.get("/Rooms/", roomController.getRoom)
router.post("/Room/Add", roomController.createRoom)

//? Date
router.get("/Dates", dateController.getDates)
router.post("/Date/Add", dateController.createDate)




module.exports = router