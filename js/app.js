
/*	ENTER YOUR APP'S JAVASCRIPT CODE HERE!	*/

// this function fires at the ready state, which is when the DOM is
// ready for Javascript to execute
$(document).ready(function() {

	// Initialize Firebase
	// NOTE: you can also copy and paste this information from your project
	//       after you initialize it
	var config = {
	    apiKey: "AIzaSyDQvL_72LD3fHz4Qns62HO1QQ4wdUgZki8",
	    authDomain: "chat-app-49505.firebaseapp.com",
	    databaseURL: "https://chat-app-49505.firebaseio.com",
	    storageBucket: "chat-app-49505.appspot.com",
	    messagingSenderId: "863474676547"
	};
	firebase.initializeApp(config);

	// @NOTE: it's probably a good idea to place your event 
	//		  listeners in here :)
});