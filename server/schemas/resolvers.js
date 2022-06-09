
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

    // addUser: async (parent, { username, email, password }) => {
    //     const user = await User.create({ username, email, password });
    //     const token = signToken(user);
    //     return { token, user };
    //   },
    //   login: async (parent, { email, password }) => {
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
    addMeme: async (parent, {image}, context) => {
        if (context.user) {
            const meme = await Meme.create({
                Image
            });

            await User.findOneAndUpdate(
                {_id: context.user._id},
                {$addtoSet: { meme: meme._id}}
            );
            return meme;
        }
        throw new AuthenticationError('You need to be logged in!');
    },
    
    addComment: async (parent, {name, commentText}, context) => {
        if (context.user) {
            return Meme.findOneAndUpdate(
                { _id: MemeId},
                {
                    $addtoSet: {
                        commnets: { commentText}
                    },
                },
                {
                    new: true,
                    runValidators: true,
                  }
            );
        }
        throw new AuthenticationError('You need to be logged in!');
   
    },
  },
};
module.exports = resolvers;