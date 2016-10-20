
/*	ENTER YOUR APP'S JAVASCRIPT CODE HERE!	*/

// this function fires at the ready state, which is when the DOM is
// ready for Javascript to execute

var loggedUser = {};
var currChannel = {};
var currCanvas = {};
var pos = {
	x: 0,
	y: 0
}


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

	$('#login-modal').modal('show');

	//Vars for later
	var auth = new firebase.auth();
	var database = new firebase.database();
	var provider;	
	var canvasSize = 8;


	//Ref's Are here
	var channelRef = database.ref('/channels');
	var profileRef = database.ref('/profiles');
	var messageRef = database.ref('/messages'); 
	var gridRef = database.ref('/grids');
	var userPositionRef = database.ref('/userpositions');
	


	
	// Event Listerners
	$('#facebook-signin').click(function(){
		provider = new firebase.auth.FacebookAuthProvider();
		login(provider, profileRef);
	});

	$('#google-signin').click(function(){
		provider = new firebase.auth.GoogleAuthProvider();
		login(provider, profileRef);
	});

	$('#twitter-signin').click(function(){
		provider = new firebase.auth.TwitterAuthProvider();
		login(provider, profileRef);
	});

	$('#github-signin').click(function(){
		provider = new firebase.auth.GithubAuthProvider();
		login(provider, profileRef);
	});



    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });


    $('#logout-btn').click(function(e){
    	firebase.auth().signOut().then(function() {
			// Sign-out successful.
			$('#login-modal').modal('show');
			$('#wrapper').hide();		  
			$('#logout-modal').modal('hide');


		}, function(error) {
		  // An error happened.
		});
    });





    //Chat Code
    $('#text-line').keypress(function(e){
    	if(e.which == 13 ){
    		
    		var text = $(this).val();
    		var UserName = $('#username').text();


    		var message = ("<p class=\"message\"><b>"+loggedUser.name+": </b>"+text+"</p>");


 			messageRef.child(currChannel.id).push(message);

    		
    		$('#chat-box').animate({scrollTop: $('#chat-box')[0].scrollHeight});
    		refreshMessages(messageRef,currChannel.id);
    		$('#text-line').val('');

    	}
    });




    //Dice rolling
    var roll;
    var message;


    //1d2
    $('#d2-btn').click(function(e){
    	roll =  Math.floor((Math.random() * 2) + 1);
    	message = `<p class="message"><i>`+loggedUser.name+` rolled 1d2 and got `+roll+`</i></p>`;
    	messageRef.child(currChannel.id).push(message);
		$('#chat-box').animate({scrollTop: $('#chat-box')[0].scrollHeight});
		refreshMessages(messageRef, currChannel.id);
    });
   
   
    //1d3
    $('#d3-btn').click(function(e){
    	roll = Math.floor((Math.random() * 3) + 1);
    	message = `<p class="message"><i>`+loggedUser.name+` rolled 1d3 and got `+roll+`</i></p>`;
    	messageRef.child(currChannel.id).push(message);
		$('#chat-box').animate({scrollTop: $('#chat-box')[0].scrollHeight});
		refreshMessages(messageRef, currChannel.id);
    });
       
    //1d4
	$('#d4-btn').click(function(e){
		roll = Math.floor((Math.random() * 4) + 1);
    	message = `<p class="message"><i>`+loggedUser.name+` rolled 1d4 and got `+roll+`</i></p>`;
    	messageRef.child(currChannel.id).push(message);
		$('#chat-box').animate({scrollTop: $('#chat-box')[0].scrollHeight});
		refreshMessages(messageRef, currChannel.id);
    });
    	
   
    //1d6
    $('#d6-btn').click(function(e){
    	roll = Math.floor((Math.random() * 6) + 1);
    	message = `<p class="message"><i>`+loggedUser.name+` rolled 1d6 and got `+roll+`</i></p>`;
    	messageRef.child(currChannel.id).push(message);
		$('#chat-box').animate({scrollTop: $('#chat-box')[0].scrollHeight});
		refreshMessages(messageRef, currChannel.id);
    });
    
   
    //1d8
    $('#d8-btn').click(function(e){
    	roll = Math.floor((Math.random() * 8) + 1);
    	message = `<p class="message"><i>`+loggedUser.name+` rolled 1d8 and got `+roll+`</i></p>`;
    	messageRef.child(currChannel.id).push(message);
		$('#chat-box').animate({scrollTop: $('#chat-box')[0].scrollHeight});
		refreshMessages(messageRef, currChannel.id);
    });
     	
   
    //1d10
    $('#d10-btn').click(function(e){
    	roll = Math.floor((Math.random() * 10) + 1);
    	message = `<p class="message"><i>`+loggedUser.name+` rolled 1d10 and got `+roll+`</i></p>`;
    	messageRef.child(currChannel.id).push(message);
		$('#chat-box').animate({scrollTop: $('#chat-box')[0].scrollHeight});
		refreshMessages(messageRef, currChannel.id);
    });

   
    //1d12
    $('#d12-btn').click(function(e){
    	roll = 	Math.floor((Math.random() * 12) + 1);
    	message = `<p class="message"><i>`+loggedUser.name+` rolled 1d12 and got `+roll+`</i></p>`;
    	messageRef.child(currChannel.id).push(message);
		$('#chat-box').animate({scrollTop: $('#chat-box')[0].scrollHeight});
		refreshMessages(messageRef, currChannel.id);
    });
   
    //1d20
   	$('#d20-btn').click(function(e){
   		roll = 	Math.floor((Math.random() * 20) + 1);
    	message = `<p class="message"><i>`+loggedUser.name+` rolled 1d20 and got `+roll+`</i></p>`;
    	messageRef.child(currChannel.id).push(message);
		$('#chat-box').animate({scrollTop: $('#chat-box')[0].scrollHeight});
		refreshMessages(messageRef, currChannel.id);
    });
   
    //1d100
    $('#d100-btn').click(function(e){
    	roll = Math.floor((Math.random() * 100) + 1);
    	message = `<p class="message"><i>`+loggedUser.name+` rolled 1d100 and got `+roll+`</i></p>`;
    	messageRef.child(currChannel.id).push(message);
		$('#chat-box').animate({scrollTop: $('#chat-box')[0].scrollHeight});
		refreshMessages(messageRef, currChannel.id);

    });



    //Making channels
    $('#make-new-channel').click(function(e){
    	var channelName = $('#new-channel-title').val();
    	var channelDesc;
    	var owner = loggedUser.id;

    	if($('#new-channel-desc').val() == null || $('#new-channel-desc').val() == undefined || $('#new-channel-desc').val() == ""){	
    		channelDesc = "The best new map you ever did see";
    	}	
    	else{
    		channelDesc = $('#new-channel-desc').val();
    	}



    	currChannel = addChannel(channelName,channelDesc,owner,channelRef);
    	isDM();


    	gridRef.child(currChannel.id).child('2').child('2').push({class:'top-border'});


    	//Auto Switch to the channel you jsut made
    	$('#channel-name').text(channelName);
    	$('#channel-desc').text(channelDesc);

    	//Selected channel bolding
		$('.channel-link').removeClass("channel-current");
		$('#channel-'+currChannel.id).addClass("channel-current");

    	$('#new-channel-title').val("");
    	$('#new-channel-desc').val("");
    	$('#new-channel-modal').modal('hide');


    	messageRef.child(currChannel.id).push(`
    		<p><i>This is the start of the chat. Feel free to type here, or use the dice icon in the top-right to roll dice!</i></p>
    	`);
    	refreshMessages(messageRef,currChannel.id);

		if(loggedUser.currDM==true){
			$('#clear-table').show();
		}
		else{
			$('#clear-table').hide();	
		}

		
		refreshMessages(messageRef,currChannel.id);
		refreshGrid(gridRef,currChannel.id);

    });


  

    //Populate channel list
	channelRef.on("value", function(snapshot){
		var snapshotData = snapshot.val();

		if(snapshotData == null || snapshotData == undefined){
			$("#channel-list").html(`
				<p class="channel">
                    No Channels Listed
                </p>
			`);
		}
		else{
			var keys = Object.keys(snapshotData);

			//populate the list but clear it first
			$("#channel-list").html("");

			for(var i = 0 ; i< keys.length; i++){
				$('#channel-list').append(`
					<p class"channel">
						 <a class="channel-link" id="channel-${keys[i]}" data-id="${keys[i]}">${snapshotData[keys[i]].name}</a>
				`);


                if(loggedUser.id == snapshotData[keys[i]].owner){
                	$("#channel-list").append(`
                		 <i class="glyphicon glyphicon-cog pull-right channel-settings" id="channel-setting-${keys[i]}" data-id="${keys[i]}" class="gyphicon glyphicon-cog"></i>
                	`)

                }

                $('#channel-list').append(`    
                 	</p>
            		<div id="channel-${keys[i]}-userlist">
            			
            		</div>
				`);

				// //this doesn't work becase "channel-"+keys[i] isn't a channel with an owner
				// //CURRENT WORKING AREA COMMENTING SO I CAN FIND THIS LATER !!!!!!!!!!!!!!!!
				// if(("channel-"+keys[i]).data('id') == loggedUser.id){
				// 	$("channel-setting-"+keys[i]).show();

				// }

				// else{
				// 	$("channel-setting-"+keys[i]).hide();
				// }


				if(i == 0){
					currChannel = snapshotData[keys[i]];
					currChannel.id = keys[i];
					$('#channel-name').text(snapshotData[keys[i]].name);
    				$('#channel-desc').text(snapshotData[keys[i]].desc);

    				$('.channel-link').removeClass("channel-current");
					$('#channel-'+currChannel.id).addClass("channel-current");

				}
			}
		}



		//switching channels
		$('.channel-link').click(function(e){
			var channelID = $(this).data('id');
			var theChannel = $(this);

			addToChannel(loggedUser, channelID);


			channelRef.child(channelID).once("value", function(snapshot){
				//Unbold each channel
				$('.channel-link').removeClass("channel-current");


				//bold this channel
				theChannel.addClass("channel-current");


				//set the current channel data in the header
				currChannel = snapshot.val();
				currChannel.id = snapshot.key;
				$('#channel-name').text(currChannel.name);
    			$('#channel-desc').text(currChannel.desc);


    			

			});
			refreshMessages(messageRef,currChannel.id);
			refreshGrid(gridRef,currChannel.id);
			isDM();

			if(loggedUser.currDM==true){
				$('#clear-table').show();
			}
			else{
				$('#clear-table').hide();	
			}
		});



		//changing the grid
		$('.divCell').click(function(e){
			isDM();
			if(loggedUser.currDM){
				pos.x = $(this).data('col');
				pos.y = $(this).data('row');
				$('#map-draw-modal').modal('show');

			}

			else{
				pos.x = $(this).data('col');
				pos.y = $(this).data('row');
				var settingChar = ""+loggedUser.photo;
				gridRef.child(currChannel.id).child(pos.x).child(pos.y).update({character:settingChar});

				userPositionRef.child(currChannel.id).child(loggedUser.id).once('value', function(snapshot){

					var snapshotData = snapshot.val();


					if(snapshotData != null){
						gridRef.child(currChannel.id).child(snapshotData.xposition).child(snapshotData.yposition).update({character:"borderclear.png"});
					}
					


					userPositionRef.child(currChannel.id).child(loggedUser.id).update({xposition:pos.x});
					userPositionRef.child(currChannel.id).child(loggedUser.id).update({yposition:pos.y});


				});

			}	

		});

		//for borders
		$('.map-modal-img').click(function(e){
			var settingClass = $(this).data('theclass');
			// gridRef.child(currChannel.id).child(pos.x).child(pos.y).remove();
			gridRef.child(currChannel.id).child(pos.x).child(pos.y).update({border:settingClass});
			$('#map-draw-modal').modal('hide');
		});

		//for furniture
		$('.map-modal-furniture').click(function(e){
			var settingFurniture = $(this).attr('src');
			// gridRef.child(currChannel.id).child(pos.x).child(pos.y).remove();
			gridRef.child(currChannel.id).child(pos.x).child(pos.y).update({furniture:settingFurniture});
			$('#map-draw-modal').modal('hide');
		});

		//for characters
		$('.map-modal-char').click(function(e){
			var settingChar = $(this).attr('src');
			// gridRef.child(currChannel.id).child(pos.x).child(pos.y).remove();
			gridRef.child(currChannel.id).child(pos.x).child(pos.y).update({character:settingChar});
			$('#map-draw-modal').modal('hide');



		});


	    	
	    isDM();


	    //clear the table button
	    $('#clear-table').click(function(e){
	    	$('divCell').attr('class','divCell gridbox');
	    	// $('.furniture-img').attr();
	    	// $('.char-img').attr();
	    	$('.divCell').html(``);
	    	gridRef.child(currChannel.id).remove();
	    	refreshGrid(gridRef,currChannel.id);
	    });

		refreshGrid(gridRef,currChannel.id);
	    refreshMessages(messageRef,currChannel.id);

	});
	//End of channelRef.on
});
//End of Ready Funtion


