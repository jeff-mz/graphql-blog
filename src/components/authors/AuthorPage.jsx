import { useQuery } from "@apollo/client";
import { Link, useParams } from "react-router-dom";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import {
  Container,
  Typography,
  Avatar,
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid2,
  Skeleton,
} from "@mui/material";
import { GET_AUTHOR_INFO } from "../../graphQl/queries";
import { capitalizeWords } from "../shared/functions";

const AuthorPage = () => {
  const { slug } = useParams();

  const { data, loading, error } = useQuery(GET_AUTHOR_INFO, {
    variables: { slug: slug },
  });

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const {
    authorName,
    authorAvatar,
    authorField,
    authorDescription,
    authorPosts,
  } = data?.author || {};

  return (
    <Container maxWidth="lg">
      <Box sx={{ textAlign: "center", my: "1rem" }}>
        <Grid2
          container
          sx={{
            width: "100%",
            backgroundColor: "primary.main",
            borderRadius: "10px",
          }}
        >
          {/* Avatar Skeleton or Avatar */}
          <Grid2 size={{ xs: 12, sm: 4 }} padding="1rem">
            {loading ? (
              <Skeleton
                variant="circular"
                width={150}
                height={150}
                sx={{ margin: "auto" }}
              />
            ) : (
              <Avatar
                alt={authorName}
                src={authorAvatar.url}
                sx={{ width: 150, height: 150, margin: "auto" }}
              />
            )}
          </Grid2>

          {/* Author Details Skeleton or Author Details */}
          <Grid2 size={{ xs: 12, sm: 8 }} textAlign="left" padding="1rem">
            {loading ? (
              <>
                <Skeleton
                  variant="text"
                  width="60%"
                  height={40}
                  sx={{ mt: 2 }}
                />
                <Skeleton variant="text" width="40%" height={30} />
                <Skeleton
                  variant="text"
                  width="80%"
                  height={100}
                  sx={{ mt: 2 }}
                />
              </>
            ) : (
              <>
                <Typography variant="h4" component="h1" sx={{ mt: 2 }}>
                  {capitalizeWords(authorName)}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  {capitalizeWords(authorField)}
                </Typography>
                <Typography
                  variant="p"
                  sx={{
                    mt: 2,
                    maxWidth: 600,
                    margin: "auto",
                    textWrap: "wrap",
                  }}
                >
                  {authorDescription.text}
                </Typography>
              </>
            )}
          </Grid2>
        </Grid2>

        {/* Posts Skeleton or Posts */}
        <Grid2 container sx={{ margin: "1rem 0" }}>
          {loading
            ? // Skeleton for posts while loading
              Array.from({ length: 3 }).map((_, index) => (
                <Grid2
                  key={index}
                  margin="0 auto"
                  size={{ xs: 12, sm: 6, md: 4 }}
                >
                  <Card
                    sx={{
                      minWidth: 345,
                      width: "280px",
                      height: "350px",
                      margin: "10px auto",
                      borderRadius: "5px",
                      backgroundColor: "primary.main",
                    }}
                  >
                    <CardActionArea>
                      <Skeleton
                        variant="rectangular"
                        width="100%"
                        height={140}
                      />
                      <CardContent>
                        <Skeleton variant="text" width="80%" height={40} />
                        <Skeleton variant="text" width="60%" height={30} />
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Skeleton variant="text" width="100px" height={30} />
                    </CardActions>
                  </Card>
                </Grid2>
              ))
            : // Actual posts when data is loaded
              authorPosts.map((post) => (
                <Grid2
                  key={post.id}
                  margin="0 auto"
                  size={{ xs: 12, sm: 6, md: 4 }}
                >
                  <Card
                    sx={{
                      minWidth: 345,
                      width: "280px",
                      height: "350px",
                      margin: "10px auto",
                      borderRadius: "5px",
                      backgroundColor: "primary.main",
                    }}
                  >
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="140"
                        image={post.postCover.url}
                        alt={post.postTitle}
                      />
                      <CardContent>
                        <Typography
                          gutterBottom
                          variant="h5"
                          sx={{ fontWeight: "bold" }}
                          component="p"
                          height="180"
                        >
                          {capitalizeWords(post.postTitle)}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Link
                        style={{
                          textDecoration: "none",
                          color: "main.primary",
                        }}
                        to={`/article/${post.postSlug}`}
                      >
                        Read Article
                      </Link>
                    </CardActions>
                  </Card>
                </Grid2>
              ))}
        </Grid2>
      </Box>
    </Container>
  );
};

export default AuthorPage;
