import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const theme = createTheme();

export default function SignIn() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState({
    value: "",
    error: false,
    helpText: "",
  });
  const [password, setPassword] = useState({
    value: "",
    error: false,
    helpText: "",
  });
  const handleChangeUserName = (e) => {
    setUserName((prev) => ({
      ...prev,
      value: e.target.value,
    }));
  };
  const handleChangePassword = (e) => {
    setPassword((prev) => ({
      ...prev,
      value: e.target.value,
    }));
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (userName.value === "") {
      setUserName((prev) => ({
        ...prev,
        error: true,
        helpText: "Missing user name",
      }));
    } else if (password.value === "") {
      setPassword((prev) => ({
        ...prev,
        error: true,
        helpText: "Missing user name",
      }));
    } else {
      let res = await axios.post(`${process.env.REACT_APP_BE}/users/login`, {
        user_name: userName.value,
        pass: password.value,
      });
      console.log(res);
      localStorage.setItem("access_token", res.data.access_token);
      localStorage.setItem("refresh_token", res.data.refresh_token);
      navigate("/");
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
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              error={userName.error}
              helperText={userName.helpText}
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={userName.value}
              onChange={handleChangeUserName}
            />
            <TextField
              error={password.error}
              helperText={password.helpText}
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password.value}
              onChange={handleChangePassword}
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
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
