import { useQuery } from "@apollo/client";
import { GET_BLOG_INFO } from "../../graphQl/queries";
import { Grid, CircularProgress, Box } from "@mui/material";
import ArticleCard from "../shared/ArticleCard";

const Articles = () => {
  const { data, loading, error } = useQuery(GET_BLOG_INFO);

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <Box my={3}>
      <Grid container spacing={3}>
        {loading
          ? // Skeleton loading state for 12 cards
            Array.from({ length: 12 }).map((_, index) => (
              <Grid key={index} item xs={12} sm={6} lg={4}>
                <ArticleCard loading={true} />
              </Grid>
            ))
          : // Render actual data when not loading
            data.posts.map((post) => (
              <Grid key={post.id} item xs={12} sm={6} lg={4}>
                <ArticleCard post={post} loading={false} />
              </Grid>
            ))}
      </Grid>
    </Box>
  );
};

export default Articles;
