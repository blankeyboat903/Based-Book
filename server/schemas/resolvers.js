const { Meme, Comments, User } = require('../models');
const resolvers = {
    Query: {
        meme: async () => {
            return Meme.find({});
        },
        comments: async (parent, { _id }) => {
            const params = id ? { _id } : {};
            return Comments.find(params);
        },
    },

    Mutation: {
        createMeme: async (parent, args) => {
            const meme = await Meme.create(args);
            return meme;
        },
        createComment: async (parent, args) => {
            const comments = await Comments.create(args);
            return comments;
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
      
            if (!user) {
              throw new AuthenticationError('No user found with this email address');
            }
      
            const correctPw = await user.isCorrectPassword(password);
      
            if (!correctPw) {
              throw new AuthenticationError('Incorrect credentials');
            }
      
            const token = signToken(user);
      
            return { token, user };
          },

    },
};
module.exports = resolvers;