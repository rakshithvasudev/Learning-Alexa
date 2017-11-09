var http = require('http');


function getQuote(callback){
  var url = "http://api.forismatic.com/api/1.0/json?method=getQuote&lang=en&format=json";
  var req = http.get(url,function(res){
    
  });  

  req.on("error",function(err){
    callback('',err);
  });

}

console.log(getQuote());