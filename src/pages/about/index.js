import React from "react";

import Main from "../../util/Main";
import TitleBar from "../../util/TitleBar";
import Header from "./components/Header";
import VisionMission from "./components/VisionMission";
import Team from "./components/Team";
import Testimonials from "./components/Testimonials";

export default () => (
  <Main>
    <TitleBar>About Us</TitleBar>
    <Header/>
    <VisionMission/>
    <Team/>
    <Testimonials/>
  </Main>
);