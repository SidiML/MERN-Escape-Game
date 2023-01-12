const mongoose = require('mongoose')

const RoomSchema = new mongoose.Schema({
    name: String,
    age: Number,
    capacity: Number,
    img: String,
    description: String,
    price: Number,
    minplayers: Number

}, {collection: "rooms"}) //, {versionKey: "true"})

const RoomModel = mongoose.model('RoomModel', RoomSchema)
// RoomModel.createCollection()

module.exports = {RoomModel}