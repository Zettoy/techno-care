import React from "react";
import { createUseStyles } from "react-jss";
import classNames from 'classnames';

const useStyles = createUseStyles(theme => ({
  root: {
    backgroundColor: props => theme.palette.background[props.color],
    boxShadow: props => props.elevation ? theme.elevation[props.elevation] : theme.elevation[2],
    transition: '0.5s'
  }
}));

function Paper(props) {
  const classes = useStyles(props);

  return (
    <div className={classNames(props.className, classes.root)} style={props.style}>
      {props.children}
    </div>
  )
}

export default Paper;