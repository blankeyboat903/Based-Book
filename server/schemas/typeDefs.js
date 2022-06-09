const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
    _id: ID
    username: String
    email: String
    password: String
    comment: [Comment]!
  }
    type Meme {
        _id: ID
        Image: String!
    }

    type Comment {
        _id: ID
        commentText: String!
        comments: [Comment]!
    }

    type Query {
        users: [User]
        user(username: String!): User
        memes: [Meme]
        memes:(Image: String!): Meme
        comments: [Comment]!
        comments(id: ID!): Comments
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        addMeme(image: String!): Meme
        addComment(name: String!, comment: String!): Comments
        removeMeme(image: String!): Meme
        removeComment(name: String!, comment: String!): Comments
        
    }
`;

module.export = typeDefs;