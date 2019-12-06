import React from "react";
import {
  Switch,
  Route
} from "react-router-dom";

import Home from "../pages/home";
import About from "../pages/about";
import Quote from "../pages/quote";
import Clients from "../pages/clients";
import Contact from "../pages/contact";

export default () => (
  <Switch>
    <Route exact path="/" component={ Home }/>
    <Route exact path="/about" component={ About }/>
    <Route exact path="/quote" component={ Quote }/>
    <Route exact path="/clients" component={ Clients }/>
    <Route exact path="/contact" component={ Contact }/>
  </Switch>
);
