var index = require('./obj.js');
var fs = require('fs');

var p1 = new index.Person("name ","title ","state ",12);

console.log(p1.getPerson());


var data = fs.readFileSync('./temp.txt','utf-8');
console.log(data);
