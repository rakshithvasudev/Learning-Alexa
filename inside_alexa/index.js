"use strict";

exports.handler = function(event,context){

try{

	var request = event.request;

	if(request.type === "LaunchRequest"){
		
		context.succeed(buildResponse({
			speechText:"Hello! Welcome to greeting skill, I can greet you, just say the name.",
			repromptText:"You can say for example, Greet Rakshith",
			endSession:false
		}));

	}else if(request.type === "IntentRequest"){
	
	// only if the intent name is HelloIntent, then buildResponse
	if(request.intent.name === "HelloIntent"){
		let firstName = request.intent.slots.FirstName.value;
		let quote = getQuote(function(data,err){
			if(err) 
				context.fail(err);
			return data;	
		});
		context.succeed(buildResponse({
			
			speechText:"Hello " + firstName+ ". " + getWish() +" ! welcome to Rakshith's room."
			+ firstName + ", Here's a quote for you: " + quote ,
			endSession:true
		}));
	
	// fail if intent name isn't "HelloIntent" 	
	  }else{
		  throw "Unknown Intent";
	  }		
	
	}else if(request.type === "SessionEndedRequest"){

	}else{
		throw "Unknown request type";
	}
}catch(e){
	context.fail("Exception: " +e);
}

};

/**
 * Returns the wish matching appropriate 
 * times in relation to PST time setup.
 */
function getWish(){
	let currentHour = getCurrentHour();
	if(currentHour<12){
		return "Good Morning";
	}else if(currentHour>=12 && currentHour < 18){
		return "Good Afternoon";
	} else{
		return "Good Evening";
	}
}

/**
 * Returns the current hour matching PST
 */
function getCurrentHour(){
	let myDate = new Date();
	let hours = myDate.getUTCHours()-8;
	if(hours<0){
		hours+=24;
	}
	return hours;
}

/**
 * Builds the response object back, to match the required
 * format of alexa. 
 * @param {*} options 
 */
function buildResponse(options){
 var response = {
	version: "1.0",
	response: {
		outputSpeech: {
		  type: "PlainText",
		  text: options.speechText
		},

		shouldEndSession: options.endSession
	  }
	};	

	if(options.repromptText){
		response.response.reprompt = {
			outputSpeech: {
				type: "PlainText",
				text: options.repromptText
			  }
		};
	}

	return response;
}

/**
 * 
 * @param {*} callback 
 */
function getQuote(callback){
	var url = "http://api.forismatic.com/api/1.0/json?method=getQuote&lang=en&format=json";
	var req = http.get(url,function(res){
	   var body = "";
	   
	   res.on("data",function(chunk){
		  body += chunk;
	   });
	   
	   res.on("end",function(){
		  body = body.replace(/\\/g,''); 
		  var quote = JSON.parse(body);
		  callback(quote.quoteText);
	   });
  
	  });  
  
	req.on("error",function(err){
	  callback('',err);
	});
  }