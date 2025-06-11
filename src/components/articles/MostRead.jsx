import { useQuery } from "@apollo/client";
import { GET_BLOG_INFO } from "../../graphQl/queries"; // Use your query
import { Box, Typography, Avatar, Skeleton } from "@mui/material";
import { Link } from "react-router";

// Utility function to truncate text to 5 words
const truncateDescription = (html) => {
  if (!html) return "No description available.";

  // Remove HTML tags and extract text
  const text = html.replace(/<[^>]+>/g, "");

  // Split into words and limit to 5 words
  const words = text.split(" ").slice(0, 5).join(" ");

  // Append "..." if the original text has more than 5 words
  return text.split(" ").length > 5 ? `${words}...` : words;
};

const MostRead = () => {
  const { data, loading, error } = useQuery(GET_BLOG_INFO); // Fetch posts using your query

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <Box
      sx={{
        padding: "1rem",
        borderRadius: "10px",
        backgroundColor: "primary.main",
      }}
    >
      {/* section heading */}
      <Typography variant="h4" fontWeight="bold" sx={{ marginBottom: "2rem" }}>
        Most Read
      </Typography>

      {/* posts container */}
      <Box>
        {loading
          ? // skeleton loading state for 3 posts
            Array.from({ length: 3 }).map((_, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" }, // Column on small devices, row on larger
                  gap: 3,
                  marginBottom: 4,
                }}
              >
                {/* skeleton for cover photo */}
                <Skeleton
                  variant="rectangular"
                  width={150}
                  height={150}
                  sx={{ borderRadius: "8px" }}
                />
                {/* skeleton for title, info, and description */}
                <Box sx={{ flexGrow: 1 }}>
                  <Skeleton
                    variant="text"
                    width="80%"
                    height={30}
                    sx={{ marginBottom: 1 }}
                  />
                  <Skeleton
                    variant="text"
                    width="60%"
                    height={20}
                    sx={{ marginBottom: 2 }}
                  />
                  <Skeleton variant="text" width="90%" height={60} />
                </Box>
              </Box>
            ))
          : // actual posts data
            data.posts.slice(0, 3).map((post) => (
              <Box
                key={post.id}
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" }, // Column on small devices, row on larger
                  gap: 3,
                  marginBottom: 4,
                  padding: ".5rem",
                }}
              >
                {/* cover photo */}
                <img
                  src={post.postCover.url}
                  alt={post.postTitle}
                  style={{
                    width: "300px",
                    height: "150px",
                    objectFit: "cover",
                    borderRadius: "8px",
                  }}
                />

                {/* post details */}
                <Box sx={{ flexGrow: 1 }}>
                  {/* post title */}
                  <Typography
                    variant="h6"
                    fontWeight="bold"
                    sx={{ marginBottom: 1 }}
                  >
                    <Link to={`/author/${post.postSlug}`}>
                      {post.postTitle}
                    </Link>
                  </Typography>

                  {/* author info and post date */}
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      marginBottom: 2,
                    }}
                  >
                    <Avatar
                      src={post.author.authorAvatar.url}
                      alt={post.author.authorName}
                      sx={{ width: 24, height: 24 }}
                    />
                    <Typography variant="body2" color="text.secondary">
                      {post.author.authorName}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      • {new Date(post.postDate).toLocaleDateString()}{" "}
                      {/* Format date */}
                    </Typography>
                  </Box>

                  {/* truncated description */}
                  <Typography variant="body1" color="text.secondary">
                    {truncateDescription(post.postDescription?.html)}
                  </Typography>
                </Box>
              </Box>
            ))}
      </Box>
    </Box>
  );
};

export default MostRead;
