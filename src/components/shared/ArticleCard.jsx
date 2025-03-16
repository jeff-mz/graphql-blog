/* eslint-disable react/prop-types */
import {
  Card,
  CardHeader,
  CardMedia,
  CardActions,
  Avatar,
  IconButton,
  Skeleton,
  Box,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import { Link } from "react-router-dom";

const ArticleCard = ({ post, loading }) => {
  // share button function
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: postTitle,
          text: `Check out this post by ${authorName}: ${postTitle}`,
          url: post.postSlug,
        });
      } catch (error) {
        alert("Error sharing:", error.message);
      }
    }
  };

  // skeleton loading state
  if (loading) {
    return (
      <Card
        sx={{
          maxWidth: 345,
          height: "380px",
          margin: "10px auto",
          borderRadius: "5px",
          backgroundColor: "primary.main",
        }}
      >
        <Skeleton variant="rectangular" width={345} height={194} />

        <CardHeader
          avatar={<Skeleton variant="circular" width={40} height={40} />}
          title={<Skeleton variant="text" width="80%" height={24} />}
          subheader={
            <Box>
              <Skeleton variant="text" width="60%" height={20} />
              <Skeleton variant="text" width="40%" height={20} />
            </Box>
          }
        />

        <CardActions disableSpacing>
          <Skeleton variant="circular" width={40} height={40} />
          <Skeleton variant="circular" width={40} height={40} />
        </CardActions>
      </Card>
    );
  }

  // actual content when not loading
  const {
    postTitle,
    postDate,
    author: { authorName, authorAvatar },
    postCover,
  } = post;

  return (
    <Card
      sx={{
        minWidth: 345,
        height: "380px",
        margin: "10px auto",
        borderRadius: "5px",
        backgroundColor: "primary.main",
      }}
    >
      <CardMedia
        component="img"
        height="194"
        image={postCover.url}
        alt={postTitle}
      />

      <CardHeader
        avatar={
          <Avatar
            src={authorAvatar.url}
            alt={authorName}
            sx={{ bgcolor: "primary.main" }}
          />
        }
        title={postTitle}
        subheader={
          <p style={{ marginTop: "5px" }}>
            <span style={{ marginRight: "16px" }}>{`${authorName}`}</span>
            <span> {new Date(postDate).toDateString().slice(3)}</span>
          </p>
        }
      />

      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share" onClick={() => handleShare()}>
          <ShareIcon />
        </IconButton>
        <Link to="/author/author">Read Article </Link>
      </CardActions>
    </Card>
  );
};

export default ArticleCard;
