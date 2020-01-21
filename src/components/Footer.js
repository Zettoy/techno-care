import React from "react";
import { Link } from "react-router-dom";
import { createUseStyles } from "react-jss";

import Container from "../util/Container";
import FlexColumn from "../util/FlexColumn";
import GoogleMap from "../util/GoogleMap";

import navItems from "../config/navItems";
import contactInfo from "../config/contactInfo";

const useStyles = createUseStyles(theme => ({
  title: {
    fontSize: '1.5em',
    marginBottom: '0.5rem'
  },
  root: {
    backgroundColor: '#282828',
    color: 'white',
  },
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gridGap: '1.5rem',
    '& $logo, & $links, & $map, & $contact': {
      boxSizing: 'border-box',
      padding: '1.5rem 0',
      width: '100%',
    }
  },
  logo: {
    alignItems: 'flex-start',
    '& img': {
      width: '50%',
      marginBottom: '1rem'
    },
    '& span:nth-child(2)': {
      lineHeight: '1.4rem',
      color: 'lightgrey',
      fontSize: '0.9em'
    }
  },
  links: {

  },
  link: {
    display: 'block',
    textDecoration: 'none',
    lineHeight: '1.4rem',
    color: 'lightgrey',
    fontSize: '0.9em',
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
      lineHeight: '1.4rem',
      color: 'lightgrey',
      fontSize: '0.9em'
    }
  },
  bottomBar: {
    backgroundColor: '#232323',
    padding: '1rem 0'
  },
  bottomBarContent: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  social: {
    display: 'flex',
    '& span': {
      margin: '0 1rem',
    }
  }
}));

function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container className={classes.container}>

        <FlexColumn className={classes.logo}>
          <span className={classes.title}><strong>About Us</strong></span>
          {/*<img src={logo} alt="logo"/>*/}
          <span>Techno IT solutions is a well-established software development company to enable businesses to grow up through delivering innovative, high quality, Customised Web /Desktop Solutions.</span>
        </FlexColumn>

        <FlexColumn className={classes.links}>
          <span className={classes.title}><strong>Useful Links</strong></span>
          <FlexColumn>
            {navItems.map((item, key) => (
              (item.pathname !== '/' && !item.menu) &&
              <Link className={classes.link}
                    to={item.pathname}
                    key={key}>
                {item.label}
              </Link>
            ))}
          </FlexColumn>
        </FlexColumn>

        <FlexColumn className={classes.contact}>
          <span className={classes.title}><strong>Contact Us</strong></span>
          {contactInfo.map((item, key) => (
            <span key={key}>{item}</span>
          ))}
        </FlexColumn>

        <div className={classes.map}>
          <GoogleMap/>
        </div>

      </Container>
      <div className={classes.bottomBar}>
        <Container className={classes.bottomBarContent}>
          <span><strong>2019 © Techno Care</strong></span>
          <div className={classes.social}>
            {['f', 'in', 'G+'].map((item, key) => (
              <span key={key}><strong>{item}</strong></span>
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Footer;
