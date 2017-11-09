var index = require('./obj.js');
var fs = require('fs');

var p1 = new index.Person("name ","title ","state ",12);

console.log(p1.getPerson());


// blocking code
// var data = fs.readFileSync('./temp.txt','utf-8');
// console.log(data);

fs.readFile('./temp.txt','utf-8',function(err,data) {
  console.log(data);
});

console.log("outside stuff");
