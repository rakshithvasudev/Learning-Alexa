var p1 = {
name: "Rakshith",
title: "Mr. ",
state: "California",
age: 23
};


var p2 = {
name: "Nycent",
title: "Mr. ",
state: "California",
age: 22
};

function Person(name,title,state,age){
    this.name = name;
    this.title = title;
    this.state = state;
    this.age = age;
    this.getPerson =  function() {
    return title + name + state + " aged " + age;
  }
}


exports.Person = Person;

var rocky = new Person("Rocky", "Mr. ", " California", 23);
console.log(rocky.getPerson());
