import React from "react";
import theme from "../config/theme";

function Paper(props) {
  const style = props.style ? props.style : {};

  if (props.color) style.backgroundColor = theme.palette.background[props.color];
  style.boxShadow = props.elevation ? theme.elevation[props.elevation] : theme.elevation[2];

  return (
    <div className={props.className} style={style}>
      {props.children}
    </div>
  )
}

export default Paper;