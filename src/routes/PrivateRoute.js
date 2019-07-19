import React, {Component} from "react";
import {Route} from "react-router-dom";

export default class PrivateRoute extends Component {

    componentDidUpdate = (prevProps) => {
        if(this.props.location !== prevProps.location) window.scrollTo(0,0);
    };

    childWithProperties = (props) => React.Children.map(this.props.children, child => React.cloneElement(child, {...props}));

    render() {
        console.log(this.props);
        return (

            <Route exact
                   path={this.props.path}
                   render={(props) => this.childWithProperties(props)
                   }
            />

        )
    }
};

