import firebase from 'firebase'

var config = {
  apiKey: 'AIzaSyBFZtYAIMdGL5SM5lUs3oqqMCtIHNAsoLI',
  authDomain: 'cropchat-c230b.firebaseapp.com',
  databaseURL: 'https://cropchat-c230b.firebaseio.com',
  projectId: 'cropchat-c230b',
  storageBucket: 'cropchat-c230b.appspot.com',
  messagingSenderId: '920265549810'
}

firebase.initializeApp(config)

export default {
  database: firebase.database()
}
