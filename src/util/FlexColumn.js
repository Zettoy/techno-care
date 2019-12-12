import React from "react";
import { createUseStyles } from "react-jss";
import classNames from "classnames";

const useStyles = createUseStyles({
  root: {
    display: 'flex',
    flexDirection: 'column'
  }
});

function FlexColumn({className, style, ...props}) {
  const classes = useStyles();

  return (
    <div className={classNames(className, classes.root)} style={style}>
      {props.children}
    </div>
  )
}

export default FlexColumn;