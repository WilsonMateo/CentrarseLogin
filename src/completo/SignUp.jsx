import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Auth } from 'aws-amplify';

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    borderRadius: '30px',
    height: '180%'
  },

  divisor: {
    marginTop: theme.spacing(6),
    textAlign: 'center',
  },
  divisor2: {
    marginTop: theme.spacing(5),
    textAlign: 'center',
  },

  title: {
    marginTop: theme.spacing(2),
  },

  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },

  Redes: {
    marginTop: theme.spacing(3),
    borderRadius: '30px',
    height: '75%'
  },

  Ingreso: {
    marginTop: theme.spacing(3),
    borderRadius: '30px',
    height: '120%'
  },
  link: {
    marginTop: theme.spacing(4),
  },

  chek: {
    marginTop: theme.spacing(2),

  },

  inputs: {
    marginTop: theme.spacing(3),
  },
}));

const SignUp = () => {
  const classes = useStyles();

  const [signup, setSignup] = useState({
    username: '',
    password: '',
    phone_number: '',
    email: '',
    confirmationCode: '',
    verified: false
  })

  const signUp = () => {
    const { username, password, email, phone_number } = signup;

    Auth.signUp({
      username: username,
      password: password,
      attributes: {
        email: email,
        phone_number: phone_number
      }
    })
      .then(() => {
        console.log('Successfully signed up');
      })
      .catch((err) => console.log(`Error signed up: ${err}`))
  }

  const confirmSignUp = () => {
    const { username, confirmationCode } = signup;

    Auth.confirmSignUp(username, confirmationCode)
      .then(() => {
        console.log('Successfully confirmed signed up');
        alert('Cuenta confirmada')
      })
      .catch((err) => console.log(`Error confirming sign up - ${err}`))
  }

  const handleSubmit = (e) => {
    const { verified } = signup;
    e.preventDefault();

    if (verified) {
      confirmSignUp();
      setSignup({ confirmationCode: '', username: '' })
    }
    else {
      signUp();
      setSignup({
        password: '',
        email: '',
        phone_number: '',
        verified: true
      });
    }

    e.target.reset();
  }

  const handleChange = (e) => {
    setSignup({
      ...signup,
      [e.target.name]: e.target.value
    })
  }

  if (signup.verified) {
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <img
            alt=""
            width="200px"
            height="80px"
            src={require('../img/centrarse.png')}
          />
          <Typography component="h1" variant="h5">
            Verificación
        </Typography>
          <form className={classes.form} onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} >
                <TextField
                  autoComplete="fname"
                  name="username"
                  variant="outlined"
                  required
                  fullWidth
                  id="username"
                  label="Usuario"
                  onChange={handleChange}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoComplete="fcode"
                  name="confirmationCode"
                  variant="outlined"
                  required
                  fullWidth
                  id="confirmationCode"
                  label="Codigo de verificación"
                  onChange={handleChange}
                  autoFocus
                />
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Confirmar
          </Button>
            </Grid>
          </form>
        </div>
      </Container>
    )
  }
  else {
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <img
            alt="Centrarse"
            width="200px"
            height="80px"
            
          />

          <Typography component="h1" variant="h5" className={classes.title}>
            Registrarse
          </Typography>

          <Grid container className={classes.r2} >
            <Grid item xs={6} >
              <Button
                variant="outlined"
                fullWidth size="medium"
                color="primary" className={classes.Redes}>
                <img alt="" src={require('../img/Facebook.png')} />
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
              >
                <img alt="" src={require('../img/google.png')} />
                Google
              </Button>
            </Grid>
          </Grid>

          <Grid container>
            <Grid item xs={5}>
              <Divider className={classes.divisor} />
            </Grid>
            <Grid item xs={2}>
              <p className={classes.divisor2}>o</p>
            </Grid>
            <Grid item xs={5}>
              <Divider className={classes.divisor} />
            </Grid>
          </Grid>

          <form className={classes.form} onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="fname"
                  name="username"
                  variant="outlined"
                  required
                  fullWidth
                  id="username"
                  label="Usuario"
                  onChange={handleChange}
                  autoFocus
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Correo electrónico"
                  name="email"
                  autoComplete="email"
                  onChange={handleChange}

                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Contraseña"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password2"
                  label="Confirmar contraseña"
                  type="password"
                  id="password2"
                  autoComplete="current-password2"

                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="phone_number"
                  label="Número de teléfono"
                  name="phone_number"
                  autoComplete="phone_number"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="Recibir notificaciones"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Registrarte
          </Button>
            <Grid
              container
              justify="flex-end"
            >
              <Grid item>
                <Link to="/signin" variant="body2">
                  Already have an account? Sign in
              </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    );
  }
}

export default SignUp;