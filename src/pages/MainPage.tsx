import React, { useEffect, useState } from "react";
import { Intro } from "../components/Intro";
import { ViewCard } from "../components/ViewCard";
import url from "../api/baseurl";
import ContactUs from "../components/ContactUs";
import About from "../components/About";
import { notifications } from "@mantine/notifications";
import { Box } from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";

export const MainPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const request = await url.get("/products");
        setLoading(false);
        setProducts(request.data);
        return request;
      } catch (error: any) {
        setLoading(false);
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
        {loading ? (
          <Box sx={{ width: "100%" }}>
            <LinearProgress color="inherit" />
          </Box>
        ) : (
          products?.map((prod: any) => {
            return <ViewCard products={prod} />;
          })
        )}
      </div>
      <About />
      <ContactUs />
    </div>
  );
};
