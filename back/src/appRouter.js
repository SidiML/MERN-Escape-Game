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
router.post("/User/Add", userController.createUser)
router.get("/Users", userController.getUsers)
router.post('/Connexion', userController.connexion)

function withAuth(requête,réponse,next){
    const token = requête.headers['authorization']
    console.log(requête.headers)
    if(token === null){
        réponse.json({status:401, msg:'bad token 1'})
    }
    jwt.verify(token,'pitichat',function(err,decoded){
        if(err){
            réponse.json({status:401, msg:"bad token 2"})
            console.log(err)
        }
        requête.body._id = decoded._id
        next()
    })
}

router.get('/Connexion/checkToken', withAuth, userController.checkToken)

//? Room
router.get("/Room/:id", roomController.getRoom)
router.post("/Room/Add", roomController.createRoom)

//? Date
router.get("/Date/:freedate", dateController.getDate)
router.post("/Date/Add", dateController.createDate)




module.exports = router