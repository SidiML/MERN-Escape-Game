const {UserModel} = require("../Model/userModel.js")
const {isObjectOrIsArrayOfObjects, isObject, isArrayOfObjects} = require("../Modules/Functions/CheckerDataType.js")
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const saltRounds = 10;

//* Users
exports.createUser = async (requête, réponse) => {
    // const userData = requête.body
    const hash = await bcrypt.hash(requête.body.password, saltRounds)

    const userDataTimeStamped = {
        prenom: requête.body.prenom,
        nom: requête.body.nom,
        email: requête.body.email,
        dateDeNaissance: requête.body.dateDeNaissance,
        password: hash
        // creationDate: new Date()
    }
    if(isObjectOrIsArrayOfObjects(userDataTimeStamped) === "isObject"){
        const UserExisting = await UserModel.find({email: userDataTimeStamped.email}) //const User = new UserModel(data)

        if(UserExisting.length === 0){
            const addUser = await UserModel.insertMany(userDataTimeStamped)
                .then((UserAdded)=>{
                    réponse.status(200).send(UserAdded); console.log(UserAdded) // réponse.status(200).json({ message: "Recherche -> <Users> Trouvé... !", resultat: data })
                }).catch((erreur)=> {réponse.json({status:400, message: erreur}); console.log(erreur)})
            // addUser.save()
        }else{
            réponse.status(404).send("This User already exist") // return "User already exist"
        }
        // réponse.send(Users); console.log(Users, Users.length)
    }else{
        réponse.status(404).send("Data Rejected => Need to be 1 <object>. #Bad DataStructure#") // return "data Rejected #Bad DataStrucutre#"
    }
    // réponse.send(userData); console.log(userData)
}

exports.getUserByEmail = async(requête, réponse) => {
    //* Methode Statique
    // const Users = await UserModel.find()
    // réponse.send(Users); console.log("Users", Users)
    // console.log("Données Obtenu")
    const userData = requête.body

    //* Methode Dynamique
    const UserExisting = await UserModel.find({email: userData.email})
        .then((UserFounded)=>{
            réponse.status(200).json({ message: "Recherche -> <User> Trouvé... !", resultat: UserFounded })
            console.log(UserFounded)
        }).catch((error)=>{
            réponse.json({ status: 400, message: "Not <User> Trouvé... !", resultat: error })
            console.log(error)
        })
    // this.createToken()
    // this.checkToken()
}

exports.createToken = async(requête,réponse) =>{
    const user = await UserModel.find({email: requête.body.email})

    if(user.length === 0){
        réponse.json({status: 404, msg:"Email doesn't exist"})
    } else {
        const matchPassword = await bcrypt.compare(requête.body.password, user[0].password)
        if(matchPassword){
            const token = jwt.sign({_id: user[0]._id}, 'pitichat', {expiresIn:'1h'})
            réponse.json({status: 200, token, user: user[0]})
        } else {
            réponse.json({status: 401, msg: "bad password"})
        }
    }
}

exports.checkToken = async(requête,réponse) =>{
    const UserConnecting = await UserModel.find({_id: requête.body._id})
    réponse.json({status: 200, msg: "token ok", user: UserConnecting[0]})
}