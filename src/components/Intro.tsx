import { Box, Typography } from "@mui/material";
import React from "react";
import image from "../images/wallpaperflare.com_wallpaper.jpg";

export const Intro = () => {
  return (
    <Box
      sx={{
        overflowX: "hidden",
        marginTop: "10px",
        maxWidth: "100%",
        maxHeight: "100%",
        backgroundImage: `url(${image})`,
        height: "900px",
        backgroundSize: "cover",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap",
          backgroundColor: "black",
          opacity: "0.8",
          width: "50%",
          maxWidth: "100%",
          //   border: "1px solid yellow",
          maxHeight: "100%",
          margin: "200px auto",
          textAlign: "center",
          paddingBottom: "50px",
        }}
      >
        <div
          style={{
            // margin: " 0 auto 10%",

            border: "19px solid yellow",
            height: "100px",
            width: "0",
          }}
        />
        <Typography
          maxWidth="100%"
          width="50%"
          sx={{
            color: "white",
            fontWeight: "bold",
            fontFamily: "Georgia, 'Times New Roman', Times, serif",
          }}
          variant="h3"
          paddingTop="40px "
        >
          New Arrivals!
        </Typography>

        <Typography
          align="center"
          maxWidth="100%"
          width="555px"
          variant="body1"
          maxHeight="50%"
          height="auto"
          sx={{
            textAlign: "center",
            // border: "1px solid yellow",
            margin: " 30px auto 0",
            fontSize: "20px",
            color: "white",
          }}
        >
          Shopping Mart, Try our newly Arrived collection explore here with new
          delightful experince . with new fashion way ,collect your simple
          outfit.
        </Typography>
      </Box>
    </Box>
  );
};
