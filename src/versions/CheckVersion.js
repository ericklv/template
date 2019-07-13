import React, {Component} from "react";
import {fetchCollection} from "../firebase";
import {UpdateVersion} from "../components";
import App from "../App";
import {spinLoader} from "../utils/loader";

export default class CheckVersion extends Component {

    state = {
    };

    render() {

        return (
                <App {...this.state}/>
        )
    }
};
