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
    <Route path="/" component={ Home } exact/>
    <Route path="/about" component={ About }/>
    <Route path="/quote" component={ Quote }/>
    <Route path="/clients" component={ Clients }/>
    <Route path="/contact" component={ Contact }/>
    {services.map((item, key) => (
      <Route path={item.pathname} key={key}>
        <Service service={item}/>
      </Route>
    ))}
  </Switch>
);
