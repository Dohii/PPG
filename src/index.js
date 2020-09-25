import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import HomeTwo from "./HomeTwo";
import About from "./pages/About";
import Services from "./service/Services";
import ServiceDetailsLeftSidebar from "./service/ServiceDetailsLeftSidebar";
import Projects from "./project/Projects";
import Staff from "./staff/Staff";
import ProjectDetails from "./project/ProjectDetails";
import Contact from "./pages/Contact";
import PageNotFound from "./pages/404";
import NoMAtch from "./pages/404";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

class Root extends Component {
  render() {
    return (
      <BrowserRouter basename={"/"}>
        <Switch>
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/`}
            component={HomeTwo}
          />

          <Route
            exact
            path={`${process.env.PUBLIC_URL}/home-two`}
            component={HomeTwo}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/about-us`}
            component={About}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/services`}
            component={Services}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/service-details-left-sidebar`}
            component={ServiceDetailsLeftSidebar}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/projects`}
            component={Projects}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/staff`}
            component={Staff}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/project-details`}
            component={ProjectDetails}
          />

          <Route
            exact
            path={`${process.env.PUBLIC_URL}/contact-us`}
            component={Contact}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/404`}
            component={PageNotFound}
          />
          <Route component={NoMAtch} />
        </Switch>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById("root"));

serviceWorker.register();
