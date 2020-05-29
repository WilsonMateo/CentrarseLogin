import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';


const useStyles = makeStyles((theme) => ({

  Redes: {
    marginTop: theme.spacing(1),
    borderRadius: '30px',
   
  },

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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },

  chip: {
    position:'relative',
    borderColor: 'black',
    marginTop:'5%',
    borderRadius: '30px',
  },

  pasword: {
    position:'relative',
    marginTop:'10%',
    textAlign:'center'
  },
  divider: {
    position:'relative',
    marginTop:'8%',
    textAlign:'center'
  },
  space: {
    position:'relative',
    marginTop:'6%',
    
  },

  root: {
    borderRadius: '30px',
  },

  in: {
     marginTop:"4%"
  },

  r2: {
    marginTop:"3%"
 }

}));

export default function Login() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        
        <img alt="" width="200px" height="80px" src={require('../img/centrarse.png')}/>
     
        <Typography component="h1" variant="h6" className={classes.in}>
        Inicia Sesión
        </Typography>
          <Grid container className={classes.r2} >
            <Grid item xs={6} >
          <Button variant="outlined" fullWidth size="medium" color="primary" className={classes.Redes}><img alt="" src={require('../img/Facebook.png')}/>
            Facebook
          </Button>
            </Grid>
            <Grid item xs={6} >
          <Button  fullWidth variant="outlined" size="medium"  color="secondary" className={classes.Redes} ><img alt="" src={require('../img/google.png')}/>
            Google
          </Button>
            </Grid>
          </Grid>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Usuario"
            name="username"
            autoComplete="email"
            autoFocus
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
          />
          <Grid container className={classes.space}>
            <Grid item xs>
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Recuérdame"
              />
            </Grid>
            <Grid item>
            <Button 
              type="submit"
              Width = "50px"
              variant="contained" 
              color="primary"
              className={classes.root}
            >
                INICIAR SESION
            </Button>
            </Grid> 
          </Grid>
             <Grid container>
            <Grid item xs className={classes.pasword} >
              <Link href="#" variant="body1" >
              ¿Has olvidado tu contraseña?
              </Link>
            </Grid>
            </Grid>
            <div className={classes.divider}>
              <Divider className={classes.divisor} variant="middle" />
            </div>
            
            <Grid item xs className={classes.divider} >
              <Link  variant="body1" >
              ¿No tienes una cuenta?
              </Link>
            </Grid>
          <Button href="#"  variant="outlined" className={classes.chip}  fullWidth  disableElevation >
          Registrarse
          </Button>
        </form>
      </div>
    </Container>
  );
}