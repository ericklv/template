import firebase from "@firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const hostName = window.location.hostname;

const productionConfig = {
    // Your Production API Key here
};

const devConfig = {

};

if (hostName === "url-prod") {
    firebase.initializeApp(productionConfig);
} else {
    firebase.initializeApp(devConfig);
}
