const { Schema, model } = require('mongoose');

const commentSchema = new Schema({
    
    name: {
        type: String,
        required: true,
    },
    comment: {
        type: String,
        required: true,
    }
});

const Comment = model('Comment', commentSchema);
module.exports = Comment;