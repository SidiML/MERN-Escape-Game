const mongoose = require('mongoose')

const RoomSchema = mongoose.Schema({
    name: String,
    age: Number,
    capacity: Number,
    img: String,
    description: String,
    price: Number,
    minplayers: Number

}, {collection: "rooms"}) //, {versionKey: true})

const RoomModel = mongoose.model('MyRoomSchema', RoomSchema)
//RoomModel.createCollection()

module.exports = {RoomModel}