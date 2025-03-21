import { Grid2, Container } from "@mui/material";
import Articles from "../articles/Articles";
import ArticleBanner from "../articles/ArticleBanner";
import Authors from "../authors/Authors";
import MostRead from "../articles/MostRead";

const HomePage = () => {
  return (
    <Container maxWidth="xl" sx={{ minHeight: "100vh" }}>
      <Grid2 container padding={{ mx: "1rem .5rem", xs: "1rem 0" }} spacing={3}>
        <Grid2 size={{ xs: 12 }} padding={"0px"} width={"100%"}>
          <ArticleBanner />
        </Grid2>

        <Grid2 size="12" margin=".5rem 0" mx="auto" width="100%">
          <Articles />
        </Grid2>

        <Grid2 size={{ xs: 12 }} margin="1rem 0">
          <Authors />
        </Grid2>

        <Grid2 size={{ xs: 12 }} margin="1rem 0">
          <MostRead />
        </Grid2>
      </Grid2>
    </Container>
  );
};

export default HomePage;
