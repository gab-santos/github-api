import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import User from "./pages/User";

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/user/:username" component={User} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
