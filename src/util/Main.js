import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(theme => ({
  root: {
    paddingTop: '4rem',
    color: theme.palette.text.primary
  }
}));

function Main(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {props.children}
    </div>
  );
}

export default Main;