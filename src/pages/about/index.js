import React from "react";
import { useTheme } from "react-jss";

import Header from "./components/Header";
import VisionMission from "./components/VisionMission";
import Team from "./components/Team";
import Testimonials from "./components/Testimonials";

export default () => (
  <div style={{paddingTop: '4rem', color: useTheme().palette.text.primary}}>
    <Header/>
    <VisionMission/>
    <Team/>
    <Testimonials/>
  </div>
);