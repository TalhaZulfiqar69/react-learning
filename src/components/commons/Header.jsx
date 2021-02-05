import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    // flexGrow: 1,
    textAlign: 'left !important',
  },
  color: {
    color: 'white',
    textDecoration: 'none',
  },
}));

const Header = () => {
  const classes = useStyles();

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
            <Link to="/login" className={classes.color}>
              Login
            </Link>
          </Typography>
          &nbsp;&nbsp;
          <Typography>
            <Link to="/register" className={classes.color}>
              Signup
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export { Header };
