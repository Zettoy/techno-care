import React from "react";
import { createUseStyles } from "react-jss";
import classNames from "classnames";

const useStyle = createUseStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.primary,
    border: 'none',
    cursor: 'pointer',
    color: theme.palette.text.primary,
    transition: '0.5s',
    boxShadow: theme.elevation[2],
    '&:hover': {
      backgroundColor: theme.palette.background.hover
    },
    '&:focus': {
      outline: 'none'
    }
  }
}));

function Button({className, style, onClick, ...props}) {
  const classes = useStyle();

  return (
    <button className={classNames(className, classes.root)} style={style} onClick={onClick}>
      {props.children}
    </button>
  )
}

export default Button;