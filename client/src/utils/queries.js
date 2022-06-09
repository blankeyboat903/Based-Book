import { gql } from '@apollo/client';

//created a frontend foundation for queries
export const QUERY_MEME = gql`
  query meme {
    meme {
      _id
      Image
    }
  }
`;

export const QUERY_COMMENT = gql`
  query comment {
    comment {
      _id
      comment
    }
  }
`;