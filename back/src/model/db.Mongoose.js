const mongoose = require('mongoose')
const db = process.env.MONGODB_URL

mongoose.set('strictQuery', false)
mongoose.connect(db, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log("Connexion à MongoDB Réussie !"))
    .catch(() => console.log("Connexion à MongoDB Échouée !"))
// mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));
// mongoose.connection.on('error', err => {
//     logError(err);
//   });



module.exports = {dataToys, dataCategories}