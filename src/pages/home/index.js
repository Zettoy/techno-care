import React from "react";

import SlideShow from "./components/SlideShow";
import Services from "./components/Services";
import About from "../about/components/Header";
import Team from "../about/components/Team";
import Testimonials from "../about/components/Testimonials";
import VisionMission from "../about/components/VisionMission";
import Quote from "../quote/components/Body";
import Clients from "../clients/components/Body";

export default () => (
  <React.Fragment>
    <SlideShow/>
    <About backgroundColor="secondary" title/>
    <Services backgroundColor="primary"/>
    <VisionMission backgroundColor="secondary"/>
    <Team backgroundColor="primary"/>
    <Testimonials backgroundColor="secondary"/>
    <Clients backgroundColor="primary"/>
    <Quote backgroundColor="secondary"/>
  </React.Fragment>
);
