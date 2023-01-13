const {RoomModel} = require("../Model/roomModel.js")
const {isObjectOrIsArrayOfObjects, isObject, isArrayOfObjects} = require("../Modules/Functions/CheckerDataType.js")

//* Room
exports.createRoom = async (requête, réponse) => {
    const userData = requête.body
    if(isObjectOrIsArrayOfObjects(userData) === "isObject"){
        const RoomExisting = await RoomModel.find({name: userData.name}) //const Room = new RoomModel(data)
        if(RoomExisting.length === 0){
            const addRoom = await RoomModel.insertMany(userData).then((RoomAdded)=>{
                réponse.status(200).send(RoomAdded); console.log(RoomAdded) // réponse.status(200).json({ message: "Recherche -> <Room> Trouvé... !", resultat: data })
            }).catch((erreur)=> {réponse.status(400); console.log(erreur)})

        }else{
            réponse.status(404).send("This Room already exist") // return "Room already exist"
        }
        // réponse.send(Room); console.log(Room, Room.length)
    }else{
        réponse.status(404).send("Data Rejected => Need to be 1 <object>. #Bad DataStructure#") // return "data Rejected #Bad DataStrucutre#"
    }
    // réponse.send(userData); console.log(userData)
}


exports.getRoom = async (requête, réponse) => {
    //* Methode Statique
    // const Room = await RoomModel.find()
    // réponse.send(Room); console.log("Room", Room)
    // console.log("Données Obtenu")

    //* Methode Dynamique
    const userData = requête.body
    const RoomExisting = await RoomModel.find({_id: userData.id})
        .then((roomFound)=>{
            réponse.status(200).json({ message: "Recherche -> <Room> Trouvé... !", resultat: roomFound })
            console.log(roomFound)
        }).catch((error)=>{
            réponse.status(400).json({ message: "Not Found -> <Room>  ... !", resultat: error })
            console.log(error)
        })
}