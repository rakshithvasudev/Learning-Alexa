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

class Person{
  constructor(name,title,state,age) {
    this.name = name;
    this.title = title;
    this.state = state;
    this.age = age;
  }

  function getPerson() {
    return title + name + state;
  }
}


var rocky = new Person("Rocky", "Mr. ", " California", 23);
console.log(rocky.getPerson());
