const mongoose = require('mongoose')

const EscapeGameSchema = mongoose.Schema({
    name: String,
    age: Number,
    capacity:Number,
    img: String,
    description:String,
    price:Number,
    minplayers:Number

}, {collection: "rooms"}) //, {versionKey: true})

const EscapeGameModel = mongoose.model('MyEscapeGame', EscapeGameSchema)
EscapeGameModel.createCollection()

module.exports = {EscapeGameModel}