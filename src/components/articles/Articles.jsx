import { useQuery } from "@apollo/client";
import { GET_BLOG_INFO } from "../../graphQl/queries";
import { Grid2 } from "@mui/material";
import CardEl from "../shared/CardEl";
import { CircularProgress } from "@mui/material";

const Articles = () => {
  const { data, loading, error } = useQuery(GET_BLOG_INFO);
  return (
    <>
      <Grid2 my={3} container>
        {loading && <CircularProgress disableShrink />}
        {data &&
          data.posts.map((post) => {
            return (
              <Grid2 key={post.id} size={{ xs: 12, sm: 6, lg: 4 }}>
                <CardEl post={post} />
              </Grid2>
            );
          })}
      </Grid2>
    </>
  );
};

export default Articles;
