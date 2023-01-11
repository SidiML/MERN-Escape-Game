const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    prename: String,
    name: String,
    email: {
        type: String,
        unique: true,
        required: true
    },
    dateDeNaissance: {
        type: Date,
        unique: true,
        required: true
    },
    password: {
        type: String,
        unique: true,
        required: true
    }

}, {collection: "users"}) //, {versionKey: true})

const UserModel = mongoose.model('UserModel', UserSchema)
//UserModel.createCollection()

module.exports = {UserModel}