//Functions

//LOGIN FUNCTION
function login(provider, profileRef){
		

	firebase.auth().signInWithPopup(provider).then(function(result) {
				

		if(result.credential){

			var token = result.credential.accessToken;
		}

		var user = result.user;
		
		$('#profile-pic').attr("src",result.user.photoURL);
		$('#username').text(result.user.displayName);
		

		//state change
		$('#login-modal').modal('hide')
		$('#wrapper').show();

		

		//Check to see if we need to add this user or not
		profileRef.once("value").then(function(snapshot){

			var snapshotData = snapshot.val();
			
			//in the event of a null list, add the user without checking to see if they already exist
			if(snapshotData == undefined || snapshotData == null){
				loggedUser = addUser(result, profileRef);
			}

			else{
				//go thought the and see if the user already exists, if so we wont add them
				var keys = Object.keys(snapshotData);
				var found = false;

				for(var i = 0; i<keys.length; i++){

					if(snapshotData[keys[i]].email == result.user.email){

						loggedUser = snapshotData[keys[i]];
						loggedUser.id = keys[i];
						found=true;
					}
				}
				//if found stays false then we need to add the user
				if(found == false){
						loggedUser = addUser(result, profileRef);
				}
			}
			isDM();
		});
	}).catch(function(error) {

		var errorCode = error.code;
	  	var errorMessage = error.message;
	 	// The email of the user's account used.
		var email = error.email;
	 	// The firebase.auth.AuthCredential type that was used.
	  	var credential = error.credential;

	});

}
//END OF LOGIN FUNCTION



