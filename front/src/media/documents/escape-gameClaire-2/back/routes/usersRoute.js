const User = require('../models/users')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const usersRoutes = (app) => {

    app.get('/users', async (req,res) => {
        const user = await User.find({})
        res.json({status:200, user:user})
    })

    app.post('/users/add', async (req,res) => {
        const hash = await bcrypt.hash(req.body.password, saltRounds)

        const data = {
            firstName : req.body.firstName,
            lastName : req.body.lastName,
            email : req.body.email,
            password : hash,
            creationDate : new Date()
        }

        const user = new User(data)
        const result = await user.save()

        res.json({status:200, result})
    })

    app.post('/login', async(req,res) =>{
        const user = await User.find({email:req.body.email})

        if(user.length === 0){
            res.json({status:404, msg:"email doesn't exist"})
        } else {
            const matchPassword = await bcrypt.compare(req.body.password, user[0].password)
            if(matchPassword){
                const token = jwt.sign({_id:user[0]._id},'pitichat',{expiresIn:'1h'})
                res.json({status:200,token,user:user[0]})
            } else {
                res.json({status:401, msg:"bad password"})
            }
        }
    })

    function withAuth(req,res,next){
        const token = req.headers['authorization']
        console.log(req.headers)
        if(token === null){
            res.json({status:401, msg:'bad token 1'})
        }
        jwt.verify(token,'pitichat',function(err,decoded){
            if(err){
                res.json({status:401, msg:"bad token 2"})
                console.log(err)
            }
            req.body._id = decoded._id
            next()
        })
    }

    app.get('/checkToken', withAuth, async(req,res) =>{
        const user = await User.find({_id:req.body_id})
        res.json({status:200, msg:"token ok", user:user[0]})
    })




}

module.exports = usersRoutes