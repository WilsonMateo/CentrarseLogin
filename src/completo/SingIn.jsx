import React, { useState } from 'react';
import { Auth } from 'aws-amplify';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import Dashboard from './Dashboard';

import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({

  Redes: {
    marginTop: theme.spacing(1),
    borderRadius: '30px',
    height: '75%'
  },

  paper: {
    marginTop: theme.spacing(7),
    marginBottom: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },

  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },

  submit: {
    margin: theme.spacing(3, 0, 2),
  },

  chip: {
    position: 'relative',
    borderColor: 'black',
    marginTop: '5%',
    borderRadius: '30px',
  },

  pasword: {
    position: 'relative',
    marginTop: '10%',
    textAlign: 'center'
  },

  divider: {
    position: 'relative',
    marginTop: '8%',
    textAlign: 'center'
  },

  space: {
    position: 'relative',
    marginTop: '6%',

  },

  root: {
    borderRadius: '30px',
  },

  in: {
    marginTop: "4%"
  },

  r2: {
    marginTop: "3%"
  }

}));

const SignIn = () => {
  const classes = useStyles();

  const [signin, setSignin] = useState({
    username: '',
    password: '',
    signedIn: false,
  });

  const handleSubmit = (e) => {
    const { username, password } = signin;
    e.preventDefault();

    Auth.signIn({
      username: username,
      password: password,
    })
      .then(() => {
        console.log('successfully signed in');
        setSignin({
          username: '',
          password: '',
          signedIn: true
        });
      })
      .catch((err) => {
        console.log('Error signing in: ', err);
        alert('Nombre de usuario o contraseña incorrectos');
      })
  }

  const handleChange = (e) => {
    setSignin({
      ...signin,
      [e.target.name]: e.target.value
    })
  }

  if (signin.signedIn) {
    return <Dashboard />
  }
  else {
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <img
            alt=""
            width="200px"
            height="80px"
            src={require('../images/social-buttons/Centrarse.png')}
          />
          <Typography component="h1" variant="h6" className={classes.in}>
            Iniciar Sesión
          </Typography>
          <Grid container className={classes.r2} >
            <Grid item xs={6} >
              <Button
                variant="outlined"
                fullWidth
                size="medium"
                color="primary"
                className={classes.Redes}
                onClick={() => Auth.federatedSignIn({
                  provider: 'Facebook'
                })}
              >
                <img alt="" src={require('../images/social-buttons/Facebook.png')} />
            Facebook
          </Button>
            </Grid>
            <Grid item xs={6} >
              <Button
                fullWidth
                variant="outlined"
                size="medium"
                color="secondary"
                className={classes.Redes}
                onClick={() => Auth.federatedSignIn({
                  provider: 'Google'
                })}
              >
                <img alt="" src={require('../images/social-buttons/Google.png')} />
            Google
          </Button>
            </Grid>
          </Grid>
          <form
            className={classes.form}
            onSubmit={handleSubmit}
          >
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="Usuario"
              name="username"
              autoComplete="fname"
              autoFocus
              onChange={handleChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Contraseña"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={handleChange}
            />
            <Grid container className={classes.space}>
              <Grid item xs>
                <FormControlLabel
                  control={
                    <Checkbox
                      value="remember"
                      color="primary"
                    />
                  }
                  label="Recordar Contraseña"
                />
              </Grid>
              <Grid item>
                <Button
                  type="submit"
                  Width="50px"
                  variant="contained"
                  color="primary"
                  className={classes.root}
                >
                  Ingresar
                </Button>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs className={classes.pasword} >
                <Link to="/password-reset" variant="body1" >
                  ¿Has olvidado tu contraseña?
                </Link>
              </Grid>
            </Grid>
            <div className={classes.divider}>
              <Divider className={classes.divisor} variant="middle" />
            </div>

            <Grid item xs className={classes.divider}>
              ¿No tienes una cuenta?
            </Grid>

            <Link to="/signup" >
              <Button
                variant="outlined"
                className={classes.chip}
                fullWidth
                disableElevation
              >
                Registrarse
              </Button>
            </Link>
          </form>
        </div>
      </Container >
    );
  }
}

export default SignIn; 