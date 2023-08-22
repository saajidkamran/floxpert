import { Container } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
} from "@mui/material";
import axios from "axios";
import React, { useState } from "react";

export default function Login() {
  const [open, setOpen] = useState(false);
  //   const notifications = useNotificationsEvents();

  const [details, setDetails] = useState({
    username: "",
    password: "",
  });

  const handleChange = (prop: any) => (event: any) => {
    setDetails({ ...details, [prop]: event.target.value });
  };

  const handlesubmit = async (e: any) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/login`,
        {
          email: details.username,
          password: details.password,
        }
      );
      notifications.show({
        title: "Access Granted  ",
        message: "Successfully Authorization",
        autoClose: 2000,
      });

      localStorage.setItem("jwt", "Bearer " + response.data.token);
      localStorage.setItem("user", response.data.email);
    } catch (error) {
      setOpen(true);
    }

    // auth.login(details.username);
  };
  const handleClose = () => {
    setOpen(false);
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
  //   useEffect(() => {
  //     // // check if any validation errors are present
  //     // async function fetchData() {

  //     // }
  //     // fetchData();
  //   }, [errors]);
  return (
    <Box
      width={"50%"}
      pt={2}
      pb={2}
      ml="auto"
      mr="auto"
      mt={20}
      border={"2px solid black"}
      sx={{ boxShadow: 10 }}
    >
      <Box mb={5}>
        <Container>
          <Stack mb={2}>
            <TextField
              id="outlined-basic"
              label="username"
              name="username"
              variant="outlined"
              size="medium"
              onChange={handleChange("username")}
              //   error={errors.username && true}
              //   helperText={errors.username && "Username Required !"}
            />

            <TextField
              //   className={classes.textField}
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
      <Button onClick={handlesubmit} variant="contained">
        Login
      </Button>
      {alert}
    </Box>
  );
}
