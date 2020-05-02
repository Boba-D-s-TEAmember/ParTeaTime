const express = require("express");
const router = express.Router();
const Post = require("../models/post");

router.get("/", async (req, res) => {
  const posts = await Post.find();
  res.json(posts);
});

router.post("/", async (req, res) => {
  const post = new Post({
    title: req.body.title,
    caption: req.body.caption,
  });

  const savedPost = await post.save();
  res.json(savedPost);
});

router.delete("/:id", async (req, res) => {
  const deletedPost = await Post.deleteOne({ _id: req.params.id });
  res.json(deletedPost);
});

module.exports = router;
