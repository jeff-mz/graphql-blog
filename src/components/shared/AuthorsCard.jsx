import { Link } from "react-router";
import { useQuery } from "@apollo/client";
import { capitalizeWords } from "./functions";
import { GET_AUTHORS_INFO } from "../../graphQl/queries";
import { Typography, Avatar, Box, Skeleton } from "@mui/material";

const AuthorsCard = () => {
  const { data, loading, error } = useQuery(GET_AUTHORS_INFO);

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 2,
        marginTop: 3,
        backgroundColor: "primary.main",
        borderRadius: "10px",
      }}
    >
      {/* heading for the authors section */}
      <Typography
        variant="h3"
        fontSize={{ xs: "1.5rem", md: "2.5rem" }}
        fontWeight={"bold"}
        padding={"1rem 0rem "}
        component={"h3"}
      >
        Our Authors
      </Typography>

      {/* container for all authors */}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-around",
          flexDirection: { xs: "column", sm: "row" },
          flexWrap: "wrap", // wrap authors to the next row if needed
        }}
      >
        {loading
          ? // skeleton loading state for authors
            Array.from({ length: 3 }).map((_, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2, // space between avatar and info
                  marginBottom: 2,
                }}
              >
                {/* skeleton for avatar */}
                <Skeleton variant="circular" width={56} height={56} />
                {/* skeleton for info */}
                <Box>
                  <Skeleton
                    variant="text"
                    width={100}
                    height={24}
                    sx={{ marginBottom: 1 }}
                  />
                  <Skeleton variant="text" width={80} height={20} />
                </Box>
              </Box>
            ))
          : // actual authors data
            data.authors.map((author) => (
              <Box
                key={author.id}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2, // space between avatar and info
                  marginBottom: 2,
                }}
              >
                {/* author avatar */}
                <Avatar
                  src={author.authorAvatar.url}
                  alt={author.authorName}
                  sx={{ width: 56, height: 56 }}
                />
                {/* author info */}
                <Box>
                  <Link to={`/author/${author.authorSlug}`}>
                    <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                      {capitalizeWords(author.authorName)}
                    </Typography>
                  </Link>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {capitalizeWords(author.authorField)}
                  </Typography>
                </Box>
              </Box>
            ))}
      </Box>
    </Box>
  );
};

export default AuthorsCard;
