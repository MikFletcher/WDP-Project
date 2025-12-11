const express = require("express")
const Post = require("../models/post")
const router = express.Router()

router.get('/getPosts', (req, res) => {
    try{
        const posts = Post.getAllPosts()
        res.send(posts)
    }catch(err){
        res.status(401).send({message: err.message})
    }
})
//create
.post('/post', async (req,res) =>{
    try{
        const post = await Post.createPost()
        res.send(post)
    } catch(err){
        res.status(401).send({message:err.message})
    }
})

//update
.put(`/edit`, async (req, res) => {
    try{
        const post = await Post.editPost(req.body)
        res.send({...post})
    }catch(err){
        res.status(401).send({message: err.message})
    }
})

//delete
.put('/delte', async (req, res) =>{
    try{
        Post.deletePost(req.body.PostID)
        res.send({success: "Post Succesfully Removed"})
    }catch(err){
        res.status(401).send({message: err.message});
    }
})

//read
.post('/postSearch', async (req, res) =>{
    try{
        const post = await Post.findPost(req.body)
        res.send({...post})
    }catch(err){
        res.status(401).send({message: err.message})
    }
})

module.exports = router