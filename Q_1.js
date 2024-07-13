//Exercise-1:What are the complex data type in JavaScript?



/*A complex data type represents a number of similar or different data under a single declaration
 of a variable. It is a data type that allows multiple values to be grouped together.
 */
//Complex Data Types Are Object,Array,Function,Date,RegExp,Map,Set,WeakMap,WeakSet
//Object
let car = {
  model: "BMW",
  price: 30000000,
  color: function () {
    console.log("My car is Blue");
  },
};
//array
let Mobile = ["iphone", "android", "tab"];

//function
function sub(a, b) {
  return a - b;
}
//Date
let now = new Date();
console.log(Date());

//Set
let set = new Set();
set.add(1);