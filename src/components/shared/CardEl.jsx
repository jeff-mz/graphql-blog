/* eslint-disable react/prop-types */
import {
  Card,
  CardHeader,
  CardMedia,
  CardActions,
  Avatar,
  IconButton,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";

const CardEl = ({ post }) => {
  const {
    postTitle,
    postDate,
    profile: { profileName, profileAvatar },
    postCover,
  } = post;

  return (
    <Card
      sx={{
        maxWidth: 345,
        height: "380px",
        margin: "10px auto",
        backgroundColor: "#faf9f6",
        borderRadius: "5px",
      }}
    >
      {/*  cover image */}
      <CardMedia
        component="img"
        height="194"
        image={postCover.url}
        alt={postTitle}
      />

      {/* card header */}
      <CardHeader
        avatar={
          <Avatar
            src={profileAvatar.url}
            alt={profileName}
            sx={{ bgcolor: "primary.main" }}
          />
        }
        title={postTitle}
        subheader=<p style={{ marginTop: "5px" }}>
          <span style={{ marginRight: "16px" }}>{`${profileName}`}</span>
          <span> {new Date(postDate).toDateString().slice(3)}</span>
        </p>
      />

      {/* buttons */}
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default CardEl;
