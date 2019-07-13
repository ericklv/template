import React from 'react';
import AuthUserContext from './AuthUserContext';
import firebase from "@firebase/app";
import {snapshotToArray} from "../utils";

const withAuthentication = (Component) =>
    class WithAuthentication extends React.Component {
        state = {
            authUser: null,
            loadingUser: true,
        };

        componentDidMount() {
            firebase.auth().onAuthStateChanged(authUser => {
                authUser
                    ? this.findUser(authUser)
                    : this.setState(() => ({
                        authUser: null,
                        loadingUser: false,
                    }));
            });
        };

        makeUser = (authUser) => {
            this.setState({
                authUser,
                loadingUser: false
            });
        };

        findUser = (authUser) => {
            firebase.firestore().collection("users").where("email", "==", authUser.email).limit(1).get()
                .then(querySnapshot => {
                    const users = snapshotToArray(querySnapshot);
                    const user = users[0];
                    this.makeUser(user);
                });
        };

        render() {
            const {authUser} = this.state;

            return (
                <AuthUserContext.Provider value={authUser}>
                    <Component loadingUser={this.state.loadingUser}
                               authUser={this.state.authUser}
                               version={this.props.version}
                    />
                </AuthUserContext.Provider>
            );
        }
    };

export default withAuthentication;