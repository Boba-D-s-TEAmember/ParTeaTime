const express = require("express");
const router = express.Router();
const Post = require("../models/post");
const mongoose = require("mongoose");
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
      cb(null, '../uploads/');
    },
    filename: function(req, file, cb) {
      cb(null, new Date().toISOString() + file.originalname);
    }
  });

  const fileFilter = (req, file, cb) => {
    // reject a file
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
      cb(null, true);
    } else {
      cb(null, false);
    }
  };

  
  const upload = multer({
    storage: storage,
    limits: {
      fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter
  });
  

router.get("/", async (req, res) => {
  const posts = await Post.find();
  res.json(posts);
});

router.post("/",upload.single('image'), async (req, res) => {
  const post = new Post({
    title: req.body.title,
    caption: req.body.caption,
    image : `${req.file.path}id:${req.body.title}`
  });
 console.log(post)
  const savedPost = await post.save();
  res.json({
      message: "Post Created Successfully", 
      createdProduct:{
          title: savedPost.title,
          caption: savedPost.caption, 
          _id: savedPost._id, 
          request:{
              type: 'GET',
              url:"localhost:8080/posts/"+savedPost._id
          }
      }
  })
});



router.delete("/:id", async (req, res) => {
  const deletedPost = await Post.deleteOne({ _id: req.params.id });
  res.json(deletedPost);
});

module.exports = router;
