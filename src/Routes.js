import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import Forecast from "./components/Forecast/Forecast";
import Details from "./components/DetailPage/DetailPage";

import history from './history';

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Forecast} />
                    <Route path="/cities/:city" component={Details} />
                </Switch>
            </Router>
        )
    }
}