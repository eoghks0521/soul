import React from 'react';
import { Avatar, Button, CssBaseline, TextField, FormControlLabel, Checkbox, Link, Grid, Box, Typography, makeStyles, Container } from '@material-ui/core';

import { purple } from '@material-ui/core/colors';
import image from '../images/icons8-eggplant-48.png'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://eoghks0521.tistory.com/">
        STONES
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      //backgroundColor: theme.palette.common.white,
      backgroundColor: purple[50]
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    //width: 500,
    backgroundColor: purple[0],
  },
  avatar: {
    margin: theme.spacing(1),
    color: '#fff',
    width: 60,
    height: 60,
    backgroundColor: purple[50],
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(5),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[900],
  },
  textField: {
    '& input:invalid + fieldset': {
      borderColor: purple[900],
      borderWidth: 2,
    },
    '& input:valid:focus + fieldset': {
      borderLeftWidth: 6,
      padding: '4px !important', // override inline-style
    },
  },

}));




export default function SignIn() {
  const classes = useStyles();
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />

      <div className={classes.paper}>
        <Avatar alt="Remy Sharp" src={image} className={classes.avatar} />
        <form className={classes.form} noValidate>
          <TextField
            className={classes.textField}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="이메일 주소"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            className={classes.textField}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="비밀번호"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" className={classes.textField} />}
            label="아이디 저장"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            //color="#673ab7"
            className={classes.submit}
          >
            로그인
          </Button>
          <Grid container>
            <Grid item xs>
              <Typography >
                <Link color="#673ab7" href="#" variant="body2">
                  Forgot password?
              </Link>
              </Typography>
            </Grid>
            <Grid item>
              <Typography >
                <Link color="#673ab7" href="/join" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Typography>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}