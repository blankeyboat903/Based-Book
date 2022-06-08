const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Meme {
        _id: ID!
        Image: String!
    }

    type Comment {
        _id: ID!
        comment: String!
    }

    type Query {
       memes: [Meme]
       comments: [Comment]
       comments(id: ID!): [Comments]
    }

    type Mutation {
        createMeme(image: String!): Meme
        createComment(name: String!, comment: String!): [Comments]
    }
`
module.export = typeDefs