import React from "react";
import TitleBar from "../../util/TitleBar";
import Body from "./components/Body";

function Service({service}) {
  return (
    <React.Fragment>
      <TitleBar>Services</TitleBar>
      <Body data={service}/>
    </React.Fragment>
  );
}

export default Service;