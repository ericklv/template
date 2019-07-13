import React, {Component} from "react";
import {Route, Switch} from "react-router-dom";
import {Redirect} from "react-router";
import {AboutUs, Error, Home} from "../pages";
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
                              path="/services">
                    <BaseLayout {...this.props}>
                        <Home/>
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
                        <Home/>
                    </BaseLayout>
                </PrivateRoute>
                <Redirect to="/"/>
            </Switch>
        )
    }
}

