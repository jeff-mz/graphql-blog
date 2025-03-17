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

const GET_AUTHORS_INFO = gql`
  query {
    authors {
      authorAvatar {
        url
      }
      authorName
      authorSlug
      authorField
      id
    }
  }
`;

const GET_AUTHOR_INFO = gql`
  query MyQuery($slug: String) {
    author(where: { authorSlug: $slug }) {
      authorField
      authorName
      authorSlug
      authorDescription {
        text
      }
      id
      authorPosts {
        ... on Post {
          postCover {
            url
          }
          postTitle
          postSlug
        }
      }
      authorAvatar {
        url
      }
    }
  }
`;

const GET_ARTICLE_INFO = gql`
  query MyQuery($slug: String) {
    post(where: { postSlug: $slug }) {
      author {
        authorSlug
        authorName
        authorAvatar {
          url
        }
      }
      postCover {
        url
      }
      postDate
      postDescription {
        html
      }
      postTitle
      postSlug
    }
  }
`;
export { GET_BLOG_INFO, GET_AUTHORS_INFO, GET_AUTHOR_INFO, GET_ARTICLE_INFO };
