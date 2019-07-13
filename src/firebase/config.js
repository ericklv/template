import firebase from "@firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const hostName = window.location.hostname;

const productionConfig = {
    // Your Production API Key here
};

const devConfig = {
    apiKey: "AIzaSyCDDvGT5jLAuH8oXPaj1eqFkeZHKLbvXWg",
    authDomain: "blank-project-225314.firebaseapp.com",
    databaseURL: "https://blank-project-225314.firebaseio.com",
    projectId: "blank-project-225314",
    storageBucket: "blank-project-225314.appspot.com",
    messagingSenderId: "606785281720"
};

if (hostName === "url-prod") {
    firebase.initializeApp(productionConfig);
} else {
    firebase.initializeApp(devConfig);
}
