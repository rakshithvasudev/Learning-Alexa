var http = require('http');


function getQuote(){
  var url = "http://api.forismatic.com/api/1.0/json?method=getQuote&lang=en&format=json";
  var req = http.get(url,function(res){
     var body = "";
     
     res.on("data",function(chunk){
        body += chunk;
     });
     
     res.on("end",function(){
        body = body.replace(/\\/g,''); 
        var quote = JSON.parse(body);
        console.log(quote.quoteText);
     });

    });  

  req.on("error",function(err){
    console.log('',err);
  });

}

