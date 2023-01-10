const express = require('express')
const router = express.Router()
require("./src/model/db.Mongoose.js") //! important
const EscapeGameController = require("./src/controller/EscapeGameController.js")

router.get("/", (requête, réponse) => {
    requête.writeHead(200, {'Content-Type': 'text/plain'})
    console.log("Bienvenue sur la page d'acceuil");
    réponse.send("Home");
    
    console.log("body", requête.body ) 
   
    console.log("params", requête.params)
    
    console.log("query", requête.query)
    
})

// //? Categorie (CRUD)
// router.post("/Categories", CategorieController.createCategories)
// router.post("/Categorie", CategorieController.createCategorie)
// router.get("/Categories", CategorieController.getCategories)
// router.get("/Categorie/:name", CategorieController.getCategorieByName)
// // router.put("/Categories/:name", CategorieController.updateCategoriesById)
// router.put("/Categorie/:name", CategorieController.updateCategorieByName)
// router.delete("/Categorie/:name", CategorieController.deleteCategorieByName)



module.exports = router