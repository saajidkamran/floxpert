import React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import LocalHotelIcon from "@mui/icons-material/LocalHotel";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import { Box, ImageList, ImageListItem } from "@mui/material";
import PlaceIcon from "@mui/icons-material/Place";
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
  const image = products.products.image[0].replace("uploads", "");
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

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
        // image="https://exej2saedb8.exactdn.com/wp-content/uploads/2022/02/Screen-Shot-2022-02-04-at-2.28.40-PM.png?strip=all&lossy=1&ssl=1"
        image={`https://floxpert-service.onrender.com/${image}`}
        alt="Paella dish"
      />
      <CardContent>
        <Typography
          sx={{ cursor: "default" }}
          variant="body2"
          color="text.secondary"
        >
          {products.products.name}
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
        }}
        disableSpacing
      >
        <IconButton aria-label="add to favorites">
          <LocalHotelIcon />
          <Typography m={2}> {products.products.bedroomCount} </Typography>
        </IconButton>
        <IconButton aria-label="share">
          <LocalOfferIcon />
          <Typography ml={1}> Rs. {products.products.price}</Typography>
        </IconButton>
        <IconButton aria-label="share">
          <PlaceIcon />
          <Typography ml={1}>Colombo</Typography>
        </IconButton>

        <Button
          sx={{
            marginLeft: "auto",
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
      </CardActions>

      {/* This DIalog Box view  */}
      <BootstrapDialog onClose={handleClose} open={open}>
        <ImageList
          sx={{ maxWidth: "100%", width: "600px", height: 450 }}
          cols={2}
          rowHeight={164}
        >
          {products.products.image.map((item: any) => (
            <ImageListItem key={item}>
              <img
                src={`https://floxpert-service.onrender.com/${item.replace(
                  "uploads",
                  ""
                )}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`https://floxpert-service.onrender.com/${item.replace(
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
            <Typography m={2}>{products.products.bedroomCount}</Typography>
          </IconButton>
          <IconButton aria-label="share">
            <PlaceIcon />
            <Typography ml={1}>Colombo</Typography>
          </IconButton>
          <IconButton aria-label="share">
            <LocalOfferIcon />
            <Typography ml={1}> Rs. {products.products.price}</Typography>
          </IconButton>
        </Box>
        <DialogContent dividers>
          <Typography sx={{ cursor: "default", maxWidth: "auto" }} gutterBottom>
            {products.products.description}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus sx={{ color: "black" }} onClick={handleClose}>
            Contact
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </Card>
  );
};
