import React from 'react';
import { Link } from 'react-router-dom';
import { createUseStyles, useTheme } from 'react-jss';

import Paper from '../util/Paper';
import logo from '../assets/logo.png';
import navItems from '../config/navItems';

const useStyles = createUseStyles(theme => ({
  root: {
    position: 'fixed',
    zIndex: 999, // The highest layer
    display: 'flex',
    height: '4.5rem',
    width: '100%',
  },
  logo: {
    boxSizing: 'border-box',
    padding: '0.1rem',
    height: '100%',
    '& img': {
      height: '100%'
    }
  },
  nav: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'flex-end',
    listStyle: 'none',
    margin: 0,
    height: '100%'
  },
  navItem: {
    position: 'relative',
    textDecoration: 'none',
    height: '100%',
    transition: '0.5s',
    color: theme.palette.text.primary,
    '& li': {
      padding: '0 1rem',
      fontSize: '1.2em',
      height: '100%',
      display: 'flex',
      alignItems: 'center'
    },
    '&:hover': {
      backgroundColor: theme.palette.background.hover
    },
    '&:hover $menu': {
      visibility: 'visible',
      opacity: 1
    }
  },
  menu: {
    display: 'flex',
    position: 'absolute',
    width: '350%',
    flexDirection: 'column',
    padding: '1.5rem 0',
    left: '-1rem',
    transition: '0.5s',
    visibility: 'hidden',
    opacity: 0
  },
  menuItem: {
    textDecoration: 'none',
    fontSize: '1em',
    padding: '0.5rem 2rem',
    transition: '0.5s',
    color: theme.palette.text.primary,
    '&:hover': {
      backgroundColor: theme.palette.background.hover
    }
  }
}));

function NavBar() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Paper className={classes.root} color="primary" elevation="none">
        <Link className={classes.logo}
              to="/">
          <img src={logo} alt="logo"/>
        </Link>

        <ul className={classes.nav}>
          <a className={classes.navItem}
             style={{cursor: 'pointer'}}
             onClick={useTheme().toggle}>
            <li>Toggle Light/Dark</li>
          </a>
          {navItems.map(item => (
            item.menu
            ?
            <div className={classes.navItem}
                 key={item.label}
                 style={{cursor: 'pointer'}}>
              <li>{item.label}</li>
              <Paper className={classes.menu} color="primary">
                {item.children.map(menuItem => (
                  <Link className={classes.menuItem}
                        to={menuItem.pathname}
                        key={menuItem.label}>
                    {menuItem.label}
                  </Link>
                ))}
              </Paper>
            </div>
            :
            <Link className={classes.navItem}
                  to={item.pathname}
                  key={navItems.indexOf(item)}>
              <li>{item.label}</li>
            </Link>
          ))}
        </ul>
      </Paper>
      <div style={{height: '4.5rem', width: '100%'}}/>
    </React.Fragment>
  );
}

export default NavBar;
