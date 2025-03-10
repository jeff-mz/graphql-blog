import { Box, Container, Grid2, Paper, Typography } from "@mui/material";
import Articles from "../articles/Articles";
import Authors from "../authors/Authors";

const HomePage = () => {
  return (
    <Container maxWidth="lg">
      <Grid2 container spacing={3}>
        {/* Articles Section (9 units on medium and larger screens) */}
        <Grid2 size={{ xs: 12, md: 9 }}>
          <Paper elevation={3} sx={{ padding: 2 }}>
            <Typography variant="h5">Articles</Typography>
            <Typography>
              This is the articles section. It takes 9 units on medium and
              larger screens.
            </Typography>
            <Articles />
          </Paper>
        </Grid2>

        {/* Authors Section (3 units on medium and larger screens) */}
        <Grid2 size={{ xs: 12, md: 3 }}>
          <Paper elevation={3} sx={{ padding: 2 }}>
            <Typography variant="h5">Authors</Typography>
            <Typography>
              This is the authors section. It takes 3 units on medium and larger
              screens.
            </Typography>
            <Authors />
          </Paper>
        </Grid2>
      </Grid2>
    </Container>
  );
};

export default HomePage;
