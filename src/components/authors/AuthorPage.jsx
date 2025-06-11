import { useQuery } from "@apollo/client";
import { Link, useParams } from "react-router-dom";
import {
  Container,
  Typography,
  Avatar,
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Skeleton,
  useTheme,
  Paper,
  Chip,
  Divider,
  Button,
  Stack,
} from "@mui/material";
import { GET_AUTHOR_INFO } from "../../graphQl/queries";
import { capitalizeWords } from "../shared/functions";
import { BookmarkBorder, ArrowForward } from "@mui/icons-material";

const AuthorPage = () => {
  const { slug } = useParams();
  const theme = useTheme();

  const { data, loading, error } = useQuery(GET_AUTHOR_INFO, {
    variables: { slug: slug },
  });

  if (error) {
    return (
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Paper elevation={3} sx={{ p: 3, textAlign: "center" }}>
          <Typography color="error" variant="h6">
            Error: {error.message}
          </Typography>
        </Paper>
      </Container>
    );
  }

  const {
    authorName,
    authorAvatar,
    authorField,
    authorDescription,
    authorPosts,
  } = data?.author || {};

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Author Header Section */}
      <Paper
        elevation={3}
        sx={{
          p: { xs: 2, md: 4 },
          mb: 4,
          borderRadius: 3,
          background:
            theme.palette.mode === "dark"
              ? "linear-gradient(135deg, #2c3e50 0%, #1a1a1a 100%)"
              : "linear-gradient(135deg, #f5f7fa 0%, #e4e8eb 100%)",
          position: "relative",
          overflow: "hidden",
          "&:before": {
            content: '""',
            position: "absolute",
            top: 0,
            right: 0,
            width: "100%",
            height: "100%",
            background:
              theme.palette.mode === "dark"
                ? "radial-gradient(circle at 80% 20%, rgba(46, 125, 204, 0.1) 0%, transparent 40%)"
                : "radial-gradient(circle at 80% 20%, rgba(100, 181, 246, 0.1) 0%, transparent 40%)",
            zIndex: 0,
          },
        }}
      >
        <Box sx={{ position: "relative", zIndex: 1 }}>
          <Grid container spacing={4} alignItems="center">
            <Grid
              item
              xs={12}
              sm={4}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              {loading ? (
                <Skeleton
                  variant="circular"
                  width={180}
                  height={180}
                  sx={{
                    margin: "auto",
                    boxShadow: theme.shadows[4],
                  }}
                />
              ) : (
                <Avatar
                  alt={authorName}
                  src={authorAvatar.url}
                  sx={{
                    width: 180,
                    height: 180,
                    boxShadow: theme.shadows[4],
                    border: `4px solid ${
                      theme.palette.mode === "dark"
                        ? theme.palette.primary.dark
                        : theme.palette.primary.light
                    }`,
                  }}
                />
              )}
            </Grid>

            <Grid item xs={12} sm={8}>
              {loading ? (
                <>
                  <Skeleton variant="text" width="60%" height={50} />
                  <Skeleton
                    variant="text"
                    width="40%"
                    height={30}
                    sx={{ mb: 2 }}
                  />
                  <Skeleton variant="rounded" width="100%" height={100} />
                </>
              ) : (
                <>
                  <Typography
                    variant="h3"
                    component="h1"
                    sx={{
                      fontWeight: 700,
                      mb: 1,
                      background:
                        theme.palette.mode === "dark"
                          ? "linear-gradient(45deg, #64b5f6, #bbdefb)"
                          : "linear-gradient(45deg, #1976d2, #2196f3)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {capitalizeWords(authorName)}
                  </Typography>

                  <Chip
                    label={capitalizeWords(authorField)}
                    color="primary"
                    variant="outlined"
                    sx={{
                      mb: 3,
                      fontWeight: 600,
                      borderWidth: 2,
                      "& .MuiChip-label": {
                        px: 1.5,
                      },
                    }}
                  />

                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: "1.1rem",
                      lineHeight: 1.7,
                      color: theme.palette.text.secondary,
                    }}
                  >
                    {authorDescription.text}
                  </Typography>
                </>
              )}
            </Grid>
          </Grid>
        </Box>
      </Paper>

      {/* Posts Section */}
      <Box sx={{ mb: 4 }}>
        <Typography
          variant="h5"
          component="h2"
          sx={{
            fontWeight: 600,
            mb: 3,
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          <BookmarkBorder fontSize="medium" />
          {loading ? (
            <Skeleton variant="text" width={200} />
          ) : (
            `${authorPosts?.length || 0} Published Articles`
          )}
        </Typography>

        <Divider sx={{ mb: 4 }} />

        <Grid container spacing={3}>
          {loading
            ? Array.from({ length: 3 }).map((_, index) => (
                <Grid item key={index} xs={12} sm={6} md={4}>
                  <Card
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      transition: "transform 0.3s, box-shadow 0.3s",
                      "&:hover": {
                        transform: "translateY(-5px)",
                        boxShadow: theme.shadows[6],
                      },
                    }}
                  >
                    <Skeleton
                      variant="rectangular"
                      width="100%"
                      height={180}
                      sx={{
                        borderTopLeftRadius: "inherit",
                        borderTopRightRadius: "inherit",
                      }}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Skeleton variant="text" width="80%" height={32} />
                      <Skeleton
                        variant="text"
                        width="60%"
                        height={24}
                        sx={{ mt: 1 }}
                      />
                    </CardContent>
                    <CardContent>
                      <Skeleton variant="rounded" width={120} height={36} />
                    </CardContent>
                  </Card>
                </Grid>
              ))
            : authorPosts.map((post) => (
                <Grid item key={post.id} xs={12} sm={6} md={4}>
                  <Card
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      transition: "transform 0.3s, box-shadow 0.3s",
                      "&:hover": {
                        transform: "translateY(-5px)",
                        boxShadow: theme.shadows[6],
                      },
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="180"
                      image={post.postCover.url}
                      alt={post.postTitle}
                      sx={{
                        objectFit: "cover",
                        filter:
                          theme.palette.mode === "dark"
                            ? "brightness(0.85)"
                            : "none",
                      }}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography
                        gutterBottom
                        variant="h6"
                        component="h3"
                        sx={{
                          fontWeight: 600,
                          display: "-webkit-box",
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                        }}
                      >
                        {capitalizeWords(post.postTitle)}
                      </Typography>
                    </CardContent>
                    <CardContent>
                      <Button
                        component={Link}
                        to={`/article/${post.postSlug}`}
                        endIcon={<ArrowForward />}
                        sx={{
                          fontWeight: 600,
                          textTransform: "none",
                        }}
                      >
                        Read Article
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
        </Grid>
      </Box>

      {/* Empty State */}
      {!loading && (!authorPosts || authorPosts.length === 0) && (
        <Paper elevation={0} sx={{ p: 4, textAlign: "center" }}>
          <Typography variant="h6" color="textSecondary">
            No articles published yet
          </Typography>
        </Paper>
      )}
    </Container>
  );
};

export default AuthorPage;
