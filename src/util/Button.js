import React from "react";
import { createUseStyles } from "react-jss";
import classNames from "classnames";

const useStyle = createUseStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.primary,
    border: 'none',
    transition: '0.5s',
    boxShadow: theme.elevation[2],
  },
  active: {
    color: theme.palette.text.primary,
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: theme.palette.background.hover
    },
    '&:focus': {
      outline: 'none'
    }
  }
}));

function Button({className, style, onClick, disabled, ...props}) {
  const classes = useStyle();
  return (
    <button className={classNames(className, classes.root, !disabled && classes.active)} style={style} onClick={onClick} disabled={disabled}>
      {props.children}
    </button>
  );

}

export default Button;