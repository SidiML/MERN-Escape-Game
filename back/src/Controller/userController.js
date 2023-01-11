const {UserModel} = require("../Model/userModel.js")
const {isObjectOrIsArrayOfObjects, isObject, isArrayOfObjects} = require("../Modules/Functions/CheckerDataType.js")

//* Users
exports.createUser = async (requête, réponse) => {
    const userData = requête.body
    if(isObjectOrIsArrayOfObjects(userData) === "isObject"){
        const UserExisting = await UserModel.find({name: userData.name}) //const User = new UserModel(data)
        if(UserExisting.length === 0){
            const addUser = await UserModel.insertMany(userData).then((UserAdded)=>{
                réponse.status(200).send(UserAdded); console.log(UserAdded) // réponse.status(200).json({ message: "Recherche -> <Users> Trouvé... !", resultat: data })
            }).catch((erreur)=> {réponse.status(400); console.log(erreur)})

        }else{
            réponse.status(404).send("This User already exist") // return "User already exist"
        }
        // réponse.send(Users); console.log(Users, Users.length)
    }else{
        réponse.status(404).send("Data Rejected => Need to be 1 <object>. #Bad DataStructure#") // return "data Rejected #Bad DataStrucutre#"
    }
    // réponse.send(userData); console.log(userData)
}

exports.getUser = async (requête, réponse) => {
    //* Methode Statique
    // const Users = await UserModel.find()
    // réponse.send(Users); console.log("Users", Users)
    // console.log("Données Obtenu")

    //* Methode Dynamique
    const UserExisting = await UserModel.find().then((data)=>{
        réponse.status(200).json({ message: "Recherche -> <Users> Trouvé... !", resultat: data })
        console.log(data)
    }).catch((error)=>{
        réponse.status(400).json({ message: "Recherche -> <Users> non Trouvé... !", resultat: error })
        console.log(error)
    })
}