import { Grid2, Container, Paper, Typography } from "@mui/material";
import Articles from "../articles/Articles";

const HomePage = () => {
  return (
    <Container maxWidth="lg" sx={{ minHeight: "100vh" }}>
      <Grid2 container padding={{ mx: "1rem .5rem", md: "1rem 0" }} spacing={3}>
        {/* Articles Section (9 units on medium and larger screens) */}
        <Grid2 size={{ xs: 12, md: 9 }} margin=".5rem 0">
          <Paper elevation={3} sx={{ padding: 2 }}>
            <Typography variant="h5">Articles</Typography>
            <Typography>
              This is the articles section. It takes 9 units on medium and
              larger screens.
            </Typography>
          </Paper>
          <Articles />
        </Grid2>

        {/* Authors Section (3 units on medium and larger screens) */}
        <Grid2 size={{ xs: 12, md: 3 }} margin=".5rem 0">
          <Paper elevation={3} sx={{ padding: 2 }}>
            <Typography variant="h5">Authors</Typography>
            <Typography>
              This is the authors section. It takes 3 units on medium and larger
              screens.
            </Typography>
          </Paper>
        </Grid2>
      </Grid2>
    </Container>
  );
};

export default HomePage;
