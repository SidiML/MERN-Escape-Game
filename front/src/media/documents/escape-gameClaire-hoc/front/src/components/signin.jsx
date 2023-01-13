import React, {useState, useContext} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {Link, Navigate} from 'react-router-dom'
import axios from 'axios'
import { UserContext } from '../context/userContext';



const theme = createTheme();


export default function SignIn() {

    const [redirect, setRedirect] = useState(false)
    const {user, setUser} = useContext(UserContext)
    

    const handleSubmit = (event) => {
        event.preventDefault()
        
        const data = new FormData(event.currentTarget);

        const dataObj = {
          email: data.get('email'),
          password: data.get('password'),
        }

    axios.post('http://localhost:4000/login', dataObj)
        .then((res)=>{
            console.log(res)
            if(res.data.status === 200){
                window.localStorage.setItem('escape-key',res.data.token)
                setUser({
                    isLogged: true, 
                    infos : res.data.user
                })
                setRedirect(true)
            }
        })        
    };

    if(redirect){
        return <Navigate to="/"/>
    }

  return (
    <>
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
                >     
                    <Typography component="h1" variant="h5">Se connecter</Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
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
                        label="Se souvenir de moi"
                        />
                        <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        >
                        C'est parti !
                        </Button>
                        <Grid container>
                        <Grid item xs>
                            <Link to="/">
                            Mot de passe oublié?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link to="/register">
                            Pas encore inscrit ? Enregistrez-vous !
                            </Link>
                        </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    </>
  )
}
