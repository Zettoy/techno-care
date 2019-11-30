import React from "react";
import { createUseStyles } from "react-jss";

import Container from "../../../util/Container";
import Paper from "../../../util/Paper";
import content from "../config/content";
import about from "../assets/about.jpg";

const useStyles = createUseStyles(theme=> ({
  body: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gridGap: '1rem',
    '& span:nth-child(1)': {
      gridRow: '1 / 3'
    },
    '& span:nth-child(2)': {
      gridRow: '3 / 4'
    },
    '& img': {
      gridRow: '1 / 4',
      width: '100%',
      boxShadow: theme.elevation[2]
    }
  },
}));

function Header() {
  const classes = useStyles();

  return (
    <Paper color="secondary">
      <Container style={{padding: '3rem 0'}}>
        <div className={classes.body}>
          <span>{content.about}</span>
          <span>Your satisfaction, Our desire</span>
          <img src={about} alt="about"/>
        </div>
      </Container>
    </Paper>
  )
}

export default Header;