const Slot = require('../models/slots')

const slotsRoutes = (app) => {

    app.get('/slots', async (req,res) => {
        const slot = await Slot.find({})
        res.json({status:200, slot:slot})
    })
    
    app.get('/slots/:room_id', async (req,res)=> {
            const room_id = req.params.room_id
            console.log(room_id)
            const slot = await Slot.find({roomId:room_id})
            res.json({status:200,slot:slot})
    })

}

module.exports = slotsRoutes