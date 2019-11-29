import React from "react";
import { createUseStyles } from "react-jss";
import classNames from "classnames";

const useStyle = createUseStyles(theme => ({
  root: {
    width: theme.screenSize.lg,
    margin: 'auto',
  }
}));

function Container(props) {
  const classes = useStyle();

  return (
    <div className={classNames(props.className, classes.root)} style={props.style}>
      {props.children}
    </div>
  )
}

export default Container;