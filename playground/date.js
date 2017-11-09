'use  strict'

var mydate = new Date();

console.log(mydate.getUTCHours()-8);


function getWish(){
	var currentHour = getCurrentHour();
	if(currentHour<12){
		return "Good Morning";
	}else if(currentHour>=12 && currentHour < 18){
		return "Good Afternoon";
	} else{
		return "Good Evening";
	}
}


function getCurrentHour(){
	var myDate = new Date();
	var hours = myDate.getUTCHours()-8;
	if(hours<0){
		hours+=24;
	}
	return hours;
}


console.log(getWish());