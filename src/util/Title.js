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
      borderBottom: `2px solid ${theme.palette.text.primary}`,
    }
  }
}));

function Title({className, style, ...props}) {
  const classes = useStyles();

  return (
    <div className={classNames(className, classes.root)} style={style}>
      <span><strong>{props.children}</strong></span>
      <div/>
    </div>
  )
}

export default Title;