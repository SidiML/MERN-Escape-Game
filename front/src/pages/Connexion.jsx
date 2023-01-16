import React, {useState} from "react";
import {Navigate} from  'react-router-dom'
import axios from 'axios'

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


function SignIn() {
  
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const [user, setUser] = useState()
  const [logged, setLogged] = useState(false)
  
  const [redirect, setRedirect] = useState(false)


  const handleSubmit = async(event) => {
    event.preventDefault();
    //const Users = { email: email, password: password};
    //console.log(Users);

    await axios.post("/Token/Create", {email: email, password: password})
      .then((réponse)=>{
          console.log(réponse)
          console.log(réponse.data)
          console.log(réponse.token)
          console.log(réponse.data.user)
          if(réponse.status === 200){
            localStorage.setItem("token", réponse.data.token)
            localStorage.setItem("user", JSON.stringify(réponse.data.user))
            setUser(réponse.data.user)
            setLogged(true)
            setRedirect(true)
          }
      }).catch((erreur)=>{ console.log(erreur);})
  };

  if(redirect){
    return <Navigate to="/Home" state={logged} /> 
  }

  // console.log(logged, user);

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box sx={{ marginTop: 8, display: "flex", flexDirection: "column", alignItems: "center" }} >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">Connexion</Typography>

          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }} >
            <TextField margin="normal" id="email" name="email" label="Email Address" autoComplete="email" fullWidth required autoFocus
              onChange={e => setEmail(e.target.value)}
            />
            <TextField type="password" margin="normal" id="password" name="password" label="Password" autoComplete="current-password" sx={{ width: '100%' }}
              onChange={e => setPassword(e.target.value)}
            />
            {/* <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me"/> */}
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} > CONNEXION </Button>

            <Grid container>
              <Grid item xs>
                <Link href="/ResetPassword" variant="body2">Mot de passe oublié? </Link> </Grid>
              <Grid item>
                <Link href="/Inscription" variant="body2">{"Pas de compte? Inscrivez-vous"}</Link></Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

function Connexion() {


  return (
    <section>
      <AppHeader //UserName={user.nom}
      />
      
      <SignIn //handleSubmit={handleSubmit} handleEmail={setEmail} handlePassword={setPassword}
      />

      <AppMain />
      <AppFooter />
    </section>
  );
}

export default Connexion;
