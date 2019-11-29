import React from "react";
import { createUseStyles } from "react-jss";
import classNames from "classnames";

const useStyles = createUseStyles({
  root: {
    display: 'flex',
    flexDirection: 'column'
  }
});

function FlexColumn(props) {
  const classes = useStyles();

  return (
    <div className={classNames(props.className, classes.root)} style={props.style}>
      {props.children}
    </div>
  )
}

export default FlexColumn;