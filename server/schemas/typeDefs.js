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
        image: String
    }

    type Comment {
        _id: ID

        name: String
        comment: String
    }

    type Query {
       meme: [Meme]!
       comments: [Comment]!
    }

    type Mutation {
        createMeme(image: String!): Meme
        createComment(name: String!, comment: String!): Comment

    }
`;

module.export = typeDefs;