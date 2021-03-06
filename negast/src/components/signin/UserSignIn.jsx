import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
// import Link from '@mui/material/Link';
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import "./signin.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { get_login_user } from "../../redux/Buyer/action";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export const UserSignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const buyer = useSelector((store) => store.buyer.login);

  useEffect(() => {
    checkLogin();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const temp = {
      email: data.get("email"),
      password: data.get("password"),
    };
    dispatch(get_login_user(temp));
    console.log("hello", buyer);
    const getLoginData = JSON.parse(localStorage.getItem("buyerData"));
    // window.location.reload();
  };

  const checkLogin = () => {
    const getLoginData = JSON.parse(localStorage.getItem("buyerData"));

    if (getLoginData) {
      // console.log("data", getLoginData);
      navigate("/allproducts");
      // return true;
    } else {
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar> */}
          <img className="negastlogoV" src="Negastlogo.png" />

          <Typography component="h1" variant="h5">
            Buyer Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs></Grid>
              <Grid className="vsignupbutton" item>
                <Link to="/usersignup">
                  Dont have an account? Buyer Sign Up
                </Link>
                <br />
                <p>If you want to Login as a Seller</p>
                <Link to="/signin"> Seller Sign In</Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        {/* <Copyright   sx={{ mt: 8, mb: 4 }} /> */}
      </Container>
    </ThemeProvider>
  );
};
