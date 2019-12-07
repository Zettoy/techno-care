import React from "react";

import TitleBar from "../../util/TitleBar";
import Header from "./components/Header";
import VisionMission from "./components/VisionMission";
import Team from "./components/Team";
import Testimonials from "./components/Testimonials";

export default () => (
  <React.Fragment>
    <TitleBar>About Us</TitleBar>
    <Header/>
    <VisionMission/>
    <Team/>
    <Testimonials/>
  </React.Fragment>
);