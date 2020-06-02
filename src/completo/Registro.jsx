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
import InputLabel from '@material-ui/core/InputLabel';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import clsx from 'clsx';
import FormControl from '@material-ui/core/FormControl';
import Divider from '@material-ui/core/Divider';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import PhoneInput from 'react-phone-number-input'

const useStyles = makeStyles((theme) => ({
divisor: {
    marginTop: theme.spacing(6),
    textAlign:'center',
      },
  divisor2: {
    marginTop: theme.spacing(5),
    textAlign:'center',
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
    marginTop: theme.spacing(3),
    
    borderRadius: '30px',
    height:'70%'
  },

  title:{
    marginTop: theme.spacing(2),
  },

  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },

  Redes: {
    marginTop: theme.spacing(3),
    borderRadius: '30px',
    height:'90%'
  },

  Ingreso: {
    marginTop: theme.spacing(3),
    borderRadius: '30px',
    height:'90%'
  },
  link:{
    marginTop: theme.spacing(2),
  },

  chek:{
    marginTop: theme.spacing(2),
  
  },

  inputs:{
    marginTop: theme.spacing(3),
  },
    phone:{
      width:'50%',
      height:'30%'
    }
}));

export default function SignUp() {
  const classes = useStyles();

  const [values, setValues] = React.useState({
    showPassword2: false,
    password: '',
    password2: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };
  
  const handleClickShowPassword2 = () => {
    setValues({ ...values, showPassword2: !values.showPassword2 });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseDownPassword2 = (event) => {
    event.preventDefault();
  };
  return (
    <Container component="main" maxWidth="xs">
        
      <CssBaseline />
      <div className={classes.paper}>
        <img alt="" width="200px" height="80px" src={require('../img/centrarse.png')}/>
        <Typography component="h1" variant="h5" className={classes.title}>
        Registrarse
        </Typography>

        <Grid container className={classes.r2} >
            <Grid item xs={6} >
          <Button variant="outlined" 
                  fullWidth size="medium" 
                  color="primary" className={classes.Redes}><img 
                  alt="" src={require('../img/Facebook.png')}/>
            Facebook
          </Button>
            </Grid>
            <Grid item xs={6} >
          <Button  fullWidth variant="outlined" size="medium"  color="secondary" className={classes.Redes} ><img alt="" src={require('../img/google.png')}/>
            Google
          </Button>
            </Grid>
            
          </Grid>
          
         <Grid container>
             <Grid item xs={5}>
             <Divider   className={classes.divisor}  />
             </Grid>
             <Grid item xs={2}>
             <p className={classes.divisor2}>o</p>
             </Grid>
             <Grid item xs={5}>
             <Divider   className={classes.divisor}  />
             </Grid>
         </Grid>
          

         <form className={classes.form} >
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
              <FormControl fullWidth className={clsx(classes.margin, classes.textField)} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">Contraseña</InputLabel>
                <OutlinedInput
                   required
                   fullWidth
                  id="outlined-adornment-password"
                  type={values.showPassword ? 'text' : 'password'}
                  value={values.password}
                  onChange={handleChange('password')}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {values.showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  }
                  labelWidth={100}
                />
              </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
              <FormControl fullWidth className={clsx(classes.margin, classes.textField)} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">Confirmar Contraseña</InputLabel>
                <OutlinedInput
                  required
                  fullWidth
                  id="outlined-adornment-password"
                  type={values.showPassword2 ? 'text' : 'password'}
                  value={values.password2}
                  onChange={handleChange('password2')}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword2}
                        onMouseDown={handleMouseDownPassword2}
                        edge="end"
                      >
                        {values.showPassword2 ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  }
                  labelWidth={175}
                />

              </FormControl>
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
            <Grid container>
              <Grid item xs={12}>
          <Button
             type="submit"
             fullWidth
             variant="contained"
             color="primary"
             className={classes.submit}
          >
            Registrarte
          </Button>
          </Grid>
          </Grid>
            <Grid
              container
              justify="flex-end"
            >
              <Grid item className={classes.link}>
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