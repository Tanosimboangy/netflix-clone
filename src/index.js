import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyles } from './global-styles';
import { App } from './app';
import { FirebaseContext } from './context/firebase';

// import dotenv from 'dotenv';

// dotenv.config();

const config = {
  // apiKey: process.env.FB_API_KEY,
	apiKey: "AIzaSyAt2wCjNcaBkR0lXnsnjFenAjtl8wql-qM",
	// authDomain: process.env.FB_AUTH_DOMAIN,
	authDomain: "netflix-onja-jacquit.firebaseapp.com",
	// projectId: process.env.FB_PROJECT_ID,
	projectId: "netflix-onja-jacquit",
	// storageBucket: process.env.FB_STORAGE_BUCKET,
	storageBucket: "netflix-onja-jacquit.appspot.com",
	// messagingSenderId: process.env.FB_MESSAGING_SENDER_ID,
	messagingSenderId: "565674547377",
  // appId: process.env.FB_APP_ID,
  appId: "1:565674547377:web:a3e1094e17e3efb6c6ea90",
  // FB_API_KEY=AIzaSyAt2wCjNcaBkR0lXnsnjFenAjtl8wql-qM
  // FB_AUTH_DOMAIN=netflix-onja-jacquit.firebaseapp.com
  // FB_PROJECTED_ID=netflix-onja-jacquit
  // FB_STORAGE_BUCKET=netflix-onja-jacquit.appspot.com
  // FB_MESSAGING_SENDER_ID=565674547377
  // FB_APP_ID=1:565674547377:web:a3e1094e17e3efb6c6ea90
};


const firebase = window.firebase.initializeApp(config);

ReactDOM.render(
	<>
		<FirebaseContext.Provider value={{ firebase: window.firebase }}>
			<GlobalStyles />
			<App />
		</FirebaseContext.Provider>
	</>,
	document.getElementById('root')
);
