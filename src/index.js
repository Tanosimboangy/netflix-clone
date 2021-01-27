import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyles } from './global-styles';
import { App } from './app';
import { FirebaseContext } from './context/firebase';

// import { seedDatabase } from './seed';


const config = {
    apiKey: "AIzaSyAt2wCjNcaBkR0lXnsnjFenAjtl8wql-qM",
    authDomain: "netflix-onja-jacquit.firebaseapp.com",
    projectId: "netflix-onja-jacquit",
    storageBucket: "netflix-onja-jacquit.appspot.com",
    messagingSenderId: "565674547377",
    appId: "1:565674547377:web:a3e1094e17e3efb6c6ea90"
  }

const firebase = window.firebase.initializeApp(config);
// seedDatabase(firebase);

ReactDOM.render(
	<>
		<FirebaseContext.Provider value={{ firebase: window.firebase }}>
			<GlobalStyles />
			<App />
		</FirebaseContext.Provider>
	</>,
	document.getElementById('root')
);
