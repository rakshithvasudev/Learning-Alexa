exports.handler = function(event,context){

	var request = event.request;
	
	if(request.type === "LaunchRequest"){
		
		context.succeed(buildResponse({
			speechText:"Hello Welcome to greeting skill, I can greet you, just say the name.",
			repromptText:" Who do you want to greet? You can say for example, Greet Rakshith",
			endSession:false
		}));

	}else if(request.type === "IntentRequest"){
		context.succeed(buildResponse({
			speechText:"Hello",
			repromptText:" Do you want to greet someone else as well?",
			endSession:false
		}));
	}else if(request.type === "SessionEndedRequest"){

	}else{
		context.fail("Unknown intent type");
	}

}


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