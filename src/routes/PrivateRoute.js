import React, {Component} from "react";
import {Route} from "react-router-dom";

export default class PrivateRoute extends Component {

    childWithProperties = (props) => React.Children.map(this.props.children, child => React.cloneElement(child, {...props}));

    render() {
        return (

            <Route exact
                   path={this.props.path}
                   render={(props) => this.childWithProperties(props)
                   }
            />

        )
    }
};

