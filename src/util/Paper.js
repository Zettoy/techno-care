import React from "react";
import { createUseStyles, useTheme } from "react-jss";
import classNames from 'classnames';

const useStyles = createUseStyles(theme => ({
  root: {
    boxShadow: props => props.elevation ? theme.elevation[props.elevation] : theme.elevation[2],
    transition: '0.5s'
  }
}));

function Paper(props) {
  const classes = useStyles(props);
  const theme = useTheme();

  const style = {backgroundColor: theme.palette.background[props.color]};

  return (
    <div className={classNames(props.className, classes.root)} style={{...style, ...props.style}}>
      {props.children}
    </div>
  )
}

export default Paper;