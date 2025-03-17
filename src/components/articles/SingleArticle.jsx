import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { GET_ARTICLE_INFO } from "../../graphQl/queries";
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
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import { useState } from "react";
const SingleArticle = () => {
  const { slug } = useParams();
  const [newComment, setNewComment] = useState("");
  const [commentList, setCommentList] = useState([]);
  const handleComments = () => {
    if (newComment !== "") {
      setCommentList([...commentList, newComment]);
      setNewComment("");
    }
  };

  const { data, loading, error } = useQuery(GET_ARTICLE_INFO, {
    variables: { slug: slug },
  });

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const post = data?.post;

  // share button function
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.postTitle,
          text: `Check out this post by ${post.authorName}: ${post.postTitle}`,
          url: post.postSlug,
        });
      } catch (error) {
        alert("Error sharing:", error.message);
      }
    }
  };
  return (
    <Container maxWidth="lg">
      <Box sx={{ textAlign: "center", my: "1rem" }}>
        {/* Post Cover Skeleton or Post Cover */}
        {loading ? (
          <Skeleton variant="rectangular" width="100%" height={400} />
        ) : (
          <CardMedia
            component="img"
            height="400"
            image={post.postCover.url}
            alt={post.postTitle}
          />
        )}

        {/* Post Title Skeleton or Post Title */}
        <Box sx={{ mt: 4 }}>
          {loading ? (
            <Skeleton
              variant="text"
              width="60%"
              height={60}
              sx={{ margin: "auto" }}
            />
          ) : (
            <Typography
              variant="h3"
              fontWeight="bold"
              sx={{ textWrap: "wrap", wordWrap: "break-word" }}
              component="h1"
              gutterBottom
            >
              {post.postTitle}
            </Typography>
          )}
        </Box>

        {/* Author Details Skeleton or Author Details */}
        <Grid2 container spacing={2} sx={{ mt: 2, alignItems: "center" }}>
          <Grid2 item xs={12} sm={2}>
            {loading ? (
              <Skeleton variant="circular" width={80} height={80} />
            ) : (
              <Avatar
                alt={post.author.authorName}
                src={post.author.authorAvatar.url}
                sx={{ width: 50, height: 50 }}
              />
            )}
          </Grid2>
          <Grid2 item xs={12} sm={10} textAlign="left">
            {loading ? (
              <>
                <Skeleton variant="text" width="40%" height={30} />
                <Skeleton variant="text" width="30%" height={20} />
              </>
            ) : (
              <>
                <Typography variant="h6" component="h2">
                  {post.author.authorName}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {new Date(post.postDate).toLocaleDateString()}
                </Typography>
              </>
            )}
          </Grid2>
        </Grid2>

        {/* Post Description Skeleton or Post Description */}
        <Box sx={{ my: 4, textAlign: "left" }}>
          {loading ? (
            <>
              <Skeleton variant="text" width="100%" height={30} />
              <Skeleton variant="text" width="100%" height={30} />
              <Skeleton variant="text" width="80%" height={30} />
            </>
          ) : (
            <div
              dangerouslySetInnerHTML={{ __html: post.postDescription.html }}
            />
          )}
        </Box>
        <hr />
        <Grid2 container>
          <Grid2 size={12} textAlign="left">
            <IconButton aria-label="share" onClick={() => handleShare()}>
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
            <Box sx={{ maxWidth: 600, margin: "auto", padding: 2 }}>
              <Typography variant="h6" gutterBottom>
                Comments
              </Typography>

              {/* Comment Input */}
              <Box sx={{ display: "flex", gap: 2, marginBottom: 3 }}>
                <TextField
                  fullWidth
                  variant="outlined"
                  placeholder="Add a comment..."
                  value={newComment}
                  onChange={(event) =>
                    setNewComment((prevState) => [event.target.value])
                  }
                />
                <Button variant="contained" onClick={() => handleComments()}>
                  Add new comment
                </Button>
              </Box>

              {/* Comments List */}
              <List>
                {commentList.map((comment, index) => (
                  <Box key={index}>
                    <ListItem>
                      <ListItemText primary={comment} />
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
