import { Box, Typography, Avatar, Container, Skeleton } from "@mui/material";
import { GET_BLOG_INFO } from "../../graphQl/queries";
import { useQuery } from "@apollo/client";

const ArticleBanner = () => {
  const { data, loading, error } = useQuery(GET_BLOG_INFO);
  const blogInfo = data?.posts[0];

  // loading
  if (loading) {
    return (
      <Container maxWidth="xl" sx={{ borderRadius: "10px" }}>
        <Skeleton
          variant="rectangular"
          height={400}
          sx={{ borderRadius: "10px" }}
        />
      </Container>
    );
  }

  // error
  if (error) {
    return <p>{error.message}</p>;
  }

  // invalid data
  if (!blogInfo) {
    return <p>No Data Available !</p>;
  }

  // valid data
  const { postTitle, postCover, author } = blogInfo;
  const { authorName, authorAvatar, authorField } = author;
  return (
    <Container
      maxWidth="xl"
      sx={{
        padding: "0",
        borderRadius: "10px",
        paddingTop: "0",
        marginTop: "0",
      }}
    >
      <Box
        sx={{
          borderRadius: "10px",
          position: "relative",
          height: "400px",
          backgroundImage: `url(${postCover.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
          color: "white",
          textAlign: "center",
          padding: 4,
          "&::before": {
            content: '""',
            borderRadius: "10px",
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          },
        }}
      >
        {/* overlay content */}
        <Box sx={{ position: "relative", zIndex: 1, borderRadius: "10px" }}>
          {/* Title */}
          <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: 2 }}>
            {postTitle}
          </Typography>

          {/* author info */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <Avatar
              src={authorAvatar.url}
              alt={authorName}
              sx={{ width: 56, height: 56, marginRight: 2 }}
            />
            <Box>
              <Typography
                variant="h6"
                sx={{ textAlign: "left", fontWeight: "bold" }}
              >
                {authorName}
              </Typography>
              <Typography variant="body1" sx={{ color: "text.white" }}>
                {authorField.replace(
                  authorField[0],
                  authorField[0].toUpperCase()
                )}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default ArticleBanner;
