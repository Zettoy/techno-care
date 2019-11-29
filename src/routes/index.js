import React from "react";
import {
  Switch,
  Route
} from "react-router-dom";

import Home from "../pages/home";
import About from "../pages/about";
import Quote from "../pages/quote";

export default () => (
  <Switch>
    <Route exact path="/" component={ Home }/>
    <Route exact path="/about" component={ About }/>
    <Route exact path="/quote" component={ Quote }/>
  </Switch>
);
