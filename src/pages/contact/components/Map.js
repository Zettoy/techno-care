import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.palette.background.primary,
    height: '25rem',
    '& span': {
      fontSize: '4rem',
      color: theme.palette.text.primary
    }
  }
}));

function Map() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <span>Map</span>
    </div>
  );
}

export default Map;