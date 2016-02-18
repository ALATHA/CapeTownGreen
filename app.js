//find the body tag and store it in a variable called 'body'
var body = document.querySelector("body")

//listen for the keydown event
body.onkeydown = function(e){
   // ? e.keyCode - will capture the key codes
   var keyName = keyCodeName(e.keyCode);
 	displayMessage(taxiLocationCounter);
 	var myClass=createLocationClass(taxiLocationCounter);
 	displayMessage(myClass);

 };

var taxiLocationCounter=1;
	  var i=0;
	  i=i+1;
	 if(keyCodeName==="right"){
		taxiLocationCounter=taxiLocationCounter+1;
	}
	else if(keyCodeName==="left"){
		taxiLocationCounter=taxiLocationCounter-1;
	}

var createLocationClass=function(number){
		if(number===1){
			return "slot-one-of-nine";
		}
		if(number===5){
			return "slot-five-of-nine";
		}
		if(number===9){
			return "slot-nine-of-nine";
		}
	}

var keyCodeName=function(keycode){
if(keycode===37){
	return "left";
}
if(keycode===38){
	return "up";
}
if(keycode===39){
	return "right";
}
if(keycode===40){
	return "down";
}
else {
	return "";
	};
};

 function moveForward(){
	var currentLocation = createLocationClass(taxiLocationCounter);
	taxiLocationCounter+1;
	var newLocation = createLocationClass(taxiLocationCounter);
	moveTaxi(currentLocation,newLocation);

};

