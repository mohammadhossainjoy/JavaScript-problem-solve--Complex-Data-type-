//Exercise-2: When and why to use Array vs object (Mention 3 point)

/*
Array: -----

1) Access by Index:
When: Use arrays when you need quick access to elements by their index.
Why: Arrays provide fast O(1) time complexity for accessing elements by index.

2)Stack and Queue Operations:

When: Use arrays to implement stack (LIFO) and queue (FIFO) data structures.
Why: Arrays support methods like push, pop, shift, and unshift which are useful for these operations.

3)Sparse Arrays:
When: Use arrays even when you don't need every index filled.
Why: JavaScript arrays can be sparse, meaning they can have gaps or undefined elements without performance penalty.
*/
let Mobile = ["iphone", "android", "tab"];


/*
Object: ---

1)Configuration Objects:

When: Use objects to pass configuration settings.
Why: Objects can encapsulate multiple related settings in a single structure.

2)Data Grouping:

When: Use objects to group related data together.
Why: Objects can encapsulate related properties, making code more readable and maintainable.

3)State Management:

When: Use objects to manage state in applications.
Why: Objects can hold the current state and allow easy updates to specific properties.
*/
let car = {
  model: "BMW",
  price: 30000000,
  color: function () {
    console.log("My car is Blue");
  },
};