function addUser (result, ref){
	var user = {
		name: result.user.displayName,
		email: result.user.email,
		photo: result.user.photoURL,
		currDM: false
	}

	var newUser = ref.push(user);
	user.id = newUser.key;

	return user;

}
//END OF ADDUSER FUNCTION


function addChannel (channelName, channelDesc, owner, ref){
	var channel = {
		name: channelName,
		desc: channelDesc,
		owner: owner
	}


	var newChannel = ref.push(channel);
	channel.id = newChannel.key;


	return channel;
}
//END OF ADD CHANNEL






//taking the message function out of main and putting it here so its easier to user
function refreshMessages (messageRef,channelID){
	//check for a empty message library
	if(messageRef.child(channelID) == null){
		$('#chat-box').html(`
			<p class="message">No messages here yet</p>
		`);
	}
	// Otherwise fill message list from firebase
	else{
		messageRef.child(channelID).on('value',function(snapshot){
			var messages = snapshot.val();

			//clear the box before we start appending
			$('#chat-box').html(``);
			var keys = Object.keys(messages);

			for(i = 0; i <keys.length; i++){
				//Add the message to the chat box
				$('#chat-box').append(messages[keys[i]]);
			}
		});
	}
}


//refresh the grid
function refreshGrid(gridRef, channelID){
	//empty grid doesn't affect anything, so we don't have a case for it
	gridRef.child(channelID).on('value',function(snapshot){
		var grid = snapshot.val();
		$('.divCell').attr('class', 'divCell gridbox');
		$('.map-furnature-img').attr('src', "borderclear.png");
		$('.map-character-img').attr('src', "borderclear.png");

		if(grid!=null){
			var rows = Object.keys(grid);
			for(var i = 0; i<rows.length; i++){
				var cols = Object.keys(grid[rows[i]]);
				for(var j = 0; j<cols.length; j++){
					
					var currGridObject = grid[rows[i]][cols[j]];
					var currBorder = currGridObject.border;
					var currFurniture = currGridObject.furniture;
					var currCharacter = currGridObject.character;

					//define our current square on the grid
					var currSquare = ("#"+cols[j]+"-"+rows[i]+"");

					//Reset Border of our square
					$(currSquare).attr('class', 'divCell gridbox');
					$(currSquare).html(`
						<img class="map-furniture-img" id="furniture-${cols[j]}-${rows[i]}">
						<img class="map-character-img img-circle" id="character-${cols[j]}-${rows[i]}">
					`);
					
					//Set/Reset Furniture
					
					if(currFurniture != null  || currFurniture != undefined){
						$("#furniture-"+cols[j]+"-"+rows[i]).attr('src', currFurniture);
					}	
					else{
						$("#furniture-"+cols[j]+"-"+rows[i]).attr('src', "borderclear.png");
					}

					//Character
					if(currCharacter != null  || currCharacter != undefined){
						$("#character-"+cols[j]+"-"+rows[i]).attr('src', currCharacter);
					}
					else{
						$("#character-"+cols[j]+"-"+rows[i]).attr('src', "borderclear.png");
					}

					//Set border
					$(currSquare).addClass(currBorder);




				}
			}
		}
	});
}



