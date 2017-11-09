function sayHello(name){
  console.log("Hello: "+ name);
}

var sayHi = function(name){
  console.log("Hi: "+name);
}

sayHi("Rakshith");

sayHello("Rakshith");


function callHi(func,name){
  func(name);
}

callHi(sayHi,"Ravi");


callHi(function(name){
  console.log("From Tell truth: "+ name);
},"Jason");
