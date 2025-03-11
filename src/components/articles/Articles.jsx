import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import { useQuery } from "@apollo/client";
import { GET_BLOG_INFO } from "../../graphQl/queries";

const Articles = () => {
  const { data, loading, error } = useQuery(GET_BLOG_INFO);
  console.log(data);
  return <div>{data.length && <ArticleCard post={data[0]} />}</div>;
};

export default Articles;

const ArticleCard = ({ post }) => {
  const {
    postTitle,
    postDate,
    profile: { profileName, profileAvatar },
    postCover,
  } = post;

  return (
    <Card sx={{ maxWidth: 345 }}>
      {/* Card Header */}
      <CardHeader
        avatar={
          <Avatar
            src={profileAvatar.url} // Use profile avatar URL
            alt={profileName} // Use profile name as alt text
            sx={{ bgcolor: "primary.main" }} // Use primary color for fallback
          />
        }
        title={postTitle} // Use post title
        subheader={new Date(postDate).toLocaleDateString()} // Format post date
      />

      {/* Card Media (Cover Image) */}
      <CardMedia
        component="img"
        height="194"
        image={postCover.url} // Use post cover URL
        alt={postTitle} // Use post title as alt text
      />

      {/* Card Content */}
      <CardContent>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Posted by {profileName} {/* Display profile name */}
        </Typography>
      </CardContent>

      {/* Card Actions (Buttons) */}
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
