import React from "react";
import { createUseStyles, useTheme } from "react-jss";
import classNames from "classnames";

const useStyles = createUseStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontSize: '2em',
    fontWeight: 450,
    '& span, & div': {
      transition: '0.5s'
    },
    '& div': {
      marginTop: '1rem',
      width: '4rem',
      borderBottom: '2px solid',
    }
  }
});

function Title(props) {
  const classes = useStyles();
  const color = useTheme().palette.text.primary;

  return (
    <div className={classNames(props.className, classes.root)} style={props.style}>
      <span style={{color: color}}>{props.children}</span>
      <div style={{borderBottomColor: color}}/>
    </div>
  )
}

export default Title;