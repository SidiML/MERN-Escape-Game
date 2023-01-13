const Rooms = require('../models/rooms')

const roomsRoutes = (app) => {

    app.get('/rooms', async (req,res) => {
        const rooms = await Rooms.find({})
        res.json({status:200, rooms:rooms})
    })
    
    app.get('/rooms/:id', async (req,res)=> {
            const id = req.params.id
            console.log(id)
            const rooms = await Rooms.find({_id:id})
            console.log(rooms)
            res.json({status:200,rooms:rooms[0]})
    })
}

module.exports = roomsRoutes