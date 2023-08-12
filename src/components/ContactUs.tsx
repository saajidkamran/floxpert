import { Typography } from "@mui/material";
import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const ContactUs = () => {
  return (
    <div
      id="contact"
      style={{
        width: "100%",
        height: "200px",
        backgroundColor: "black",
        opacity: 0.8,
      }}
    >
      <div
        style={{
          color: "white",
          textAlign: "center",
          height: "100%",
          width: "100%",
        }}
      >
        <Typography
          mt={2}
          sx={{ cursor: "none" }}
          fontFamily={"fantasy"}
          fontSize={50}
        >
          Contact Us
        </Typography>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "30%",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <div
            style={{ border: "1px solid yellow", width: "5%", margin: "auto" }}
          />
        </div>
        <div
          style={{
            // border: "1px solid yellow",
            width: "20%",
            marginLeft: "auto",
            marginRight: "auto",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            marginTop: "15px",
            cursor: "pointer",
          }}
        >
          <InstagramIcon
            sx={{ margin: "10px", width: "50px", height: "50px" }}
          />
          <WhatsAppIcon
            sx={{ width: "50px", margin: "10px", height: "50px" }}
          />
          <FacebookIcon
            sx={{ width: "50px", height: "50px", margin: "10px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
