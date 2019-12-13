import React from "react";
import { createUseStyles } from "react-jss";
import classNames from "classnames";

const useStyles = createUseStyles(theme => ({
  root: {
    backgroundColor: props => theme.palette.background[props.color],
    boxShadow: props => props.elevation && theme.elevation[props.elevation],
    transition: '0.5s'
  }
}));

function Paper({className, style, color, elevation, id, ...props}) {
  const classes = useStyles({color, elevation});

  return (
    <div className={classNames(className, classes.root)} style={style} id={id}>
      {props.children}
    </div>
  )
}

export default Paper;