var myStuff = [121,234,33,44,"Jenna","Reag","Hello"];

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

// callHi(sayHi,"Ravi");


callHi(function(name){
  console.log("From Tell truth: "+ name);
},"Jason");



function myForEach(arr,callback){
  for (var i = 0; i < arr.length; i++) {
    callback(i,arr[i]);
  }
}

myForEach(myStuff, function(idx,element) {
    console.log(idx + " element is " + element);
});
