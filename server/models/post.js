const mongoose = require('mongoose'); 

const PostSchema = mongoose.Schema({
    title:{
        type: String, 
        required: true
    },
    caption:{
        type: String, 
        required: true
    },
    date:{
        type: Date
    }
});

module.exports = mongoose.model('Posts',PostSchema);
