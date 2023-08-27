import React, { useEffect, useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import LinearProgress from "@mui/material/LinearProgress";
import url from "../api/baseurl";
import { ViewCard } from "../components/EditCard";
import {
  Box,
  Button,
  Dialog,
  DialogContentText,
  DialogTitle,
  // Fab,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { notifications } from "@mantine/notifications";
import Cookies from "universal-cookie";

export const AdminPage = () => {
  const cookies = new Cookies();
  const [loading, setLoading] = useState(true);
  const [loadingUpdate, setLoadingUpdate] = useState(false);

  const token = cookies.get("jwt");
  const [products, setProducts] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [images, setImages] = useState<any>();
  const [post, setPost] = useState<any>({});
  const navigate = useNavigate();

  const handleInput = (e: any) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const handlechange = (event: any) => {
    event.preventDefault();
    setImages(event.target.files);
  };
  const handleSubmit = async (event: any) => {
    event.preventDefault();

    setLoadingUpdate(true);
    setOpen(false);
    const formData = new FormData();
    formData.append("title", post.title);
    formData.append("description", post.description);
    formData.append("bedroomCount", post.bedroomCount);
    formData.append("price", post.price);
    formData.append("perches", post.perches);
    formData.append("location", post.location);
    formData.append("category", post.category);

    try {
      for (let i = 0; i < images.length; i++) {
        formData.append("image", images[i]);
      }
      await url.post("/products", formData, {
        headers: { authorization: token },
      });
      setLoadingUpdate(false);
      notifications.show({
        title: "Added",
        message: "Successfully Added ",
        autoClose: 2500,
      });
      window.location.reload();
    } catch (error) {
      setLoadingUpdate(false);
      alert("There was an error while uploading please refresh and retry !");
      console.log(error);
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    async function fetchData() {
      try {
        const request = await url.get("/products");
        setProducts(request.data);
        setLoading(false);
        return request;
      } catch (error) {
        setLoading(false);
      }
    }
    fetchData();
  }, [products]);

  const Form = (
    <Dialog open={open} maxWidth="xl" onClose={handleClose}>
      <form
        style={{
          maxWidth: "100%",
          width: "900px",
          margin: "10% auto ",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
        onSubmit={handleSubmit}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "10px",
            margin: "0 20%",
            maxWidth: "100%",
            flexWrap: "wrap",
          }}
        >
          <DialogTitle textAlign={"center"}>Add Product</DialogTitle>
          <DialogContentText textAlign={"center"} mb={"4%"}>
            Add the specific details .
          </DialogContentText>
          <label>Enter Title</label>
          <TextField
            margin={"normal"}
            onChange={handleInput}
            required
            name="title"
            label=" Title"
          />
          <label>Enter Category</label>
          <TextField
            margin={"normal"}
            required
            name="category"
            label=" Category "
            onChange={handleInput}
          />
          <label>Enter Bedroom count</label>
          <TextField
            margin={"normal"}
            sx={{ width: "50%" }}
            label=" Bedroom count"
            name="bedroomCount"
            onChange={handleInput}
          />
          <label>Enter Price</label>

          <TextField
            margin={"normal"}
            onChange={handleInput}
            required
            label=" Price"
            name="price"
          />
          <label>Enter Perches</label>

          <TextField
            name="perches"
            onChange={handleInput}
            margin={"normal"}
            label="Perches"
          />
          <label>Enter Description</label>

          <TextField
            onChange={handleInput}
            margin={"normal"}
            required
            label=" Description"
            name="description"
          />
          <label>Enter Location</label>

          <TextField
            onChange={handleInput}
            margin={"normal"}
            required
            label=" Location"
            name="location"
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* <label style={{ margin: "20px auto" }}> */}
          <input
            // style={{ display: "none" }}
            id="upload-photo"
            name="image"
            type="file"
            multiple
            onChange={handlechange}
          />

          <Typography m={2}>Upload photo</Typography>
        </div>

        <Button
          sx={{
            marginLeft: "auto",
            marginRight: "auto",
            backgroundColor: "green",
            color: "white",
            "&:hover": {
              bgcolor: "green",
            },
          }}
          type="submit"
        >
          Add
        </Button>
      </form>
    </Dialog>
  );
  return (
    <div>
      <div
        id="main"
        style={{
          marginTop: "30px",
          textAlign: "center",
          marginBottom: "35px",
        }}
      >
        <Typography>Welcome to Admin Page</Typography>
        <Button
          sx={{
            mt: "30px",
            bgcolor: "green",
            color: "white",
            "&:hover": {
              bgcolor: "green",
            },
          }}
          onClick={handleClickOpen}
        >
          Add Product
        </Button>

        {Form}
      </div>
      <Button
        sx={{
          m: "auto 0 0 10px",
          bgcolor: "grey",
          color: "white",
          "&:hover": {
            bgcolor: "grey",
          },
        }}
        onClick={() => {
          cookies.remove("jwt", { path: "/" });
          navigate("/");
        }}
      >
        Logout
      </Button>
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
        {loadingUpdate ? (
          <Backdrop
            sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={loadingUpdate}
          >
            <CircularProgress color="inherit" />
          </Backdrop>
        ) : null}
        {loading ? (
          <Box sx={{ width: "100%" }}>
            <LinearProgress />
          </Box>
        ) : (
          products?.map((prod: any) => {
            return <ViewCard products={prod} />;
          })
        )}
      </div>
    </div>
  );
};
