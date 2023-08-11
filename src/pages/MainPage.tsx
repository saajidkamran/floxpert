import { Typography } from "@mui/material";
import React from "react";
import { Intro } from "../components/Intro";
import { ViewCard } from "../components/ViewCard";
import { Directions } from "@mui/icons-material";
import About from "../components/About";

export const MainPage = () => {
  return (
    <div
    //   style={{
    //     display: "flex",
    //     flexDirection: "column",
    //     maxWidth: "100%",
    //     maxHeight: "100%",

    //     // justifyContent: "",
    //   }}
    >
      <Intro />
      <div
        style={{
          display: "flex",
          //   alignContent:"center",
          //   flexGrow: 1,
          justifyContent: "space-evenly",
          flexDirection: "row",
          maxWidth: "1500px",
          flexWrap: "wrap",
          maxHeight: "100%",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <ViewCard />
        <ViewCard />
        <ViewCard />
        <ViewCard />
        <ViewCard />
        <ViewCard />
      </div>
      <About />
    </div>
  );
};
