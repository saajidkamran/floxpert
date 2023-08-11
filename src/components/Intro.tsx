import { Box, Typography } from '@mui/material'
import React from 'react'
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
      overflow:"hidden"
    }}
  >
    <Box
      sx={{
        backgroundColor: "black",
        opacity: "0.8",
        width:"70%",
        height: "60%",
        margin: "200px auto",
        textAlign: "center",
      }}
    >
      <Typography
        sx={{
          color: "white",
          fontWeight: "bold",
          fontFamily: "Georgia, 'Times New Roman', Times, serif",
          
        }}
        variant="h2"
        paddingTop="50px "
      >
        New Arrivals!
      </Typography>
      <Typography
        align="center"
        maxWidth="100%"
        width="555px"
        variant="body1"
        maxHeight="50%"
        height={6}
        pt="5%"
        sx={{
          margin: " 30px auto 0" ,
          fontSize: "25px",
          color: "white",
        }}
      >
        Shopping Mart, Try our newly Arrived collection explore here with new
        delightful experince . with new fashion way ,collect your simple
        outfit.
      </Typography>
    </Box>
  </Box>
  )
}
