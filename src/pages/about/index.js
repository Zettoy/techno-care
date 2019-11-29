import React from "react";

import Header from "./components/Header";
import VisionMission from "./components/VisionMission";
import Team from "./components/Team";
import Testimonials from "./components/Testimonials";

export default () => (
  <div style={{paddingTop: '4rem'}}>
    <Header/>
    <VisionMission/>
    <Team/>
    <Testimonials/>
  </div>
);