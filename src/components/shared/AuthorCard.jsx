import { useQuery } from "@apollo/client";
import { GET_AUTHOR_INFO } from "../../graphQl/queries";
import { Card, Typography, Avatar, Box, Skeleton } from "@mui/material";
import { capitalizeWords } from "./functions";
const AuthorCard = () => {
  const { data, loading, error } = useQuery(GET_AUTHOR_INFO);
  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <Card
      sx={{
        maxWidth: 345,
        padding: 2,
        marginTop: 3,
        backgroundColor: "primary.main",
      }}
    >
      <Typography variant="h6" sx={{ marginBottom: 2, fontWeight: "bold" }}>
        Authors
      </Typography>
      {loading
        ? // Skeleton loading state
          Array.from({ length: 3 }).map((_, index) => (
            <Box
              key={index}
              sx={{ display: "flex", alignItems: "center", marginBottom: 2 }}
            >
              <Skeleton
                variant="circular"
                width={56}
                height={56}
                sx={{ marginRight: 2 }}
              />
              <Box sx={{ flexGrow: 1 }}>
                <Skeleton
                  variant="text"
                  width="60%"
                  height={24}
                  sx={{ marginBottom: 1 }}
                />
                <Skeleton variant="text" width="40%" height={20} />
              </Box>
            </Box>
          ))
        : // Actual content
          data.authors.map((author) => {
            return (
              <Box
                key={author.id}
                sx={{ display: "flex", alignItems: "center", marginBottom: 2 }}
              >
                <Avatar
                  src={author.authorAvatar.url}
                  alt={author.authorName}
                  sx={{ width: 56, height: 56, marginRight: 2 }}
                />
                <Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                    {capitalizeWords(author.authorName)}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {capitalizeWords(author.authorField)}
                  </Typography>
                </Box>
              </Box>
            );
          })}
    </Card>
  );
};

export default AuthorCard;
