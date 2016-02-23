//find the body tag and store it in a variable called 'body'
var body = document.querySelector("body");
var taxiLocationCounter=1;
//listen for the keydown event
body.onkeydown = function(e){
   // ? e.keyCode - will capture the key codes

   var keyName = keyCodeName(e.keyCode);
 	displayMessage(taxiLocationCounter);
 	var myClass=createLocationClass(taxiLocationCounter);
 	displayMessage(myClass);

 	if(keyName==="right"){
 		
 		moveForward();
 	}
 	else if(keyName==="left"){
 		moveBackwards();
 
 	}

 	
	 if(keyCodeName==="right"){
		taxiLocationCounter=taxiLocationCounter++;
	}
	else if(keyCodeName==="left"){
		taxiLocationCounter=taxiLocationCounter--;
	}

	var trafficLight = new TrafficLight(taxiLocationCounter);
	if(e.keyCode===38){
		trafficLight.makeRed();
	}
	else if(e.keyCode===40){
		trafficLight.makeGreen();
	}

};


var createLocationClass=function(number){
		if(number===1){
			return "slot-one-of-nine";
		}
		else if(number===2){
			return "slot-two-of-nine";
		}
		else if(number===3){
			return "slot-three-of-nine";
		}
		if(number===4){
			return "slot-four-of-nine";
		}
		else if(number===5){
			return "slot-five-of-nine";
		}
		else if(number===6){
			return "slot-six-of-nine";
			}
			if(number===7){
			return "slot-seven-of-nine";
		}
		else if(number===8){
			return "slot-eight-of-nine";
		}
		else if(number===9){
			return "slot-nine-of-nine";
	};
}

var keyCodeName=function(keycode){
if(keycode===37){
	return "left";
}
else if(keycode===38){
	return "up";
}
else if(keycode===39){
	return "right";
}
 else if(keycode===40){
	return "down";
}
else {
	return "";
	}
};


var createTrafficLightClass=function(number){
	if(number===1){
			return ".one-of-nine";
		}
		else if(number===2){
			return ".two-of-nine";
		}
		else if(number===3){
			return ".three-of-nine";
		}
		if(number===4){
			return ".four-of-nine";
		}
		else if(number===5){
			return ".five-of-nine";
		}
		else if(number===6){
			return ".six-of-nine";
			}
			if(number===7){
			return ".seven-of-nine";
		}
		else if(number===8){
			return ".eight-of-nine";
		}
		else if(number===9){
			return ".nine-of-nine";
	};
	
};


function TrafficLight(x){
		var className = createTrafficLightClass(x);
		
		var trafficLightElement=document.querySelector(className);
 		this.makeGreen=function(){
		trafficLightElement.classList.remove("lights-slowdown");
 	 	trafficLightElement.classList.remove("lights-stop");
 	 	trafficLightElement.classList.add("lights-go");
 	}
 	this.makeRed=function(){
 	 	trafficLightElement.classList.remove("lights-slowdown");
 	 	trafficLightElement.classList.remove("lights-go");
 	 	trafficLightElement.classList.add("lights-stop");
 	}
 	this.makeOrange=function(){
 		trafficLightElement.classList.remove("lights-go");
 	 	trafficLightElement.classList.remove("lights-stop");
 	 	trafficLightElement.classList.add("lights-slowdown");
 	}
 	this.color=function(){

 		if (trafficLightElement.classList.contains("lights-slowdown")){
    return 'orange';
}
else if(trafficLightElement.classList.contains("lights-stop")){
	return "red";
}
else if(trafficLightElement.classList.contains("lights-go")){
	return "green";
}
 	};
 }



 function moveForward(){
	var currentLocation = createLocationClass(taxiLocationCounter);
	taxiLocationCounter++;
	var newLocation = createLocationClass(taxiLocationCounter);
	moveTaxi(currentLocation,newLocation);

};
function moveBackwards(){
	var currentLocation = createLocationClass(taxiLocationCounter);
	taxiLocationCounter--;
	var newLocation = createLocationClass(taxiLocationCounter);
	moveTaxi(currentLocation,newLocation);
};