//this function will get called each time a channel is made or switches channels
//If the user is the owner of the channel, it will put a little gold chest-piece next to their name
function isDM (){

	//Show the Gold chess piece
	var isDM = (loggedUser.id == currChannel.owner);
	if(isDM){
		$('#is-dm').show();
		loggedUser.currDM = true;
	}
	else{
		$('#is-dm').hide();
		loggedUser.currDM = false;
	}

	//Show clear table button
	if(loggedUser.currDM==true){
		$('#clear-table').show();
	}
	else{
		$('#clear-table').hide();	
	}

	// //Show the settings button
	// if(loggedUser.currDM){

	// }
	return isDM;

}



function addToChannel(user, channelID){
	//if currentally in another channel, remove from that channel
	// $('nametag_'+user.id).remove();
	
	$('channel-'+channelID+'-userlist').append(`
		<p class="nametag_${user.id} nameTagStyle">${user.name}</p>
	`);

}





//gridRef.child(currChannel.id).child('2').child('2').push({class:'top-border'});


// //Functions for drawing on the map
// function clearBorder (tableItem){
// 	$(tableItem).removeClass("top-border");
// 	$(tableItem).removeClass("bottom-border");
// 	$(tableItem).removeClass("left-border");
// 	$(tableItem).removeClass("right-border");


