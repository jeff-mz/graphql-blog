// import React from "react";
// import { Box, Typography, Avatar,Container } from "@mui/material";

// const Banner = () => {
//   const coverImage =
//     "https://eu-west-2.graphassets.com/cm7vpdc1c0bpa07mf8l5mhprt/cm7x4tpo7bzli07mjfagpx6qv";
//   const title = "How to Get Started with Frontend Development in 2025";
//   const author = {
//     name: "Jon Doe",
//     avatar: "https://eu-west-2.graphassets.com/cm7vpdc1c0bpa07mf8l5mhprt/cm7xe3sgdf8ed07mniiczm6ic",
//     position: "Frontend Developer",
//   };

// const ArticleBanner = () => {
//   return (
//     <Container maxWidth="xl">
//        <Box
//       sx={{
//         position: "relative",
//         height: "400px", // Adjust height as needed
//         backgroundImage: `url(${coverImage})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         display: "flex",
//         alignItems: "flex-end", // Align content to the bottom
//         justifyContent: "center", // Center content horizontally
//         color: "white",
//         textAlign: "center",
//         padding: 4,
//         "&::before": {
//           content: '""',
//           position: "absolute",
//           top: 0,
//           left: 0,
//           right: 0,
//           bottom: 0,
//           backgroundColor: "rgba(0, 0, 0, 0.5)", // Dark overlay
//         },
//       }}
//     >
//       {/* Overlay Content */}
//       <Box sx={{ position: "relative", zIndex: 1 }}>
//         {/* Title */}
//         <Typography variant="h3" sx={{ fontWeight: "bold", marginBottom: 2 }}>
//           {title}
//         </Typography>

//         {/* Author Info */}
//         <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
//           <Avatar
//             src={author.avatar}
//             alt={author.name}
//             sx={{ width: 56, height: 56, marginRight: 2 }}
//           />
//           <Box>
//             <Typography variant="h6" sx={{ fontWeight: "bold" }}>
//               {author.name}
//             </Typography>
//             <Typography variant="body1" sx={{ color: "text.secondary" }}>
//               {author.position}
//             </Typography>
//           </Box>
//         </Box>
//       </Box>
//     </Box>

//     </Container>
//   );
// };

// export default ArticleBanner;
