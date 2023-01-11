const mongoose = require('mongoose')

const DateSchema = new mongoose.Schema({
    lundi: true,
    mardi: true,
    email: {
        type: String,
        unique: true,
        required: true
    },
    dateDeNaissance: {
        type: Date,
        unique: true,
        required: true
    }

}, {collection: "dates"}) //, {versionKey: true})

const DateModel = mongoose.model('DateModel', DateSchema)
//DateModel.createCollection()

module.exports = {DateModel}