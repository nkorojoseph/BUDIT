import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyDPB8ooVWV-7SZNYruZmjGBJePQcIs_zSo',
  authDomain: 'bugit-b20cd.firebaseapp.com',
  databaseURL: 'https://bugit-b20cd.firebaseio.com',
  projectId: 'bugit-b20cd',
  storageBucket: 'bugit-b20cd.appspot.com',
  messagingSenderId: '155687669736',
  appId: '1:155687669736:web:41d2ac427b5a491fc31e5d'
};

firebase.initializeApp(config);

firebase
  .database()
  .ref()
  .set({
    name: 'Joseph Nkoro'
  });
