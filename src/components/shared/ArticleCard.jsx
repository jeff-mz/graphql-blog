/* eslint-disable react/prop-types */
import {
  Card,
  CardHeader,
  CardMedia,
  CardActions,
  Avatar,
  Skeleton,
  Box,
} from "@mui/material";
import { Link } from "react-router-dom";

const ArticleCard = ({ post, loading }) => {
  // skeleton loading state
  if (loading) {
    return (
      <Card
        sx={{
          width: "300px",
          maxWidth: "345px",
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
    postSlug,
    author: { authorName, authorAvatar, authorSlug },
    postCover,
  } = post;

  return (
    <Card
      sx={{
        width: "280px",
        minWidth: "300px",
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
        <Link to={`/article/${postSlug}`}>Read Article </Link>
      </CardActions>
    </Card>
  );
};

export default ArticleCard;
