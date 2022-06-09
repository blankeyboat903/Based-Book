import { gql } from '@apollo/client';
// just created a foundation to work on with this push


export const CREATE_MEME = gql`
  mutation createMeme($image: String!) {
    createMeme(Meme: $Meme) {
      _id
      Meme
    }
  }
`;


export const CREATE_COMMENT = gql`
  mutation createComment($name: String!, $comment: String!) {
    createComment(name: $name, comment: $comment) {
      _id
      comment
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