const {dateModel} = require("../model/roomModel.js")

//* Toys
exports.createDate = async (requête, réponse) => {
    const userData = requête.body
    if(isObjectOrIsArrayOfObjects(userData) === "isObject"){
        const ToyExisting = await ToyModel.find({name: userData.name}) //const Toy = new ToyModel(data)
        if(ToyExisting.length === 0){
            const addToy = await ToyModel.insertMany(userData).then((ToyAdded)=>{
                réponse.status(200).send(ToyAdded); console.log(ToyAdded) // réponse.status(200).json({ message: "Recherche -> <Toys> Trouvé... !", resultat: data })
            }).catch((erreur)=> {réponse.status(400); console.log(erreur)})

        }else{
            réponse.status(404).send("This Toy already exist") // return "Toy already exist"
        }
        // réponse.send(Toys); console.log(Toys, Toys.length)
    }else{
        réponse.status(404).send("Data Rejected => Need to be 1 <object>. #Bad DataStructure#") // return "data Rejected #Bad DataStrucutre#"
    }
    // réponse.send(userData); console.log(userData)
}

exports.createToys = async (requête, réponse) => {
    const userData = requête.body
    if(isObjectOrIsArrayOfObjects(userData) === "isArrayOfObjects"){
        const userDataNames = userData.map(i => i.name); console.log(userDataNames);
        const ToyExisting = await ToyModel.find({name: userDataNames}) //const Toy = new ToyModel(data)
        // console.log("Toys", ToyExisting);
        if(ToyExisting.length === 0){
            const addToys = await ToyModel.insertMany(userData).then((ToysAdded)=>{
                réponse.status(200).send(ToysAdded); console.log(ToysAdded) // réponse.status(200).json({ message: "Recherche -> <Toys> Trouvé... !", resultat: data })
            }).catch((erreur)=> {réponse.status(400); console.log(erreur)})

        }else{
            réponse.status(404).send("This Toy(s) already exist") // return "Toy already exist"
        }
    }else{
        réponse.status(404).send("Data Rejected => Need to be 1 <ArrayOfObject(s)>. #Bad DataStructure#") // return "data Rejected #Bad DataStrucutre#"
    }
}

exports.getToys = async (requête, réponse) => {
    //* Methode Statique
    // const Toys = await ToyModel.find()
    // réponse.send(Toys); console.log("Toys", Toys)
    // console.log("Données Obtenu")

    //* Methode Dynamique
    const ToyExisting = await ToyModel.find().then((data)=>{
        réponse.status(200).json({ message: "Recherche -> <Toys> Trouvé... !", resultat: data })
        console.log(data)
    }).catch((error)=>{
        réponse.status(400).json({ message: "Recherche -> <Toys> non Trouvé... !", resultat: error })
        console.log(error)
    })
}

exports.getToyByName = async (requête, réponse) => {
    const userData = requête.params.name
    const ToyExisting = await ToyModel.find({name: userData})
    console.log(ToyExisting)
    if (ToyExisting.length > 0) {
        réponse.status(200).json({ message: "Recherche => <Toy> Trouvé... !", resultat: ToyExisting })
    }else{
        réponse.status(404).send(`Recherche => <Toy> ${userData} non Trouvé... !`)
    }
}


exports.updateToyByName = async (requête, réponse) => {
    const userData = requête.params.name
    const newName = requête.query.newName
    const ToyExisting = await ToyModel.find({name: userData})
    console.log(ToyExisting)
    if (ToyExisting.length > 0) {
        const updateToy = await ToyModel.updateOne({name: userData}, {$set: { name: newName }})
        réponse.status(200).json({ message: "Recherche => <Toys> Trouvé... !", ancien: ToyExisting, nouveau: updateToy })
    }else{
        réponse.status(404).send("Recherche => <Toys> non Trouvé... !")
    }
}

exports.deleteToyByName = async (requête, réponse) => {
    const userData = requête.params.name
    const deleteToy = await ToyModel.deleteOne({name: userData})
    console.log(deleteToy)
    if (deleteToy.deletedCount === 1) {
        réponse.status(200).json({ message: "Recherche => <Toys> Trouvé... !", resultat: deleteToy })
    }else{
        réponse.status(404).send("Recherche => <Toys> non Trouvé... !")
    }
}


function isObjectOrIsArrayOfObjects(data){
    if(data === undefined){
        return "data Rejected because undefined"
    }else if(isObject(data)){
        return "isObject"
    }else if(isArrayOfObjects(data) === "ArrayOfObject" || isArrayOfObjects(data) === "ArrayOfObject(s)" ){
        return "isArrayOfObjects"
    }
}; const isObject = (data)=>{
        if(data.constructor.name === "Object"){
            return true
        }else{
            return false
        }
    }
//    const isTableau = (data)=>{
    //     if(data.constructor.name === "Array"){
    //         return true
    //     }else{
    //         return false
    //     }
    // }
   const isArrayOfObjects = (data)=>{
        if(data.length < 0 || data.length == 0){
            return false
        }else if(data.constructor.name === "Array" && data.every(i => i.constructor.name === "Object")){
            if(data.length == 1){
                return "ArrayOfObject"
            }else{
                return "ArrayOfObject(s)"
            }

        }else{
            return false
        }
   }
