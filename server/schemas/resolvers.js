const { Meme, Comments } = require('../models');
const resolvers = {
    Query: {
        meme: async () => {
            return Meme.find({});
        },
        comments: async (parent, { _id}) => {
            const params = id ? { _id} : {};
            return Comments.find(params);
        },
    },

    mutation: {
       createMeme: async (parent, args) => {
           const meme = await Meme.create(args);
           return meme;
       },
       createComment: async (parent, args) => {
        const comments = await Comments.create(args);
        return comments;
    },
    
    }
}