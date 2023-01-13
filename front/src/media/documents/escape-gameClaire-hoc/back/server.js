const express = require('express')
const app = express()
const port = 4000
require('dotenv').config()
const MongoDBClient = require('./mongoClient')
const roomsRoute = require('./routes/roomsRoute')
const slotsRoute = require('./routes/slotsRoute')
const usersRoute = require('./routes/usersRoute')
const cors = require('cors')


app.use(cors())

app.use(express.urlencoded({ extended: false }))
app.use(express.json())


app.get('/', (req, res)=> {
    res.json({status: 200, msg: "ok"})
})


roomsRoute(app)
slotsRoute(app)
usersRoute(app)


app.listen(port,()=>{
    console.log(`connecté au port ${port}`)
    MongoDBClient.initialize()
})