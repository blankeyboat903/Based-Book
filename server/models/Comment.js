const { Schema, model } = require('mongoose');

const commentSchema = new Schema({
    
    username: {
        type: String,
        required: true,
    },
    comments: [
        {
            commentText: {
                type: String,
                required: true,
                minlength: 1,
                maxlength: 280,
            },
        }
    ]
});

const Comment = model('Comment', commentSchema);
module.exports = Comment;
