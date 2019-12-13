import React from "react";

import TitleBar from "../../util/TitleBar";
import Body from "./components/Body";

function Clients() {

  return (
    <React.Fragment>
      <TitleBar>Clients</TitleBar>
      <Body backgroundColor="secondary"/>
    </React.Fragment>
  )
}


export default Clients;