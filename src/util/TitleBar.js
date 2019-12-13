import React from "react";
import { createUseStyles } from "react-jss";
import Container from "./Container";
import titleBar from "../assets/title_bar.jpg";

const useStyles = createUseStyles({
  root: {
    width: '100%',
    backgroundImage: `url(${titleBar})`,
    backgroundSize: 'cover',
  },
  container: {
    padding: '1.5rem 0',
    '& span': {
      fontSize: '3em',
      color: 'white'
    }
  }
});

function TitleBar(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container className={classes.container}>
        <span><strong>{props.children}</strong></span>
      </Container>
    </div>
  );
}

export default TitleBar;