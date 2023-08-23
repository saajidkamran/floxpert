import React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import LocalHotelIcon from "@mui/icons-material/LocalHotel";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import { Box, Divider, ImageList, ImageListItem } from "@mui/material";
import PlaceIcon from "@mui/icons-material/Place";
import TurnedInSharpIcon from "@mui/icons-material/TurnedInSharp";
import { Navigate } from "react-router-dom";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  // margin: "auto",
}));
export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

export const ViewCard = (products: any) => {
  const [open, setOpen] = React.useState(false);
  const productDetails = products.products;
  const image = productDetails.image[0]?.replace("uploads", "");
  const handleClickOpen = () => {
    <Navigate to="/admin" />;
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  console.log(productDetails);
  const shortenDesc: string = productDetails.description
    ?.substring(0, 110)
    .concat("...");

  return (
    <Card
      sx={{
        margin: "30px 20px ",
        maxWidth: 345,
        transition: " 1.1s",
        boxShadow:
          " inset 0 -3em 3em rgba(0, 0, 0, 0.1), 0 0 0 2px rgb(255, 255, 255),0.3em 0.3em 1em rgba(0, 0, 0, 0.3)",
        "&:hover": {
          transform: "scale(1.09)",
        },
      }}
    >
      <CardMedia
        component="img"
        height="194"
        image={`${process.env.REACT_APP_BASE_URL}${image}`}
        alt="Paella dish"
      />
      <CardContent sx={{ height: "10px" }}>
        <Typography
          sx={{ cursor: "default" }}
          variant="body2"
          color="text.secondary"
        >
          {productDetails.title}
        </Typography>
        <br />
      </CardContent>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        <IconButton aria-label="share">
          <LocalHotelIcon />
          <Typography m={2}> {productDetails.bedroomCount} </Typography>
        </IconButton>
        <IconButton aria-label="share">
          <LocalOfferIcon />
          <Typography ml={1}> Rs. {productDetails.price}</Typography>
        </IconButton>
      </div>
      <div>
        <IconButton aria-label="share">
          <TurnedInSharpIcon />
          <Typography ml={1}>{productDetails.category}</Typography>
        </IconButton>
      </div>

      <Divider variant="middle" />

      <div
        style={{
          maxWidth: "100%",
          width: "auto",
          padding: "15px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <Typography
          mb={0}
          sx={{ cursor: "default", maxWidth: "auto" }}
          gutterBottom
        >
          {shortenDesc}
        </Typography>
      </div>
      <Divider variant="middle" />

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        <IconButton aria-label="share">
          <PlaceIcon />
          <Typography ml={1}>{productDetails.location}</Typography>
        </IconButton>
        {productDetails.perches ? (
          <IconButton aria-label="share">
            <Typography ml={1}> {productDetails.perches}</Typography>
          </IconButton>
        ) : null}
      </div>

      <div
        style={{
          border: "black solid 2px ",
          maxWidth: "100%",
          width: "100%",
          marginTop: "10px",
        }}
      >
        <Button
          sx={{
            width: "100%",
            backgroundColor: "black",
            color: "white",
            fontWeight: "1px",
            ":hover": { bgcolor: "black", color: "white" },
          }}
          onClick={handleClickOpen}
          variant="contained"
        >
          View More
        </Button>
      </div>

      {/* This DIalog Box view  */}
      <BootstrapDialog onClose={handleClose} open={open}>
        <ImageList
          sx={{ maxWidth: "100%", width: "600px", height: 450 }}
          cols={2}
          rowHeight={164}
        >
          {productDetails.image.map((item: any) => (
            <ImageListItem key={item}>
              <img
              alt="#"
                src={`${process.env.REACT_APP_BASE_URL}/${item?.replace(
                  "uploads",
                  ""
                )}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${process.env.REACT_APP_BASE_URL}/${item?.replace(
                  "uploads",
                  ""
                )}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            height: "50px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <IconButton aria-label="add to favorites">
            <LocalHotelIcon />
            <Typography m={2}>{productDetails.bedroomCount}</Typography>
          </IconButton>
          <IconButton aria-label="share">
            <TurnedInSharpIcon />
            <Typography ml={1}>{productDetails.category}</Typography>
          </IconButton>
          <IconButton aria-label="share">
            <PlaceIcon />
            <Typography ml={1}>{productDetails.location}</Typography>
          </IconButton>
          <IconButton aria-label="share">
            <LocalOfferIcon />
            <Typography ml={1}> Rs. {productDetails.price}</Typography>
          </IconButton>
          {productDetails.perches ? (
            <IconButton aria-label="share">
              <Typography ml={1}> {productDetails?.perches}</Typography>
            </IconButton>
          ) : null}
        </Box>
        <DialogContent dividers>
          <Typography sx={{ cursor: "default", maxWidth: "auto" }} gutterBottom>
            {productDetails.description}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button
            autoFocus
            sx={{ color: "black" }}
            onClick={(e) => {
              e.preventDefault();
              window.open("https://wa.me/0770097964", "_blank");
            }}
          >
            Contact
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </Card>
  );
};
