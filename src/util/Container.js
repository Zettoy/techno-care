import React from "react";
import { createUseStyles } from "react-jss";
import classNames from "classnames";

const useStyle = createUseStyles(theme => ({
  root: {
    width: theme.screenSize.lg,
    margin: 'auto',
  }
}));

function Container({className, style, ...props}) {
  const classes = useStyle();

  return (
    <div className={classNames(className, classes.root)} style={style}>
      {props.children}
    </div>
  )
}

export default Container;