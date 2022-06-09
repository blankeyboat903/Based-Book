
const { AuthenticationError } = require('apollo-server-express');
const { Meme, Comments, User } = require('../models');
const { signToken } = require('../utils/auth');


const resolvers = {
  Query: {
    meme: async () => {
      return Meme.find({});
    },
    comments: async (parent, { _id }) => {
      const params = id ? { _id } : {};
      return Comment.find(params);
    },
  },

  Mutation: {
    createMeme: async (parent, {image}) => {
      const meme = await Meme.create({image});
      return meme;
    },
    createComment: async (parent, {name, comment}) => {
      const comments = await Comment.create({name, comment});
      return comments;
    },
    // login: async (parent, { email, password }) => {
    //     const user = await User.findOne({ email });

    //     if (!user) {
    //       throw new AuthenticationError('No user found with this email address');
    //     }

    //     const correctPw = await user.isCorrectPassword(password);

    //     if (!correctPw) {
    //       throw new AuthenticationError('Incorrect credentials');
    //     }

    //     const token = signToken(user);

    //     return { token, user };
    //   },

  },
};
module.exports = resolvers;