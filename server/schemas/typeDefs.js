const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Meme {
        _id: ID
        Image: String!
    }

    type Comment {
        _id: ID
        comment: String!
    }

    type Query {
       meme: [Meme]!
       comments: [Comment]!
       comments(id: ID!): Comments
    }

    type Mutation {
        createMeme(image: String!): Meme
        createComment(name: String!, comment: String!): Comments
        login(email: String!, password: String!)
    }
`;

module.export = typeDefs;