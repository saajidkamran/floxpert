import React, { useEffect, useState } from "react";
import { Intro } from "../components/Intro";
import { ViewCard } from "../components/ViewCard";
import url from "../api/baseurl";
// import axios from "axios";
interface cards {
  name?: string;
  bedroomCount?: number;
  description?: string;
  image?: any[];
  price?: number;
}
export const MainPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const request = await url.get("/products");
        setProducts(request.data);
        return request;
      } catch (error) {
        console.log(">>", error);
      }
    }
    fetchData();
  }, []);

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
        {products?.map((prod: any) => {
          return <ViewCard products={prod} />;
        })}
        {/* <ViewCard />
        <ViewCard />
        <ViewCard />
        <ViewCard />
        <ViewCard /> */}
      </div>
    </div>
  );
};
