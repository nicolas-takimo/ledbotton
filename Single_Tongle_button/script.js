var firebaseConfig = {
    apiKey: "AIzaSyBek-iqPInBPXouGgZhJVSQC5VQkDuynUw",
    authDomain: "ligar-led-test.firebaseapp.com",
    databaseURL: "https://ligar-led-test-default-rtdb.firebaseio.com",
    projectId: "ligar-led-test",
    storageBucket: "ligar-led-test.appspot.com",
    messagingSenderId: "955973531915",
    appId: "1:955973531915:web:c85eb1f3ebeb21f10c4a0e",
    measurementId: "G-GB5CF1YCLX"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

$(document).ready(function(){
    var database = firebase.database();
	var Led1Status;

	database.ref().on("value", function(snap){
		Led1Status = snap.val().Led1Status;
		if(Led1Status == "1"){    // check from the firebase
			//$(".Light1Status").text("The light is off");
			document.getElementById("unact").style.display = "none";
			document.getElementById("act").style.display = "block";
		} else {
			//$(".Light1Status").text("The light is on");
			document.getElementById("unact").style.display = "block";
			document.getElementById("act").style.display = "none";
		}
	});

    $(".toggle-btn").click(function(){
		var firebaseRef = firebase.database().ref().child("Led1Status");

		if(Led1Status == "1"){    // post to firebase
			firebaseRef.set("0");
			Led1Status = "0";
		} else {
			firebaseRef.set("1");
			Led1Status = "1";
		}
	})
});