import { Margin } from "@mui/icons-material";
import { Avatar, Typography } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <div
      style={{
        backgroundColor: "black",
        width: "100%",
        height: "auto",
        opacity: 0.9,
        marginBottom: "100px",
        marginTop: "100px",
        padding: "20px 20px 50px 20px ",
      }}
    >
      <Avatar
        sx={{
          height: "250px",
          width: "250px",
          marginRight: "auto",
          marginLeft: "auto",
          position: "relative",
        }}
        imgProps={{ style: { borderRadius: "50%", border: "6px solid white" } }}
        className="avatar"
        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
      />
      <div
        style={{
          border: "4px solid #FFF3DA",
          color: "#FFF3DA",
          width: "100%",
          height: "60%",
          maxHeight: "100%",
          marginTop: "-100px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <div
          style={{
            border: "1px solid yellow",
            width: "50%",
            margin: "20px auto",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            flexWrap: "wrap",
            // marginLeft: "10%",
            // marginRight: "10%",
            width: "100%",
            margin: "100px auto ",
          }}
        >
          <Typography
            fontSize={30}
            color="grey"
            fontFamily="Caveat"
            sx={{ maxWidth: "100%", width: "50%", maxHeight: "100%" }}
          >
            " We have been using product for last one year, and I have to say
            that it has transformed the way we do business. Thank you for
            awesome service. "
          </Typography>
        </div>
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
            style={{
              borderRadius: "50%",
              border: "10px solid yellow",
              width: "5px",
              margin: "auto",
            }}
          />
          <div
            style={{ border: "1px solid yellow", width: "50%", margin: "auto" }}
          />
          <div
            style={{
              borderRadius: "50%",
              border: "10px solid yellow",
              width: "5px",
              margin: "auto",
            }}
          />
        </div>

        <div
          style={{
            textAlign: "center",
            // border: "1px solid #FFF3DA",
          }}
        >
          <Typography
            // fontSize={30}
            color="white"
            variant="h4"
            mt={2}
            mb={1}
            // sx={{ maxWidth: "100%", width: "50%", maxHeight: "100%" }}
          >
            Juliet Wright
          </Typography>
          <div
            style={{ border: "1px solid yellow", width: "2%", margin: "auto" }}
          />
          <Typography
            // fontSize={10}
            color="white"
            variant="h6"
            mb={4}
            // sx={{ maxWidth: "100%", width: "50%", maxHeight: "100%" }}
          >
            General Manager
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default About;
