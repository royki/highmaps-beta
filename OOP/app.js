/* OOP
Stop thinking in terms of individual variables and functions
Begin thinking in terms of cohesive, self-sufficient objects

Object: is an entity that contains Data & Behavior. (Noun & Verbs)
Class: A reusable blueprint or recipe for objects
*/

/*
function person (personName, favColor) {
	console.log(personName +" "+ favColor);
}
var john = {
	name: 'John Doe',
	favColor: 'blue'
}
person(john.name, john.favColor);
*/
/*
var person = {
	name: 'John Doe', //Noun
	favColor: 'blue', // Noun
	greet: function() { // Verb -> called method
		console.log(person.name + " " + person.favColor);
	}
}

person.greet();
*/

// Class

function Person(personName, favColor) {
	this.name = personName;
	this.color = favColor;
	this.greet = function () {
		console.log("Name " + this.name + " Color " + this.color);
	}
}

var john = new Person('John', 'blue');
john.greet();



