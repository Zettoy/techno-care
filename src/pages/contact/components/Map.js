import React from "react";
import { createUseStyles } from "react-jss";
import Paper from "../../../util/Paper";

const useStyles = createUseStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
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
    <Paper className={classes.root} color="primary">
      <span>Map</span>
    </Paper>
  );
}

export default Map;