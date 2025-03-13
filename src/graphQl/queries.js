import { gql } from "@apollo/client";

const GET_BLOG_INFO = gql`
  query {
    posts {
      id
      postDate
      postTitle
      postSlug
      profile {
        profileName
        profileAvatar {
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
export { GET_BLOG_INFO };
