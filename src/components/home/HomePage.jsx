import { Grid2, Container, Paper, Typography } from "@mui/material";
import Articles from "../articles/Articles";
import ArticleBanner from "../articles/ArticleBanner";
import Authors from "../authors/Authors";

const HomePage = () => {
  return (
    <Container maxWidth="xl" sx={{ minHeight: "100vh" }}>
      <Grid2 container padding={{ mx: "1rem .5rem", md: "1rem 0" }} spacing={3}>
        <Grid2 size={{ xs: 12 }}>
          <ArticleBanner />
        </Grid2>

        {/* Articles Section (9 units on medium and larger screens) */}
        <Grid2 size={{ xs: 12, md: 9 }} margin=".5rem 0">
          <Articles />
        </Grid2>

        {/* Authors Section (3 units on medium and larger screens) */}
        <Grid2 size={{ xs: 12, md: 3 }} margin="1rem 0">
          <Authors />
        </Grid2>
      </Grid2>
    </Container>
  );
};

export default HomePage;
