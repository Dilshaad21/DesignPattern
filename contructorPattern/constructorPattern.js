// Initialise an object

// Initialise a constructor whenever we create an object

// This exaples will show how to handle different ways to handle object initiation
// normal syntax
let person = {};

// 1) Directly set the properties
person.name = "Dilshaad";
person.email = "dilshaad.muthalif@actyv.com";

console.log(`The object is`, person);
console.log(`The name property of the oject ${person.name}`);

// 2) Square bracket way

// Initialise using object syntax
person = new Object();

person["name"] = "dilshaad";
person["email"] = "newEmail@live.com";

console.log(person);
console.log(person["name"]);

// 3) Object.defineProperty

Object.defineProperty(person, "name", {
  value: "John",
  writable: true,
  enumerable: true,
  configurable: true,
});

console.log(person);
console.log("After using define property name is", person["name"]);

// 4) defining new function define Prop

const defineProp = (object, key, value) => {
  let config = {
    value: value,
    writable: true,
    enumerable: true,
    configurable: true,
  };

  Object.defineProperty(object, key, config);
};

// 5) Use define prop to initialise an object

person = Object.create(Object.prototype);

defineProp(person, "name", "dilshaad");
defineProp(person, "email", "rockandroll@gmail.com");

console.log(person);

// 6) Directly multiple properties using define Properties function

Object.defineProperties(person, {
  name: {
    value: "John",
    writable: true,
  },
  email: {
    value: "john@live.com",
    writable: true,
  },
});

defineProp(person, "beard", true);

// 7) Ineritance

let student = new Object(person);

defineProp(student, "name", "Sam");
defineProp(student, "email", "sam@live.com");
defineProp(student, "class", "10th");
defineProp(student, "beard", false);

console.log(student);
