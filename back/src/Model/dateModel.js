const mongoose = require('mongoose')

const DateSchema = new mongoose.Schema({
    nameRoom: String,
    date: String,
    isFree: Boolean,
    dateDeCreation: Date

}, {collection: "dates"}) //, {versionKey: true})

const DateModel = mongoose.model('DateModel', DateSchema)
//DateModel.createCollection()

module.exports = {DateModel}