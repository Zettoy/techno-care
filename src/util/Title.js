import React from "react";
import { createUseStyles } from "react-jss";
import classNames from "classnames";

const useStyles = createUseStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontSize: '2em',
    fontWeight: 450,
    color: theme.palette.text.primary,
    '& div': {
      marginTop: '1rem',
      width: '4rem',
      borderBottom: `2px solid ${theme.palette.text.primary}`
    }
  }
}));

function Title(props) {
  const classes = useStyles();

  return (
    <div className={classNames(props.className, classes.root)} style={props.style}>
      <span>{props.children}</span>
      <div/>
    </div>
  )
}

export default Title;