import { Avatar, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import avatarPic from "../images/avatar.jpeg";
import "./Intro.css";
import { Carousel } from "@mantine/carousel";
import Autoplay from "embla-carousel-autoplay";
const About = () => {
  const myref: any = useRef();
  const [elmentVisible, setElmentVisible] = useState(false);
  const autoplay = useRef(Autoplay({ delay: 2000 }));

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
      <Carousel
        maw="auto"
        mx="auto"
        withIndicators
        height="auto"
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
      >
        <Carousel.Slide>
          <Avatar
            ref={myref}
            id="avatar"
            sx={{
              height: "200px",
              width: "200px",
              marginRight: "auto",
              marginLeft: "auto",
              position: "relative",
            }}
            imgProps={{
              style: { borderRadius: "50%", border: "6px solid white" },
            }}
            className="avatar"
            src={avatarPic}
          />
          <div
            style={{
              border: "4px solid #FFF3DA",
              color: "#FFF3DA",
              width: "50%",
              height: "auto",
              maxHeight: "100%",
              maxWidth: "auto",
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
                fontSize={25}
                color="grey"
                fontFamily="Caveat"
                sx={{
                  // animation: ` ${
                  //   elmentVisible ? "moveupAbout 1s 1 normal forwards" : null
                  // }`,
                  maxWidth: "100%",
                  padding: "20px",
                  width: "500px",
                  maxHeight: "100%",
                }}
              >
                At Floxpert, we believe that real estate is more than just a
                transaction. It's about helping people find their dream homes
                and achieve their financial goals. That's why we offer a wide
                range of services to meet the needs of buyers, sellers and
                tenants.
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
                    elmentVisible
                      ? "moveCircleRight 3s 1 normal forwards"
                      : null
                  }`,
                }}
              />
              <div
                style={{
                  border: "1px solid yellow",
                  width: "50%",
                  margin: "auto",
                }}
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
                M R SHIRAN
              </Typography>
              <div
                style={{
                  border: "1px solid yellow",
                  width: "2%",
                  margin: "auto",
                }}
              />
              <Typography color="white" variant="h6" mb={4}>
                Director
              </Typography>
            </div>
          </div>
        </Carousel.Slide>
        <Carousel.Slide>
          <Avatar
            ref={myref}
            id="avatar"
            sx={{
              height: "200px",
              width: "200px",
              marginRight: "auto",
              marginLeft: "auto",
              position: "relative",
            }}
            imgProps={{
              style: { borderRadius: "50%", border: "6px solid white" },
            }}
            className="avatar"
            // src={avatarPic}
          />
          <div
            style={{
              border: "4px solid #FFF3DA",
              color: "#FFF3DA",
              width: "50%",
              height: "auto",
              maxHeight: "100%",
              maxWidth: "auto",
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
                fontSize={25}
                color="grey"
                fontFamily="Caveat"
                sx={{
                  // animation: ` ${
                  //   elmentVisible ? "moveupAbout 1s 1 normal forwards" : null
                  // }`,
                  maxWidth: "100%",
                  padding: "20px",
                  width: "500px",
                  height: "auto",
                  maxHeight: "100%",
                }}
              >
                We're here to make the real estate process as easy and
                stress-free as possible. We'll work with you every step of the
                way to providing our clients with the best possible experience.
                That's why we're always learning and evolving, so we can stay
                ahead of the curve and provide the most cutting-edge real
                estate services.
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
                    elmentVisible
                      ? "moveCircleRight 3s 1 normal forwards"
                      : null
                  }`,
                }}
              />
              <div
                style={{
                  border: "1px solid yellow",
                  width: "50%",
                  margin: "auto",
                }}
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
                Fathiya Fuard
              </Typography>
              <div
                style={{
                  border: "1px solid yellow",
                  width: "2%",
                  margin: "auto",
                }}
              />
              <Typography color="white" variant="h6" mb={4}>
                Director
              </Typography>
            </div>
          </div>
        </Carousel.Slide>
      </Carousel>
    </div>
  );
};

export default About;
