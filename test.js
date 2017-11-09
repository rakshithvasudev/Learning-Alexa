var index = require('./obj.js');
var fs = require('fs');

var p1 = new index.Person("name ","title ","state ",12);

console.log(p1.getPerson());


// var data = fs.readFileSync('./temp.txt','utf-8');
// blocking code - sync code
// console.log(data);


// non blocking code - async code
fs.readFile('./temp.txt','utf-8',function(err,data) {
  console.log(data);
});

console.log("outside stuff");
