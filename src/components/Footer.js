import React from "react";
import { Link } from "react-router-dom";
import { createUseStyles, useTheme } from "react-jss";

import Container from "../util/Container";
import FlexColumn from "../util/FlexColumn";
import Paper from "../util/Paper";

import navItems from "../config/navItems";
import contactInfo from "../config/contactInfo";
import logo from "../assets/logo.png";

const useStyles = createUseStyles(theme => ({
  title: {
    borderBottom: `2px solid white`,
    padding: '0.2em 0',
    fontSize: '1.5em',
    marginBottom: '1rem'
  },
  root: {
    position: 'relative',
    zIndex: -999 // The lowest layer
  },
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gridGap: '1.5rem',
    // color: theme.palette.text.primary,
    '& $logo, & $links, & $map, & $contact': {
      boxSizing: 'border-box',
      padding: '1.5rem 0',
      width: '100%',
    }
  },
  logo: {
    alignItems: 'center',
    '& img': {
      width: '75%',
      marginBottom: '1rem'
    },
    '& span': {
      fontSize: '0.9em'
    }
  },
  links: {

  },
  link: {
    display: 'block',
    textDecoration: 'none',
    borderBottom: 'grey 1px solid',
    padding: '0.3rem 0',
    '&:hover': {
      textDecoration: 'underline'
    }
  },
  map: {
    '& div': {
      boxShadow: theme.elevation[2]
    }
  },
  contact: {
    '& span:nth-child(n+2)': {
      fontSize: '0.9em'
    }
  }
}));

function Footer() {
  const classes = useStyles();
  const color = useTheme().palette.text.primary;

  return (
    <Paper className={classes.root} color="primary">
      <Container className={classes.container} style={{color: color}}>

        <FlexColumn className={classes.logo}>
          <img src={logo} alt="logo"/>
          <span>Techno IT solutions is a well-established software development company...</span>
        </FlexColumn>

        <FlexColumn className={classes.links}>
          <span className={classes.title}>Useful Links</span>
          <FlexColumn>
            {navItems.map(item => (
              (item.pathname !== '/' && !item.menu) &&
              <Link className={classes.link}
                    to={item.pathname}
                    key={item.pathname}
                    style={{color: color}}>
                {item.label}
              </Link>
            ))}
          </FlexColumn>
        </FlexColumn>

        <div className={classes.map}>
          <div style={{
            height: '100%',
            width: '100%',
            backgroundColor: 'grey',
          }}/>
        </div>

        <FlexColumn className={classes.contact}>
          <span className={classes.title}>Contact Us</span>
          {contactInfo.map(item => (
            <span key={contactInfo.indexOf(item)}>
              {item}
            </span>
          ))}
        </FlexColumn>

      </Container>
    </Paper>
  );
}

export default Footer;
