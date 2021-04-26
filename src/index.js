import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

import App from './App';

firebase.initializeApp({
  apiKey: 'AIzaSyCAbeVzVyB3Cki2VM5gBwa2KSjgxbUyvuM',
  authDomain: 'chat-react-bc797.firebaseapp.com',
  projectId: 'chat-react-bc797',
  storageBucket: 'chat-react-bc797.appspot.com',
  messagingSenderId: '786175439585',
  appId: '1:786175439585:web:f69cb10cb9da04434c7da0',
  measurementId: 'G-PTDNK232Z6',
});

export const Context = createContext(null);

const auth = firebase.auth();
const firestore = firebase.firestore();

ReactDOM.render(
  <Context.Provider
    value={{
      firebase,
      auth,
      firestore,
    }}
  >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Context.Provider>,
  document.getElementById('root')
);

reportWebVitals();
