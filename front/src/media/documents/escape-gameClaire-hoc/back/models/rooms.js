const Mongoose = require('mongoose');

const roomSchema = new Mongoose.Schema({
    name: {type: String, required: true},
    age: {type: Number, required: true},
    capacity: {type: Number, required: true},
    img: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: Number, required: true},
    minplayers: {type: Number, required: true},
    creationDate: {type: Date, required: true}
}, {collection: "rooms"})

module.exports = Mongoose.model('rooms', roomSchema);
