import { Box, Typography, Avatar, Container, Skeleton } from "@mui/material";
import { capitalizeWords } from "../shared/functions";
import { GET_BLOG_INFO } from "../../graphQl/queries";
import { Swiper, SwiperSlide } from "swiper/react";
import { useQuery } from "@apollo/client";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper/modules";
import { useEffect, useState } from "react";

const ArticleBanner = () => {
  const { data, loading, error } = useQuery(GET_BLOG_INFO);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    if (data?.posts) {
      setArticles(data.posts.slice(0, 3));
    }
  }, [data]);

  // loading
  if (loading) {
    return (
      <Container maxWidth="xl" sx={{ borderRadius: "10px" }}>
        <Skeleton
          variant="rectangular"
          height={400}
          sx={{ borderRadius: "10px" }}
        />
      </Container>
    );
  }

  // error
  if (error) {
    return (
      <Container maxWidth="xl">
        <Typography color="error">{error.message}</Typography>
      </Container>
    );
  }

  // valid data
  return (
    <Container
      maxWidth="xl"
      sx={{
        padding: "0px",
        borderRadius: "10px",
        paddingTop: "0",
        marginTop: "0",
        width: "100%",
      }}
    >
      <Swiper
        spaceBetween={50}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        style={{ borderRadius: "10px" }}
      >
        {articles.map((article) => (
          <SwiperSlide key={article.id}>
            <Box
              sx={{
                borderRadius: "10px",
                position: "relative",
                height: "400px",
                width: "100%",
                backgroundImage: `url(${article.postCover.url})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "flex-start",
                color: "white",
                textAlign: "center",
                padding: 4,
                "&::before": {
                  content: '""',
                  borderRadius: "10px",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                },
              }}
            >
              {/* overlay content */}
              <Box
                sx={{ position: "relative", zIndex: 1, borderRadius: "10px" }}
              >
                {/* Title */}
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: "bold",
                    marginBottom: 2,
                    fontSize: {
                      xs: "1.8rem",
                      md: "3rem",
                      textAlign: "left",
                      width: "80%",
                    },
                  }}
                >
                  {article.postTitle}
                </Typography>

                {/* author info */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                  }}
                >
                  <Avatar
                    src={article.author.authorAvatar.url}
                    alt={article.author.authorName}
                    sx={{ width: 45, height: 45, marginRight: 2 }}
                  />
                  <Box>
                    <Typography
                      variant="h6"
                      sx={{
                        textAlign: "left",
                        fontWeight: "bold",
                        fontSize: "1rem",
                      }}
                    >
                      {capitalizeWords(article.author.authorName)}
                    </Typography>
                    <Typography
                      variant="p"
                      sx={{ color: "text.white", fontSize: ".8rem" }}
                    >
                      {capitalizeWords(article.author.authorField)}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default ArticleBanner;
