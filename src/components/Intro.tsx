import { Box, Typography } from "@mui/material";
import React from "react";
import image from "../images/wallpaperflare.com_wallpaper.jpg";
import "./Intro.css";

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
        cursor: "default",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap",
          backgroundColor: "black",
          opacity: "0.8",
          width: "700px",
          maxWidth: "100%",
          transition: "width 2s",
          maxHeight: "100%",
          margin: "300px auto",
          textAlign: "center",
          paddingBottom: "50px",
        }}
      >
        <div
          style={{
            animation: "moveup 2s 1 normal forwards",
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
            animation: "moveleft 2s 1 normal forwards",
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
            animation: "moveleft 2s 1 normal forwards",
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
