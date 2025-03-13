import { Card, CardContent, Typography, Avatar, Box } from "@mui/material";

const authors = [
  {
    id: 1,
    name: "John Doe",
    position: "Frontend Developer",
    avatar:
      "https://eu-west-2.graphassets.com/cm7vpdc1c0bpa07mf8l5mhprt/cm7xe3sgdf8ed07mniiczm6ic",
  },
  {
    id: 2,
    name: "Jane Smith",
    position: "Backend Developer",
    avatar:
      "https://eu-west-2.graphassets.com/cm7vpdc1c0bpa07mf8l5mhprt/cm7xe3sgdf8ed07mniiczm6ic",
  },
  {
    id: 3,
    name: "Alice Johnson",
    position: "UI/UX Designer",
    avatar:
      "https://eu-west-2.graphassets.com/cm7vpdc1c0bpa07mf8l5mhprt/cm7xe3sgdf8ed07mniiczm6ic",
  },
];

const Authors = () => {
  return (
    <Card
      sx={{
        maxWidth: 345,
        padding: 2,
        backgroundColor: "#faf9f6",
        marginTop: 3,
      }}
    >
      <Typography variant="h6" sx={{ marginBottom: 2, fontWeight: "bold" }}>
        Authors
      </Typography>
      {authors.map((author) => (
        <Box
          key={author.id}
          sx={{ display: "flex", alignItems: "center", marginBottom: 2 }}
        >
          {/* Author Avatar */}
          <Avatar
            src={author.avatar}
            alt={author.name}
            sx={{ width: 56, height: 56, marginRight: 2 }}
          />
          {/* Author Name and Position */}
          <Box>
            <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
              {author.name}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {author.position}
            </Typography>
          </Box>
        </Box>
      ))}
    </Card>
  );
};

export default Authors;
