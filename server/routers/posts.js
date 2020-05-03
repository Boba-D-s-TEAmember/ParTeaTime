const express = require("express");
const router = express.Router();
const Post = require("../models/post");
const mongoose = require("mongoose");
const multer = require("multer");
const uploadImage = require("../helpers/helpers");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, new Date().toISOString() + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  // reject a file
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

router.get("/", async (req, res) => {
  const posts = await Post.find();
  res.json(posts);
});

router.post("/", async (req, res) => {
  try {
    const myFile = req.file;
    const imageUrl = await uploadImage(myFile);
    console.log(req.title);

    const post = new Post({
      title: req.body.title,
      caption: req.body.caption,
      image: imageUrl,
    });

    console.log(post);

    const savedPost = await post.save();

    res.json({
      message: "Post Created Successfully && image uploaded",
      createdPost: {
        title: savedPost.title,
        caption: savedPost.caption,
        image: imageUrl,
        _id: savedPost._id,
        request: {
          type: "GET",
          url: "localhost:8080/posts/" + savedPost._id,
        },
      },
    });
  } catch (error) {
    res.send(error);
  }
});



router.delete("/:id", async (req, res) => {
  const deletedPost = await Post.deleteOne({ _id: req.params.id });
  res.json(deletedPost);
});

module.exports = router;
