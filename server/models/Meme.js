const { Schema, model } = require('mongoose');

const memeSchema = new Schema({
    Image: {
        type: String,
        required: true,
    }
});

const Meme = model('Meme', memeSchema);
module.exports = Meme;