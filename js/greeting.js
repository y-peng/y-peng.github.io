/*
	Description: script tp generate greeting based on time of day
	and to get time and datte of users brower and display on the webpage

	if the hour is greater than 18(6pm) then assign greeting Good evening!
	else if greater than 12 then assign Good afternoon
	else if greater than 0(12am) then assign greeting Good morning
	else assign greeting Good morning
	*/

var currentHours24,
	currentTime,
	currentSeconds,
	amOrPm,
	currentHours12 = 0,
	currentTimeString;

document.getElementById("greeting").innerHTML = greeting;



var updateGreeting = function(hour) {
	
		var greeting;

	if( hour >=18 ) {
		greeting = "Spooky Time";
		document.getElementById("container").style.backgroundColor = "#d6a5fa"; 
	}
	else if( hour >= 13 ) {
		greeting = "Nap Time";
		document.getElementById("container").style.backgroundColor = "#a5fad6"; 
	}
	else if( hour >=0 ) {
		greeting = "Wee Hours";
		document.getElementById("container").style.backgroundColor = "grey"; 
	}
	else if( hour >=7 ) {
		greeting = "Morning person, are we?";
		document.getElementById("container").style.backgroundColor = "fad6a5"; 
	}
	else {
		greeting = "oops";
	}

	return greeting;
};

var updateClock = function() {
	currentTime = new Date();

	currentHours24 = currentTime.getHours(); // hour is in 24 not 12
	//console.log("hours: "+currentHours24)
	currentMinutes = currentTime.getMinutes();
	//console.log("minutes: "+currentMinutes);
	currentSeconds = currentTime.getSeconds();

//if its less than 12, then am, if its more than 12, pm
	amOrPm = ( currentHours24 <12 ) ? "AM" : "PM";
//if the hour is more than 12 subtract 12 to convet to 12 hour clock otherwise keep the time
	currentHours24 = ( currentHours24 > 12 ) ? currentHours24-12 : currentHours12 ; 
	currentHours12 = ( currentHours12 == 0 ) ? 12 : currentHours12;
//put the time string together, ready for display
	currentTimeString = "Current time is " + currentHours12 + " : " + currentMinutes + " : " + currentSeconds + " " + amOrPm;

document.getElementById("greeting").innerHTML = updateGreeting(currentHours24);
document.getElementById("clock").firstChild.nodeValue = currentTimeString;
};



