import firebase from 'firebase/app'
import 'firebase/firestore'

  const firebaseConfig = {
    apiKey: "AIzaSyDpqeX4OlctN_--9TOfIs3AlKtZHHjf5Ls",
    authDomain: "restaurants-85726.firebaseapp.com",
    projectId: "restaurants-85726",
    storageBucket: "restaurants-85726.appspot.com",
    messagingSenderId: "785326662211",
    appId: "1:785326662211:web:58a2edfd458b6be877eaf6"
  };

 export const firebaseApp =  firebase.initializeApp(firebaseConfig);