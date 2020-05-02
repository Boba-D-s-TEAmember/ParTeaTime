const express = require("express");
const router = express.Router();
const Post = require("../models/post");

router.get("/", async (req, res) => {
    const posts = await Post.find(); 
    res.json(posts)
});

router.post("/", async(req, res) => {
  const post = new Post({
    title: req.body.title,
    caption: req.body.caption,
  });

   const savedPost = await post.save()
    
   res.json(savedPost);
});

module.exports = router;
