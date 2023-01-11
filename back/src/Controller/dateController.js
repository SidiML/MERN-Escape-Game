const {DateModel} = require("../Model/dateModel.js")
const {isObjectOrIsArrayOfObjects, isObject, isArrayOfObjects} = require("../Modules/Functions/CheckerDataType.js")

//* Dates
exports.createDate = async (requête, réponse) => {
    const userData = requête.body
    if(isObjectOrIsArrayOfObjects(userData) === "isObject"){
        const DateExisting = await DateModel.find({name: userData.name}) //const Date = new DateModel(data)
        if(DateExisting.length === 0){
            const addDate = await DateModel.insertMany(userData).then((DateAdded)=>{
                réponse.status(200).send(DateAdded); console.log(DateAdded) // réponse.status(200).json({ message: "Recherche -> <Dates> Trouvé... !", resultat: data })
            }).catch((erreur)=> {réponse.status(400); console.log(erreur)})

        }else{
            réponse.status(404).send("This Date already exist") // return "Date already exist"
        }
        // réponse.send(Dates); console.log(Dates, Dates.length)
    }else{
        réponse.status(404).send("Data Rejected => Need to be 1 <object>. #Bad DataStructure#") // return "data Rejected #Bad DataStrucutre#"
    }
    // réponse.send(userData); console.log(userData)
}

exports.getDates = async (requête, réponse) => {
    //* Methode Statique
    // const Dates = await DateModel.find()
    // réponse.send(Dates); console.log("Dates", Dates)
    // console.log("Données Obtenu")

    //* Methode Dynamique
    const DateExisting = await DateModel.find().then((data)=>{
        réponse.status(200).json({ message: "Recherche -> <Dates> Trouvé... !", resultat: data })
        console.log(data)
    }).catch((error)=>{
        réponse.status(400).json({ message: "Recherche -> <Dates> non Trouvé... !", resultat: error })
        console.log(error)
    })
}