import React, { useState, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { firebase } from '../utils/firebase';
import {
  Container,
  TextField,
  Card,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
} from '@material-ui/core';
import { Alert } from '@material-ui/lab';
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '58ch',
      fontFamily: 'sans serif',
    },
  },
  base: {
    fontFamily: 'sans serif',
  },
  cPadding: {
    padding: '40px',
  },
  buttn: {
    width: '66ch',
  },
  textA: { textAlign: 'center', fontFamily: 'sans serif' },
  linkStyle: {
    textDecoration: 'none',
  },
}));
const Login = () => {
  const classes = useStyles();
  const history = useHistory();

  const [loginError, setLoginError] = useState('');
  const emailRef = useRef('');
  const passwordRef = useRef('');

  const login = async () => {
    try {
      setLoginError('');
      await firebase
        .auth()
        .signInWithEmailAndPassword(
          emailRef.current.value,
          passwordRef.current.value
        );
      history.push('/home');
    } catch (error) {
      setLoginError(error.message);
    }
  };
  return (
    <div>
      <Container maxWidth="sm" fixed className={classes.base}>
        <h1></h1>
        <Card className={classes.cPadding}>
          <h1 className={classes.textA}>Login</h1>
          {loginError && (
            <Alert variant="standard" color="error">
              {loginError}
            </Alert>
          )}
          <form className={classes.root} noValidate autoComplete="off">
            <TextField
              inputRef={emailRef}
              id="outlined-basic"
              label="Email"
              variant="outlined"
              type="email"
            />
            <TextField
              inputRef={passwordRef}
              id="outlined-basic"
              label="Password"
              variant="outlined"
              type="password"
            />
            <FormControlLabel
              control={
                <Checkbox
                  //   checked={state.checkedB}
                  //   onChange={handleChange}
                  name="checkedB"
                  color="primary"
                />
              }
              label="Remember Me"
            />
            <Button
              variant="contained"
              color="primary"
              className={classes.buttn}
              onClick={login}
            >
              Login
            </Button>
            <Grid container>
              <Grid item xs={8}>
                <Link to="/" className={classes.linkStyle}>
                  Forget Password
                </Link>
              </Grid>
              <Grid item xs={4}>
                <Link
                  to="/"
                  className={classes.linkStyle}
                  style={{ alignItems: 'right' }}
                >
                  Create new accout
                </Link>
              </Grid>
            </Grid>
          </form>
        </Card>
      </Container>
    </div>
  );
};

export { Login };
