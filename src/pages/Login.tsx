import { Container } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Stack,
  TextField,
} from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

export default function Login() {
  const cookies = new Cookies(null, { path: "/" });
  const [loadingUpdate, setLoadingUpdate] = useState(false);

  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const [details, setDetails] = useState({
    username: "",
    password: "",
  });

  const handleChange = (prop: any) => (event: any) => {
    setDetails({ ...details, [prop]: event.target.value });
  };

  const handlesubmit = async (e: any) => {
    setLoadingUpdate(true);
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/login`,
        {
          email: details.username,
          password: details.password,
        }
      );
      setLoadingUpdate(false);

      navigate("/admin");
      notifications.show({
        title: "Access Granted  ",
        message: "Successfully Authorization",
        autoClose: 2000,
      });
      cookies.set("jwt", `Bearer ${response.data.token}`, {
        path: "/",
        expires: new Date(Date.now() + 30 * 60 * 1000),
      });

      console.log("cookie ", cookies.get("jwt"));
    } catch (error) {
      setDetails({
        username: "",
        password: "",
      });
      setOpen(true);
    }
  };
  const handleClose = () => {
    setOpen(false);
    window.location.reload();
  };

  const alert = (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{"Access denied "}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Username or Password Invalid , Please check !
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Ok</Button>
      </DialogActions>
    </Dialog>
  );

  return (
    <Box
      pt={2}
      pb={2}
      ml="auto"
      mr="auto"
      mt={20}
      border={"2px solid black"}
      sx={{
        maxWidth: "100%",
        width: "500px",
        boxShadow: 10,
        display: "flex",
        flexDirection: "column",
        justifyContent: "Center",
        flexWrap: "wrap",
      }}
    >
      <Box>
        <Container>
          <Stack mb={2}>
            <TextField
              id="outlined-basic"
              label="username"
              name="username"
              variant="outlined"
              size="medium"
              sx={{ margin: "5px auto" }}
              onChange={handleChange("username")}
              //   error={errors.username && true}
              //   helperText={errors.username && "Username Required !"}
            />

            <TextField
              sx={{ margin: "5px auto" }}
              id="outlined-basic"
              label="Password"
              variant="outlined"
              size="medium"
              type="password"
              value={details.password}
              onChange={handleChange("password")}
              //   error={errors.password && true}
              //   helperText={errors.password && "Password Required !"}
            />
          </Stack>
        </Container>
      </Box>
      <Button
        sx={{ maxWidth: "100%", width: "50px", margin: "5px auto" }}
        onClick={handlesubmit}
        variant="contained"
      >
        Login
      </Button>
      {alert}
      {loadingUpdate ? (
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={loadingUpdate}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      ) : null}
    </Box>
  );
}
