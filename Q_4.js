//Exercise-4: when to use dot notation vs bracket notation to access data from object?

/*
Dot Notation:-----
When: Use dot notation when the property name is a valid JavaScript identifier (i.e., it contains no spaces, special characters, or starts with a number).
Why: Dot notation is more concise and readable.
*/

let profile = {
  firstName: "Mohammad",
  lastName: "Hossain Joy",
  occupation: "Web developer",
};

console.log("First Name :", profile.firstName);
console.log("Last Name  :", profile.lastName);
console.log("Occupation :", profile.occupation);

/*
Bracket Notation:----
When: Use bracket notation when the property name is stored in a variable or is dynamically determined.
Why: Bracket notation allows access to properties using variables.
*/
let author = {
  firstName: "MH",
  age: 26,
};
let propName = "firstName";
console.log(author[propName]);
