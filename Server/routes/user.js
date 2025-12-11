const express = require("express")
const User = require("../models/user")
const router = express.Router()

router.get('/getUsers', async (req, res) => {
    try{
        const users = await User.getAllUsers()
        res.send(users)
    }catch(err){
        res.status(401).send({message: err.message})
    } 
})

//read
.post('/login', async (req, res) => {
    try {
        const user = await User.login(req.body)
        res.send({...User, Password: undefined})
    } catch(err){
        res.status(401).send({message: err.message})
    }
})

//create
.post('/register', async (req, res) => {
    try{
        const user = await User.register(req.body)
        comsole.log(user)
        res.send({...User, Password: undefined})
    }catch(err){
        res.status(401).send({message: err.message})
    }
})

//update
.put('/edit', async (req, res) =>{
    try{
        const user = await User.editUser(req.body)
        res.send({...user, Password: undefined})
    }catch(error){
        res.status(401).send({message: error.message})
    }
})

//delete
.delete('/delete', async (req, res) => {
    try{
        await User.deleteUser(req.body.UserID)
        res.send({success: "Account Succesfully Deleted"})
    }catch(error){
        res.status(401).send({message: error.message})
    }
})

module.exports = router