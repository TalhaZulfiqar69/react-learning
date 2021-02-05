import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Container, TextField, Card, Button } from '@material-ui/core';
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
  return (
    <div>
      <Container maxWidth="sm" fixed>
        <h1>Register Component</h1>
        <Card className={classes.cPadding}>
          <form className={classes.root} noValidate autoComplete="off">
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              type="email"
            />

            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
              type="password"
            />

            <TextField
              id="outlined-basic"
              label="Confirm Password"
              variant="outlined"
              type="password"
            />

            <Button
              variant="contained"
              color="primary"
              className={classes.buttn}
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
