import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDHfRXW5UJY9BxCtcKSiFvxLQ2ExfDlgNU",
    authDomain: "fir-sarmientoespitia.firebaseapp.com",
    projectId: "fir-sarmientoespitia",
    storageBucket: "fir-sarmientoespitia.appspot.com",
    messagingSenderId: "876786810625",
    appId: "1:876786810625:web:f52167a21cb9e96423e500"
  };


const app = firebase.initializeApp(firebaseConfig);
// export function getFirebase(){
// return app
// }

export function getFirestore() {
  return firebase.firestore(app);
}
