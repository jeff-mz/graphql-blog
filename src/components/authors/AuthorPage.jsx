import {
  Container,
  Typography,
  Avatar,
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Link,
} from "@mui/material";

const AuthorPage = () => {
  const author = {
    name: "John Doe",
    position: "Senior Writer",
    avatarUrl: "https://via.placeholder.com/150",
    about:
      "John Doe is a seasoned writer with over 10 years of experience in technology and lifestyle blogging. He enjoys exploring new trends and sharing insights with his readers.",
  };

  const relatedArticles = [
    {
      title: "The Future of Artificial Intelligence",
      url: "#",
      coverImage: "https://via.placeholder.com/400x200",
      description:
        "Explore how AI is transforming industries and what the future holds for this groundbreaking technology.",
    },
    {
      title: "Top 10 Programming Languages to Learn in 2023",
      url: "#",
      coverImage: "https://via.placeholder.com/400x200",
      description:
        "Discover the most in-demand programming languages this year and why you should consider learning them.",
    },
    {
      title: "How to Stay Productive While Working Remotely",
      url: "#",
      coverImage: "https://via.placeholder.com/400x200",
      description:
        "Practical tips and tools to help you stay focused and productive when working from home.",
    },
    {
      title: "The Rise of Quantum Computing",
      url: "#",
      coverImage: "https://via.placeholder.com/400x200",
      description:
        "Learn about the potential of quantum computing and how it could revolutionize the tech industry.",
    },
  ];

  return (
    <Container>
      {/* Author Section */}
      <Box sx={{ textAlign: "center", my: 4 }}>
        <Avatar
          alt={author.name}
          src={author.avatarUrl}
          sx={{ width: 150, height: 150, margin: "auto" }}
        />
        <Typography variant="h4" component="h1" sx={{ mt: 2 }}>
          {author.name}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          {author.position}
        </Typography>
        <Typography
          variant="body1"
          sx={{ mt: 2, maxWidth: 600, margin: "auto" }}
        >
          {author.about}
        </Typography>
      </Box>

      {/* Related Articles Section */}
      <Box sx={{ mt: 6 }}>
        <Typography variant="h5" component="h2" sx={{ mb: 3 }}>
          Related Articles
        </Typography>
        <Grid container spacing={3}>
          {relatedArticles.map((article, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card>
                {/* Cover Image */}
                <CardMedia
                  component="img"
                  height="140"
                  image={article.coverImage}
                  alt={article.title}
                />
                <CardContent>
                  {/* Article Title */}
                  <Typography variant="h6" component="h3" sx={{ mb: 1 }}>
                    {article.title}
                  </Typography>
                  {/* Article Description */}
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    sx={{ mb: 2 }}
                  >
                    {article.description}
                  </Typography>
                  {/* Read Article Button */}
                  <Button
                    variant="contained"
                    component={Link}
                    href={article.url}
                    sx={{ textTransform: "none" }}
                  >
                    Read Article
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default AuthorPage;
