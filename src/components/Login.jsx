import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Container, TextField, Card, Button } from '@material-ui/core';
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
}));
const Login = () => {
  const classes = useStyles();
  return (
    <div>
      <Container maxWidth="sm" fixed className={classes.base}>
        <h1></h1>
        <Card className={classes.cPadding}>
          <h1 className={classes.textA}>Login</h1>
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
            <Button
              variant="contained"
              color="primary"
              className={classes.buttn}
            >
              Login
            </Button>
          </form>
        </Card>
      </Container>
    </div>
  );
};

export { Login };
