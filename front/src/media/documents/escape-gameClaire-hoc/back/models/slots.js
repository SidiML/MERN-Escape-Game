const Mongoose = require('mongoose');

const slotSchema = new Mongoose.Schema({
    date: {type: String, required: true},
    roomId: {type: String, required: true},
    userId: {type: String, required: true},
    isFree: {type: Boolean, required: true},
    creationDate: {type: Date, required: true}
}, {collection: "slots"})

module.exports = Mongoose.model('slots', slotSchema);
