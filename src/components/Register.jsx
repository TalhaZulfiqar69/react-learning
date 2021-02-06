import React, { useRef, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Container, TextField, Card, Button } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { firebase } from '../utils/firebase';
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '52ch',
    },
  },
  cPadding: {
    padding: '40px',
  },
  buttn: {
    width: '57ch',
  },
}));
const Register = () => {
  const classes = useStyles();

  const [pError, setPError] = useState('');
  const emailRef = useRef('');
  const passwordRef = useRef('');
  const confirmPasswordRef = useRef('');

  const signUp = async () => {
    if (passwordRef.current.value != confirmPasswordRef.current.value) {
      setPError('Password and confirm password not matched');
    } else {
      setPError('');
      try {
        const user = await firebase
          .auth()
          .createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
          );
        console.log('user', user);
      } catch (error) {
        setPError(error.message);
      }
    }
  };
  return (
    <div>
      <Container maxWidth="sm" fixed>
        <h1>Register Component</h1>
        <Card className={classes.cPadding}>
          {pError && (
            <Alert variant="standard" color="error">
              {pError}
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

            <TextField
              inputRef={confirmPasswordRef}
              id="outlined-basic"
              label="Confirm Password"
              variant="outlined"
              type="password"
            />

            <Button
              variant="contained"
              color="primary"
              className={classes.buttn}
              onClick={signUp}
            >
              Register
            </Button>
          </form>
        </Card>
      </Container>
    </div>
  );
};

export { Register };
