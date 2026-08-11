/*Arrays splice method is used to add, remove and replace elements in an array.
It changes the original array*/

//let arr = ["I", "study", "JavaScript", "right", "now"];

/* remove 3 first elements and replace them with another*/
// const removed=arr.splice(1,2);

// // arr.splice(0, 3, "Let's", "dance");
// console.log(arr); 
// console.log(removed); 

// const colors = ["red", "blue", "green"];

// colors.splice(1, 0, "yellow");
// console.log(colors); 

/*slice() is used to extract part of an array and return it as a new array. It does not change the original array.*/
const arr=["sharan","teja","saiteja","thiru"];
const remove=arr.slice(-3,-1);
console.log(remove)

const arrr = [1, 2, 3, 4, 5];

console.log(arrr.splice(2, 1));
console.log(arrr);

const array = [10, 20, 30, 40, 50];
console.log(array.slice(-3, -1));
console.log(array)

console.log(null === undefined); 