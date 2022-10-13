const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");

//Create New Post
router.post("/", async (req, res) => {
    const newPost = new Post(req.body);
    try {
        const savedPost = await newPost.save();
        res.status(200).json(savedPost);
    } catch (err) {
        res.status(500).json(err);

    }
});

//Update The Post 
router.put("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (post.username === req.body.username) {

            try {
            } catch (err) {

            }
        }
    } catch (err) {
        res.status(500).json(err)
    }
})

//Delete The Post

//Get Post

module.exports = router;