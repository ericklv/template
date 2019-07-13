import React, {Component} from "react";
import {BrowserRouter} from "react-router-dom";
import {fetchCollection} from "./firebase/index"
import Routes from "./routes"

class App extends Component {

    state = {
        images: "https://firebasestorage.googleapis.com/v0/b/blank-project-225314.appspot.com/o/imageProfileDefault%2FimageProfile.jpeg?alt=media&token=2edea679-f0c6-4bcf-b77e-a49c16c2a87e",
        users: [],
        companies: [],
        loadingUsers: true,
        loadingCompanies: true,
    };

    render() {

        return (
            <BrowserRouter>
                <Routes {...this.state}
                        {...this.props}/>
            </BrowserRouter>
        );
    }
}

export default App;
