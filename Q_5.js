//Exercise-5: Write down the multiple ways to define an array and object

//Array
let Mobile = ["iphone", "android", "tab"];

let fruits = new Array("Apple", "Banana", "Apple");

let car = Array.of("BMW", "ODDI", "Bmw-8");

let person = [];
person.push("Mohammad");
person.push("Hossain");
person.push("Joy");

//Object
let author = {
  firstName: "MH",
  age: 25,
};

let p1 = new Object();
person.firstName = "SA";
person.lastName = "Anika";
person.age = 23;

let p2 = Object.assign({}, { firstName: "Fahim", lastName: "rahman", age: 30 });

/*
Exercise-5(part-2): Nested data access from array and object

const userObj = {
   name: 'samim',
   address: {
      city: 'Dhaka',
      university: {
         name: 'Dhaka University'
      }
   }
}

const userArr = ['samim', ['Dhaka', ['Dhaka university']]]

Access university name from the object and array
*/

const userObj = {
  name: "samim",
  address: {
    city: "Dhaka",
    university: {
      name: "Dhaka University",
    },
  },
};

const userArr = ["samim", ["Dhaka", ["Dhaka university"]]];

console.log(userObj.address.university.name);
