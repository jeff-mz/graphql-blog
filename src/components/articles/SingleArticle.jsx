import { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_ARTICLE_INFO } from "../../graphQl/queries";
import { useNavigate, useParams } from "react-router-dom";
import {
  Container,
  Typography,
  Avatar,
  Box,
  Skeleton,
  CardMedia,
  Grid2,
  IconButton,
  TextField,
  List,
  Button,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import SendIcon from "@mui/icons-material/Send";

const SingleArticle = () => {
  const { slug } = useParams();
  const [newComment, setNewComment] = useState("");
  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newUser, setNewUser] = useState({
    email: "",
    name: "",
    comment: "",
    id: 0,
  });

  const [commentList, setCommentList] = useState([]);
  const navigator = useNavigate();

  const { data, loading, error } = useQuery(GET_ARTICLE_INFO, {
    variables: { slug: slug },
  });

  const handleComments = () => {
    const newCommentObj = {
      email: newEmail,
      comment: newComment,
      name: newName,
      id: newUser.id + 1,
    };

    setCommentList((prevComments) => [...prevComments, newCommentObj]);
    setNewUser((prevState) => ({ ...prevState, id: prevState.id + 1 }));
    setNewComment("");
    setNewName("");
    setNewEmail("");
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.postTitle,
          text: `Check out this post by ${post.author.authorName}: ${post.postTitle}`,
          url: window.location.href,
        });
      } catch (error) {
        alert("Error sharing:", error.message);
      }
    } else {
      alert("Web Share API is not supported in your browser.");
    }
  };

  if (error) {
    return <Typography variant="h6">Error: {error.message}</Typography>;
  }

  if (loading) {
    return (
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", my: "1rem" }}>
          <Skeleton variant="rectangular" width="100px" height="30px" />
          <Skeleton variant="rectangular" width="100%" height={400} />
          <Box sx={{ mt: 4 }}>
            <Skeleton
              variant="text"
              width="60%"
              height={60}
              sx={{ margin: "auto" }}
            />
          </Box>
          <Grid2
            container
            spacing={2}
            maxWidth="lg"
            sx={{ mt: 2, alignItems: "center" }}
          ></Grid2>
          <Box sx={{ my: 4, textAlign: "left" }}>
            <Skeleton variant="text" width="100%" height={30} />
            <Skeleton variant="text" width="100%" height={30} />
            <Skeleton variant="text" width="80%" height={30} />
          </Box>
          <Grid2 container>
            <Grid2 size={12} textAlign="left">
              <Box sx={{ display: "flex", gap: 2 }}>
                <Skeleton variant="circular" width={40} height={40} />
                <Skeleton variant="circular" width={40} height={40} />
                <Skeleton variant="circular" width={40} height={40} />
              </Box>
            </Grid2>
            <Grid2>
              <Box sx={{ maxWidth: 600, margin: "auto", padding: 2 }}>
                <Typography variant="h6" gutterBottom>
                  <Skeleton variant="text" width={100} />
                </Typography>
                <Box sx={{ display: "flex", gap: 2, marginBottom: 3 }}>
                  <Skeleton variant="rectangular" width="100%" height={56} />
                  <Skeleton variant="rectangular" width={120} height={56} />
                </Box>
              </Box>
            </Grid2>
          </Grid2>
        </Box>
      </Container>
    );
  }

  const post = data?.post;
  if (!post) {
    return <Typography variant="h6">Article not found.</Typography>;
  }

  return (
    <Container maxWidth="lg">
      <Box sx={{ textAlign: "center", my: "1rem" }}>
        <button
          style={{
            textAlign: "left",
            margin: "1rem 0rem ",
            background: "none",
            border: "none",
            alignSelf: "flex-start",
            display: "flex",
            cursor: "pointer",
          }}
          onClick={() => navigator(-1)}
        >
          <ArrowBackIcon />
        </button>
        <CardMedia
          component="img"
          height="400"
          image={post.postCover.url}
          alt={post.postTitle}
        />
        <Box sx={{ mt: 4 }}>
          <Typography
            variant="h3"
            fontWeight="bold"
            sx={{ textWrap: "wrap", wordWrap: "break-word" }}
            component="h1"
            gutterBottom
          >
            {post.postTitle}
          </Typography>
        </Box>
        <Grid2
          container
          spacing={2}
          maxWidth="lg"
          sx={{ mt: 2, alignItems: "center" }}
        >
          <Grid2 item xs={12} sm={10} textAlign="left" display={"flex"}>
            <Avatar
              alt={post.author.authorName}
              src={post.author.authorAvatar.url}
              sx={{ width: 50, height: 50, marginRight: "14px" }}
            />
            <Box>
              <Typography variant="h6" component="h2">
                {post.author.authorName}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {post.postDate}
              </Typography>
            </Box>
          </Grid2>
        </Grid2>
        <Box sx={{ my: 4, textAlign: "left" }}>
          <div
            dangerouslySetInnerHTML={{ __html: post.postDescription.html }}
          />
        </Box>
        <hr />
        <Grid2 container>
          <Grid2 size={12} textAlign="left">
            <IconButton aria-label="share" onClick={handleShare}>
              <ShareIcon />
            </IconButton>
            <IconButton aria-label="like">
              <ThumbUpOffAltIcon />
            </IconButton>
            <IconButton aria-label="dislike">
              <ThumbDownOffAltIcon />
            </IconButton>
          </Grid2>
          <Grid2>
            <Box sx={{ margin: "auto" }}>
              <Typography textAlign={"left"} variant="h6" gutterBottom>
                Comments
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  py: 2,
                }}
              >
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleComments();
                  }}
                >
                  <TextField
                    fullWidth
                    label="Your Name"
                    name="name"
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    margin="normal"
                    required
                    variant="outlined"
                    placeholder="Enter your name"
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        "&:hover fieldset": {
                          borderColor: "#667eea",
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "#667eea",
                        },
                      },
                    }}
                  />
                  <TextField
                    fullWidth
                    label="Your Email"
                    name="email"
                    type="email"
                    value={newEmail}
                    onChange={(e) => setNewEmail(e.target.value)}
                    margin="normal"
                    required
                    variant="outlined"
                    placeholder="Enter your email"
                    helperText="We'll never share your email"
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        "&:hover fieldset": {
                          borderColor: "#667eea",
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "#667eea",
                        },
                      },
                    }}
                  />
                  <TextField
                    fullWidth
                    label="Your Comment"
                    name="comment"
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    margin="normal"
                    required
                    multiline
                    rows={6}
                    variant="outlined"
                    placeholder="Share your thoughts..."
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        "&:hover fieldset": {
                          borderColor: "#667eea",
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "#667eea",
                        },
                      },
                    }}
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    endIcon={<SendIcon size={12} />}
                    sx={{
                      mt: 4,
                      py: 1,
                      borderRadius: "12px",
                      textTransform: "none",
                      fontSize: "1.1rem",
                      fontWeight: 600,
                      transition: "all 0.3s ease-in-out",
                      width: "200px",
                      display: "flex",
                      alignSelf: "flex-start",
                      "&:hover": {
                        boxShadow: "0 8px 20px rgba(225, 219, 231, 0.3)",
                      },
                    }}
                  >
                    Send Comment
                  </Button>
                </form>
              </Box>
              <List>
                {commentList.map((comment, index) => (
                  <Box key={index}>
                    <ListItem>
                      <ListItemText
                        primary={comment.name}
                        secondary={
                          <>
                            <Typography variant="body1">
                              {comment.comment}
                            </Typography>
                          </>
                        }
                      />
                    </ListItem>
                    {index < commentList.length - 1 && <Divider />}
                  </Box>
                ))}
              </List>
            </Box>
          </Grid2>
        </Grid2>
      </Box>
    </Container>
  );
};

export default SingleArticle;
