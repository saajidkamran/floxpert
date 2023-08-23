import React, { useEffect, useState } from "react";
import { Intro } from "../components/Intro";
import { ViewCard } from "../components/ViewCard";
import url from "../api/baseurl";
import ContactUs from "../components/ContactUs";
import About from "../components/About";
import { notifications } from "@mantine/notifications";

export const MainPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const request = await url.get("/products");
        setProducts(request.data);
        return request;
      } catch (error: any) {
        throw new Error("Error", error);
      }
    }
    fetchData();

    notifications.show({
      title: "Awesome 🔥  ",
      message: "Make your visit , Contact us. ",
      autoClose: false,
    });
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
      </div>
      <About />
      <ContactUs />
    </div>
  );
};
