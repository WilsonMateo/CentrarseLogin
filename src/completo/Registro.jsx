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
    marginTop: theme.spacing(-2),
  },
  submit: {
    marginTop: theme.spacing(3),
    
    borderRadius: '30px',
    height:'150%'
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
    marginTop: theme.spacing(4),
  },

  chek:{
    marginTop: theme.spacing(2),
  
  },

  inputs:{
    marginTop: theme.spacing(3),
  }
 
}));

export default function SignUp() {
  const classes = useStyles();

  const [values, setValues] = React.useState({
    Confirmar: false,
    password: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };
  
  const handleClickConfirmar = () => {
    setValues({ ...values, Confirmar: !values.Confirmar });
  };

  const handleMouseDownPassword = (event) => {
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
             <p className={classes.divisor2}>O</p>
             </Grid>
             <Grid item xs={5}>
             <Divider   className={classes.divisor}  />
             </Grid>
         </Grid>
          

        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
          
            <Grid container  
                    spacing={1} 
                    alignItems="flex-end"
                    className={classes.inputs}
            >
           
            <Grid item xs>

                <TextField 
                    id="Nombre de Usuario" 
                    label="Nombre de Usuario" 
                    fullWidth
                    autoComplete="fname"
                    name="Nombre de Usuario"
                    required
                    autoFocus
                    variant="outlined"
                />
            </Grid>
            </Grid>
            <Grid container  
                    spacing={1} 
                    alignItems="flex-end"
                    className={classes.inputs}
            >
         
            <Grid item xs >

                <TextField 
                    id="Correo" 
                    label="Correo" 
                    fullWidth
                    autoComplete="fname"
                    name="Correo"
                    required
                    autoFocus
                    variant="outlined"
                />
            </Grid>
            </Grid>

            <Grid container  
                    spacing={1} 
                    alignItems="flex-end"
                    className={classes.inputs}
                    
            >
         
            <Grid item xs={6} sm={6}>
                <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
            <OutlinedInput
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
                labelWidth={70}
            />
            </FormControl>
        </Grid>  
          <Grid  item xs={6} sm={6} >
          <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
            <OutlinedInput
                id="outlined-adornment-password"
                type={values.Confirmar ? 'text' : 'password'}
                value={values.password}
                onChange={handleChange('password')}
                endAdornment={
                <InputAdornment position="end">
                    <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickConfirmar}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                    >
                    {values.Confirmar ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                </InputAdornment>
                }
                labelWidth={70}
            />
            </FormControl>
        </Grid> 
        </Grid>
            
            
        <Grid container  
                    spacing={1} 
                    alignItems="flex-end"
                    className={classes.inputs}
            >
         
            <Grid item xs >

                <TextField 
                    id="Telefono" 
                    label="Numero de Telefono" 
                    fullWidth
                    autoComplete="fname"
                    name="Telefono"
                    required
                    autoFocus
                    variant="outlined"
                />
            </Grid>
            </Grid>
            <Grid  xs className={classes.chek}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="¿Desea recibir notificaciones?"
              />
            </Grid>
          </Grid>
          <Grid container>
              <Grid item xs={12}>
          <Button
            size="medium"
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.Ingreso}
          >
            Registrarte
          </Button>
          </Grid>
          </Grid>
          <Grid container justify="flex-end"  className={classes.link}>
            <Grid item>
              <Link href="#" variant="body2">
                ¿Ya tienes cuenta? Inicia sesión
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
    
  );
}