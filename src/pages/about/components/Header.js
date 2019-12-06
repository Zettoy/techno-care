import React from "react";
import { createUseStyles } from "react-jss";

import Container from "../../../util/Container";
import Paper from "../../../util/Paper";
import content from "../config/content";
import about from "../assets/about.jpg";

const useStyles = createUseStyles(theme=> ({
  container: {
    width: `calc(${theme.screenSize.lg} + 4rem)`,
  },
  body: {
    display: 'flex',
    width: '100%',
    padding: '5rem 0',
    '& $content, & img': {
      position: 'relative',
      flexGrow: 1,
      width: '100%',
      boxSizing: 'border-box'
    },
    '& img': {
      boxShadow: theme.elevation[2],
      bottom: '2rem',
      right: '2rem'
    }
  },
  content: {
    padding: '2.5rem 2rem',
    zIndex: 1,
    top: '2rem',
    left: '2rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',

    '& span': {
      fontSize: '1.1rem'
    },
    '& span:nth-child(2)': {
      padding: '0.5rem 1rem',
      borderLeft: `2px solid ${theme.palette.text.primary}`
    },
  }
}));

function Header() {
  const classes = useStyles();

  return (
    <Paper color="secondary">
      <Container className={classes.container}>
        <div className={classes.body}>
          <Paper className={classes.content} color="primary">
            <span>{content.about}</span>
            <span>Your satisfaction, Our desire</span>
          </Paper>
          <img src={about} alt="about"/>
        </div>
      </Container>
    </Paper>
  )
}

export default Header;