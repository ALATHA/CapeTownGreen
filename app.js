//find the body tag and store it in a variable called 'body'
var body = document.querySelector("body")

//listen for the keydown event
body.onkeydown = function(e){
   // ? e.keyCode - will capture the key codes
   var keyName = keyCodeName(e.keyCode);
 	displayMessage(keyName); 
 };

var taxiLocationCounter=function(){
	 var i=0;
	 i=i+1;
	 if(keyCodeName==="right"){
		taxiLocationCounter=taxiLocationCounter+1;
	}
	else if(keyCodeName==="left"){
		taxiLocationCounter=taxiLocationCounter-1;
	}

}
var createLocationClass=function(number){
		if(number===1){
			return "slot-one-of-nine";
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
}
};

