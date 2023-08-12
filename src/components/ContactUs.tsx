import { IconButton, Typography } from "@mui/material";
import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";

const TikTokIcon = ({ color = "#000000" }) => {
  return (
    <svg
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 50 50"
      width="100%"
      height="42px"
    >
      <path d="M41,4H9C6.243,4,4,6.243,4,9v32c0,2.757,2.243,5,5,5h32c2.757,0,5-2.243,5-5V9C46,6.243,43.757,4,41,4z M37.006,22.323 c-0.227,0.021-0.457,0.035-0.69,0.035c-2.623,0-4.928-1.349-6.269-3.388c0,5.349,0,11.435,0,11.537c0,4.709-3.818,8.527-8.527,8.527 s-8.527-3.818-8.527-8.527s3.818-8.527,8.527-8.527c0.178,0,0.352,0.016,0.527,0.027v4.202c-0.175-0.021-0.347-0.053-0.527-0.053 c-2.404,0-4.352,1.948-4.352,4.352s1.948,4.352,4.352,4.352s4.527-1.894,4.527-4.298c0-0.095,0.042-19.594,0.042-19.594h4.016 c0.378,3.591,3.277,6.425,6.901,6.685V22.323z" />
    </svg>
  );
};
const ContactUs = () => {
  return (
    <div
      id="contact"
      style={{
        width: "100%",
        maxHeight: "100%",
        height: "auto",
        backgroundColor: "black",
        background:
          "linear-gradient(to bottom, #232526, #414345)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */,
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
            width: "100%",
            height: "auto",
            marginLeft: "auto",
            marginRight: "auto",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            marginTop: "15px",
            cursor: "pointer",
          }}
        >
          <IconButton
            sx={{ color: "white" }}
            href="https://www.instagram.com/floxpert_holdings/"
          >
            <InstagramIcon
              sx={{
                margin: "10px",
                width: "50px",
                height: "50px",
                "&:hover": {
                  transform: "scale(1.09)",
                },
              }}
            />
          </IconButton>

          <IconButton sx={{ color: "white" }} href="https://wa.me/0770097964">
            <WhatsAppIcon
              sx={{
                width: "50px",
                margin: "10px",
                height: "50px",
                "&:hover": {
                  transform: "scale(1.09)",
                },
              }}
            />
          </IconButton>

          <IconButton
            sx={{ color: "white" }}
            href="https://web.facebook.com/profile.php?id=100095552194393"
          >
            <FacebookIcon
              sx={{
                width: "50px",
                height: "50px",
                margin: "10px",
                "&:hover": {
                  transform: "scale(1.09)",
                },
              }}
            />
          </IconButton>
          <IconButton
            sx={{ color: "white" }}
            href="https://twitter.com/floxpert_hldngs"
          >
            <TwitterIcon
              sx={{
                width: "50px",
                height: "50px",
                margin: "10px",
                "&:hover": {
                  transform: "scale(1.09)",
                },
              }}
            />
          </IconButton>
          <IconButton
            sx={{ color: "white" }}
            href="https://www.youtube.com/@FloxpertHoldingsPrivateLimited/"
          >
            <YouTubeIcon
              sx={{
                width: "50px",
                height: "50px",
                margin: "10px",
                "&:hover": {
                  transform: "scale(1.09)",
                },
              }}
            />
          </IconButton>
          <IconButton
            sx={{ color: "white" }}
            href="https://www.linkedin.com/company/96357438/admin/feed/posts/"
          >
            <LinkedInIcon
              sx={{
                width: "50px",
                height: "50px",
                margin: "10px",
                "&:hover": {
                  transform: "scale(1.09)",
                },
              }}
            />
          </IconButton>
          <IconButton
            sx={{
              color: "white",
              width: "65px",
              height: "85px",
              "&:hover": {
                transform: "scale(1.09)",
              },
            }}
            href="https://www.tiktok.com/@floxpert_holdings?_t=8enYEdJVilO&_r=1"
          >
            <TikTokIcon color="white" />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
