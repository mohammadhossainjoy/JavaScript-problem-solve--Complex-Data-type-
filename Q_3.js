/*Exercise-3: Create an profile object that has your firstName, lastName, and occupation as keys.
Access each value from your object and console using both dot notation and bracket notation.
Add a key for hobby to your existing object. Remove the key and value for occupation. 
*/

let profile = {
  firstName: "Mohammad",
  lastName: "Hossain Joy",
  occupation: "Web developer"
};

// Accessing  dot notation
console.log("First Name :", profile.firstName); 
console.log("Last Name  :", profile.lastName);   
console.log("Occupation :", profile.occupation); 

// Accessing bracket notation
console.log("First Name :", profile["firstName"]); 
console.log("Last Name  :", profile["lastName"]);   
console.log("Occupation :", profile["occupation"]);

// Adding a key for hobby
profile.hobby = "Football";

// Removing the key and value for occupation
delete profile.occupation;

// Output the updated profile object to the console
console.log(profile);
