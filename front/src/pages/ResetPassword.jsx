import React from "react";

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

// *pages
import "../styles/App.css";
import AppHeader from "../components/AppHeader";
import AppMain from "../components/AppMain";
import AppFooter from "../components/AppFooter";

const theme = createTheme();

function ResetSignIn() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
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
          <Typography component="h1" variant="h5">RÉINITIALISER LE MOT DE PASSE</Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }} >
            <Typography component="p" variant="p">Entrez votre adresse email pour recevoir un lien et réinitialiser votre mot de passe</Typography>

            <TextField margin="normal"required fullWidth id="email" label="Email Address"
              name="email" autoComplete="email" autoFocus/>

            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} >
            RÉINITIALISER LE MOT DE PASSE
            </Button>
            
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}



function ResetPassword () {
  return (
    <section>
      <AppHeader />
      <ResetSignIn />
      <AppMain />
      <AppFooter />
    </section>
  );
};

export default ResetPassword;