import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "../pages/about/About";
import Home from "../pages/home/Home";
import Instruction from "../pages/instruction/Instruction";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/instruction" component={Instruction} />
      </Switch>
    </Router>
  );
};

export default Routes;
