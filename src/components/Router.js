import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SimpleGoldenAcornApp from './SimpleGoldenAcornApp';
import ReduxGoldenAcornApp from './ReduxGoldenAcornApp';
import Subscribe from './Subscribe';
import Ageteller from './Ageteller';
import Currency from './Currency';
import Welcome from './Welcome';


const Router = () => (
  <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/index" component={Subscribe} />
        <Route exact path="/simple" component={SimpleGoldenAcornApp} />
        <Route exact path="/redux" component={ReduxGoldenAcornApp} />
        <Route exact path="/age" component={Ageteller} />
        <Route exact path="/currency" component={Currency} />
      </Switch>
  </BrowserRouter>
);

export default Router
