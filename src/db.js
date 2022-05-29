import firebase from "firebase/app";
import "firebase/database";

const config = {
	apiKey: "AIzaSyATwm8CiXQTlhN9RoVkvvRq-2uANkp27Kg",
	authDomain: "firevue-612c1.firebaseapp.com",
	projectId: "firevue-612c1",
	storageBucket: "firevue-612c1.appspot.com",
	messagingSenderId: "1065690380206",
	appId: "1:1065690380206:web:c380b286ac3fe6e6993a3f"
}

const db = firebase.initializeApp(config);
export default db;
