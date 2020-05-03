const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const multer = require('multer')
const uploadImage = require('./helpers/helpers');


require("dotenv/config");
const PORT = process.env.PORT || 8000;
const DB_URI = process.env.DB_URI;

//Connect db
mongoose.connect(
    DB_URI,
    { useNewUrlParser: true },
    () => {
      console.log("connected to DB");
    }
  );

  const multerMid = multer({
    storage: multer.memoryStorage(),
    limits: {
      // no larger than 5mb.
      fileSize: 5 * 1024 * 1024,
    },
  });



//Middlewares
app.disable('x-powered-by')
app.use(multerMid.single('image'));
// app.use('/uploads', express.static('uploads'));
app.use(cors());
app.use(bodyParser());
app.use("/posts", require("./routers/posts"));



app.get("/", (req, res) => {
  res.send("Hello World");
});



app.listen(PORT, () => {
  console.log(`app Listening at ${PORT}`);
});
