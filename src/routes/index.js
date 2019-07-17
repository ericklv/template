import React, {Component} from "react";
import {Route, Switch} from "react-router-dom";
import {Redirect} from "react-router";
import {AboutUs, Clients, Error, Home, Ant, Ibm} from "../pages";
import {BaseLayout} from "../components";
import PrivateRoute from "./PrivateRoute";

export default class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route path="/notFound"
                       component={Error}
                />
                <PrivateRoute exact
                              path="/">
                    <BaseLayout {...this.props}>
                        <Home/>
                    </BaseLayout>
                </PrivateRoute>
                <PrivateRoute exact
                              path="/ant">
                    <BaseLayout {...this.props}>
                        <Ant/>
                    </BaseLayout>
                </PrivateRoute>
                <PrivateRoute exact
                              path="/ibm">
                    <BaseLayout {...this.props}>
                        <Ibm/>
                    </BaseLayout>
                </PrivateRoute>
                <PrivateRoute exact
                              path="/about-us">
                    <BaseLayout {...this.props}>
                        <AboutUs/>
                    </BaseLayout>
                </PrivateRoute>
                <PrivateRoute exact
                              path="/clients">
                    <BaseLayout {...this.props}>
                        <Clients/>
                    </BaseLayout>
                </PrivateRoute>
                <Redirect to="/"/>
            </Switch>
        )
    }
}

