const mongoose = require('mongoose');

const URI = process.env.ATLAS_URI

const MongoDBClient = {
    initialize(){
        try {
            mongoose.connect(URI, 
                { 
                    useNewUrlParser: true, 
                    useUnifiedTopology: true 
                })

            .then(() => console.log(`successfully connected to MongoDB`))
            .catch((err)=> console.log(err))
        } catch(err) {
            throw Error(err)
        }
    }
}

module.exports = MongoDBClient;

