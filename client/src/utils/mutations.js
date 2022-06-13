import { gql } from '@apollo/client';
// just created a foundation to work on with this push



export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;


export const ADD_MEME = gql`
  mutation createMeme($image: String!) {
    createMeme(Meme: $Meme) {
      _id
      Meme
    }
  }
`;




export const ADD_COMMENT = gql`
  mutation addComment($MemeId: ID!, $commentText: String!) {
    addComment(MemeId: $MemeId, commentText: $commentText) {
      _id
      MemeText
      MemeAuthor
      createdAt
      comments {
        _id
        commentText
        createdAt
      }
    }
  }
`;


//Not sure if we need to add a Login on typeDefs.js
// export const CREATE_LOGIN = gql`
//   mutation createLogin($email: String!, $password: String!) {
//     createLogin(email: $email, password: $password) {
      
//     }
//   }
// `;