import React from "react";
import {withRouter} from "react-router-dom";
import AuthUserContext from "./AuthUserContext";
import {Redirect} from "react-router";

const withAuthorization = (condition, redirect) => (Component) => {

    class WithAuthorization extends React.Component {

        render() {
            return (
                <AuthUserContext.Consumer>
                    {authUser => condition(authUser) ?
                        <Component {...this.props}/>
                        : <Redirect to={redirect}/>
                    }
                </AuthUserContext.Consumer>
            );
        }
    }

    return withRouter(WithAuthorization);
};

export default withAuthorization;