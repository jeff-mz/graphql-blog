import { useQuery } from "@apollo/client";
import { GET_BLOG_INFO } from "../../graphQl/queries";
import { Grid2, Box } from "@mui/material";
import ArticleCard from "../shared/ArticleCard";

const Articles = () => {
  const { data, loading, error } = useQuery(GET_BLOG_INFO);

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <Box my={3}>
      <Grid2 container spacing={3}>
        {loading
          ? // Skeleton loading state for 12 cards
            Array.from({ length: 12 }).map((_, index) => (
              <Grid2 key={index} size={{ xs: 12, sm: 6, lg: 6 }}>
                <ArticleCard loading={true} />
              </Grid2>
            ))
          : // Render actual data when not loading
            data.posts.map((post) => (
              <Grid2 key={post.id} size={{ xs: 12, sm: 6, lg: 6 }}>
                <ArticleCard post={post} loading={false} />
              </Grid2>
            ))}
      </Grid2>
    </Box>
  );
};

export default Articles;
