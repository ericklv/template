import React, {Component} from "react";
import {Route, Switch} from "react-router-dom";
import {Redirect} from "react-router";
import {BaseLayout} from "../components";
import PrivateRoute from "./PrivateRoute";
import {AboutUs, Ant, ContactUs, Error, Home, Ibm, IbmIA} from "../pages";

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
                              path="/ibm-cloud">
                    <BaseLayout {...this.props}>
                        <Ibm/>
                    </BaseLayout>
                </PrivateRoute>
                <PrivateRoute exact
                              path="/ibm-ia">
                    <BaseLayout {...this.props}>
                        <IbmIA/>
                    </BaseLayout>
                </PrivateRoute>
                <PrivateRoute exact
                              path="/about-us">
                    <BaseLayout {...this.props}>
                        <AboutUs/>
                    </BaseLayout>
                </PrivateRoute>
                <PrivateRoute exact
                              path="/contact-us">
                    <BaseLayout {...this.props}>
                        <ContactUs/>
                    </BaseLayout>
                </PrivateRoute>
                <Redirect to="/"/>
            </Switch>
        )
    }
}

