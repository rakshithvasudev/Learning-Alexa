exports.handler = function(event,context){

	var request = event.request;
	
	if(request.type === "LaunchRequest"){

	}else if(request.type === "IntentRequest"){

	}else if(request.type === "SessionEndedRequest"){

	}else{
		context.fail("Unknown intent type");
	}

}


function buildResponse(options){
 var response = {

	
 };	
}