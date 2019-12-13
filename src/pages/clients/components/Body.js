import React from "react";
import { createUseStyles } from "react-jss";

import Title from "../../../util/Title";
import Paper from "../../../util/Paper";
import Container from "../../../util/Container";

const useStyles = createUseStyles(theme => ({
  root: {
    color: theme.palette.text.primary
  }
}));
function Body({backgroundColor}) {
  const classes = useStyles();

  return (
    <Paper className={classes.root} color={backgroundColor}>
      <Container style={{padding: '3rem 0'}}>
        <Title>CLIENTS</Title>
        <span>clients</span>
      </Container>
    </Paper>
  );
}

export default Body;
