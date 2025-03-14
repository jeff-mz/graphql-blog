import { gql } from "@apollo/client";

const GET_BLOG_INFO = gql`
  query {
    posts {
      id
      postDate
      postTitle
      postSlug
      profile {
        authorName
        authorField
        authorAvatar {
          url
        }
      }
      createdBy {
        name
      }
      postCover {
        url
      }
      postDescription {
        text
      }
    }
  }
`;

const GET_AUTHOR_INFO = gql`
  query {
    authors {
      authorName
      id
      authorAvatar {
        url
      }
      authorField
    }
  }
`;

export { GET_BLOG_INFO, GET_AUTHOR_INFO };
