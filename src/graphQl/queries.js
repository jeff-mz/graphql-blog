import { gql } from "@apollo/client";

const GET_BLOG_INFO = gql`
  query {
    posts {
      id
      postCover {
        url
      }
      postDate
      postSlug
      postTitle
      author {
        authorAvatar {
          url
        }
        authorField
        authorName
        authorSlug
      }
    }
  }
`;

const GET_AUTHOR_INFO = gql`
  query {
    authors {
      authorAvatar {
        url
      }
      authorName
      authorField
      id
    }
  }
`;

export { GET_BLOG_INFO, GET_AUTHOR_INFO };
