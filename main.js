// Initialize Firebase
	var config = {
		apiKey: "AIzaSyBmF7n9H7A_crNk3kMmidu5IcHOOMEHnSc",
		authDomain: "realtimechat-35453.firebaseapp.com",
		databaseURL: "https://realtimechat-35453.firebaseio.com",
		projectId: "realtimechat-35453",
		storageBucket: "",
		messagingSenderId: "255419825354"
	};
	firebase.initializeApp(config);
	var database = firebase.database();

	var USER = prompt("Enter Your Name : -");
  
	function btnSubmit(){  	  	  
		var data = {
			user: USER,
			text: document.getElementById("msg").value
		};
		database.ref('projects').child('messages').push(data);
		document.getElementById("msg").value='';
	}

	database.ref('projects').child('messages').on('child_added',function(data){
		if(data.val().user == USER)
		{
			document.getElementById("logs").innerHTML +="<div class='chat self'><div class='user-photo'></div><p class='chat-message'>" +  data.val().user + " : - " + data.val().text +  "</p></div>";
		}
		else
		{
			document.getElementById("logs").innerHTML +="<div class='chat friend'><div class='user-photo'></div><p class='chat-message'>"  +  data.val().user + " : - " + data.val().text +  "</p></div>";
		}
	});

