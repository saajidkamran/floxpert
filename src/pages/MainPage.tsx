import React from "react";
import { Intro } from "../components/Intro";
import { ViewCard } from "../components/ViewCard";

export const MainPage = () => {
  return (
    <div id="main">
      <Intro />
      <div
        style={{
          display: "flex",
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
    </div>
  );
};
