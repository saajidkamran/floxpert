import { Box, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import image from "../images/wallpaperflare.com_wallpaper.jpg";
import "./Intro.css";

export const Intro = () => {
  const myref: any = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
    });
    observer.observe(myref.current);
  }, []);
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
        backgroundColor: "black",
        maskImage:
          "linear-gradient(to bottom, rgba(120,120, 120, 1) 760px , rgba(120,120, 120, 0) 899px)",
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
          margin: "200px auto",
          textAlign: "center",
          paddingBottom: "50px",
        }}
      >
        <div
          ref={myref}
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
          Floxpert
        </Typography>

        <Typography
          align="left"
          maxWidth="100%"
          width="555px"
          variant="body1"
          maxHeight="50%"
          height="auto"
          sx={{
            animation: "moveleft 2s 1 normal forwards",
            margin: " 30px auto 0",
            fontSize: "20px",
            color: "white",
          }}
        >
          Fkoxpert is your trusted partner for real estate and rental
          properties. We offer brokerage, property management, and advisory
          services.
        </Typography>
      </Box>
    </Box>
  );
};