// }

// function addTopBorder (tableItem) {
// 	clearBorder(tableItem);
// 	$(tableItem).addClass("top-border");
// }


// function addBottomBorder (tableItem) {
// 	clearBorder(tableItem);
// 	$(tableItem).addClass("bottom-border")
// }


// function addRightBorder (tableItem) {
// 	clearBorder(tableItem);
// 	$(tableItem).addClass("right-border");
// }


// function addLeftBorder (tableItem) {
// 	ClearBorder(tableItem);
// 	$(tableItem).addClass("left-border");
// }


// function addTopLeftBorder (tableItem) {
// 	ClearBorder(tableItem);
// 	$(tableItem).addClass("top-border");
// 	$(tableItem).addClass("left-border");
// }

// function addTopRightBorder (tableItem) {
// 	ClearBorder(tableItem);
// 	$(tableItem).addClass("top-border");
// 	$(tableItem).addClass("right-border");	
// }

// function addBottomLeftBorder (tableItem) {
// 	ClearBorder(tableItem);
// 	$(tableItem).addClass("bottom-border");
// 	$(tableItem).addClass("left-border");
// }

// function addBottomRightBorder (tableItem) {
// 	ClearBorder(tableItem);
// 	$(tableItem).addClass("bottom-border");
// 	$(tableItem).addClass("right-border");

// }

// function addLeftTopRightBorder (tableItem) {
// 	ClearBorder(tableItem);
// 	$(tableItem).addClass("left-border");
// 	$(tableItem).addClass("top-border");
// 	$(tableItem).addClass("right-border");
// }

// function addTopRightBottomBorder (tableItem) {
// 	ClearBorder(tableItem);
// 	$(tableItem).addClass("top-border");
// 	$(tableItem).addClass("right-border");
// 	$(tableItem).addClass("bottom-border");
// }

// function addLeftBottomRightBorder (tableItem) {
// 	ClearBorder(tableItem);
// 	$(tableItem).addClass("left-border");
// 	$(tableItem).addClass("bottom-border");
// 	$(tableItem).addClass("right-border");

// }

// function addLeftTopBottomBorder (tableItem) {
// 	ClearBorder(tableItem);
// 	$(tableItem).addClass("left-border");
// 	$(tableItem).addClass("top-border");
// 	$(tableItem).addClass("bottom-border");
// }

// function addLeftRightBorder(tableItem) {
// 	ClearBorder(tableItem);
// 	$(tableItem).addClass("left-border");
// 	$(tableItem).addClass("right-border");
// }

// function addTopBottomBorder(tableItem) {
// 	ClearBorder(tableItem);
// 	$(tableItem).addClass("top-border");
// 	$(tableItem).addClass("bottom-border");
// }


// // $(this).removeClass("top-border");
// // $(this).removeClass("bottom-border");
// // $(this).removeClass("left-border");
// // $(this).removeClass("right-border");

// // $(this).addClass("top-border");
// // $(this).addClass("bottom-border");
// // $(this).addClass("left-border");
// // $(this).addClass("right-border");









