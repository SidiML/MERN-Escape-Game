const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    prenom: String,
    nom: String,
    email: {
        type: String,
        unique: [true, "Email Exist"],
        required: [true, "Please provide an Email"]
    },
    dateDeNaissance: { type: Date, required: true },
    password: { type: String, required: true }

}, {collection: "users"}) // versionKey: true

const UserModel = mongoose.model('UserModel', UserSchema)
//UserModel.createCollection()

module.exports = {UserModel}