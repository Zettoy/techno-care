import React from "react";

import TitleBar from "../../util/TitleBar";
import Map from "./components/Map";
import Body from "./components/Body";

export default () => (
  <React.Fragment>
    <TitleBar>Contact</TitleBar>
    <Map/>
    <Body/>
  </React.Fragment>
);