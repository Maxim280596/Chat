import React, { useContext } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';

import { LOGIN_ROUTE } from '../constants';
import { Context } from '../index';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Navbar() {
  const classes = useStyles();
  const { auth } = useContext(Context);
  const [user] = useAuthState(auth);
  return (
    <AppBar position="static" color={'secondary'}>
      <Toolbar variant={'dense'}>
        <Typography variant="h6" className={classes.title}>
          Chat
        </Typography>
        <Grid container justify={'flex-end'}>
          {user ? (
            <Button onClick={() => auth.signOut()} variant={'outlined'}>
              Выйти
            </Button>
          ) : (
            <NavLink to={LOGIN_ROUTE}>
              <Button variant={'outlined'}>Логин</Button>
            </NavLink>
          )}
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
