import { Avatar, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import avatarPic from "../images/avatar.jpg";
import "./Intro.css";

const About = () => {
  const myref: any = useRef();
  const [elmentVisible, setElmentVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setElmentVisible(entry.isIntersecting);
    });
    observer.observe(myref.current);
  }, []);
  return (
    <div
      id="about"
      style={{
        backgroundColor: "black",
        width: "100%",
        height: "auto",
        opacity: 0.9,
        marginBottom: "100px",
        marginTop: "100px",
        padding: "20px 20px 50px 20px ",
        cursor: "default",
      }}
    >
      <Avatar
        ref={myref}
        id="avatar"
        sx={{
          height: "250px",
          width: "250px",
          marginRight: "auto",
          marginLeft: "auto",
          position: "relative",
        }}
        imgProps={{ style: { borderRadius: "50%", border: "6px solid white" } }}
        className="avatar"
        src={avatarPic}
      />
      <div
        style={{
          border: "4px solid #FFF3DA",
          color: "#FFF3DA",
          width: "1500px",
          height: "60%",
          maxHeight: "100%",
          maxWidth: "100%",
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
            width: "100%",
            margin: "100px auto ",
          }}
        >
          <Typography
            ref={myref}
            fontSize={30}
            color="grey"
            fontFamily="Caveat"
            sx={{
              animation: ` ${
                elmentVisible ? "moveupAbout 1s 1 normal forwards" : null
              }`,
              maxWidth: "100%",
              width: "50%",
              maxHeight: "100%",
            }}
          >
            At Floxpert, we believe that real estate is more than just a
            transaction. It's about helping people find their dream homes and
            achieve their financial goals. That's why we offer a wide range of
            services to meet the needs of buyers, sellers and tenants.
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
            ref={myref}
            style={{
              borderRadius: "50%",
              border: "10px solid yellow",
              width: "5px",
              margin: "auto",
              animation: ` ${
                elmentVisible ? "moveCircleRight 3s 1 normal forwards" : null
              }`,
            }}
          />
          <div
            style={{ border: "1px solid yellow", width: "50%", margin: "auto" }}
          />
          <div
            ref={myref}
            style={{
              borderRadius: "50%",
              border: "10px solid yellow",
              width: "5px",
              margin: "auto",
              animation: ` ${
                elmentVisible ? "moveCircleLeft 3s 1 normal forwards" : null
              }`,
            }}
          />
        </div>

        <div
          style={{
            textAlign: "center",
          }}
        >
          <Typography color="white" variant="h4" mt={2} mb={1}>
            M Shiran Abdurahman
          </Typography>
          <div
            style={{ border: "1px solid yellow", width: "2%", margin: "auto" }}
          />
          <Typography color="white" variant="h6" mb={4}>
            General Manager
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default About;
