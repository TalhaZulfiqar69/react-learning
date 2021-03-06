import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import { firebase } from '../../utils/firebase';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textAlign: 'left !important',
  },
  color: {
    color: 'white',
    textDecoration: 'none',
  },
}));

const Header = () => {
  const classes = useStyles();
  const history = useHistory();

  const logout = async () => {
    try {
      await firebase.auth().signOut();
      history.push('/login');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            <Link to="/" className={classes.color}>
              React Practice Project
            </Link>
          </Typography>
          &nbsp;&nbsp;
          <Typography>
            <Link to="/home" className={classes.color}>
              Home
            </Link>
          </Typography>
          &nbsp;&nbsp;
          <Typography>
            <Link to="/" className={classes.color}>
              Module 1
            </Link>
          </Typography>
          &nbsp;&nbsp;
          <Typography>
            <Link to="/" className={classes.color}>
              Module 2
            </Link>
          </Typography>
          &nbsp;&nbsp;
          <Typography>
            <Button className={classes.color} onClick={logout}>
              Logout
            </Button>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export { Header };
