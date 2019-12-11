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

import services from "../config/services";
import Service from "../pages/service";

export default () => (
  <Switch>
    <Route exact path="/" component={ Home }/>
    <Route exact path="/about" component={ About }/>
    <Route exact path="/quote" component={ Quote }/>
    <Route exact path="/clients" component={ Clients }/>
    <Route exact path="/contact" component={ Contact }/>
    {services.map(item => (
      <Route exact path={item.pathname} key={services.indexOf(item)}>
        <Service service={item}/>
      </Route>
    ))}
  </Switch>
);
