/* we can store data in key-value pairs in objects instead of storing it seperate variables which is not efficient for large data.
But instead of creating keys for every value we can store all values in an array with single var name, and we can store any data type in arr */
/*
let student_Marks={
    s1:99,
    s2:98,
    s3:45,
    s4:96,
    s5:18
};

console.log(student_Marks)
*/

//---------------------------------------------------------

/*JavaScript is a dynamically typed language, meaning variables (array elements) are not bound to a specific data type at compile time. Each slot in a JavaScript array simply holds a reference to a value, regardless of what type that value is.*/
// let sum=0;
// let marks=[99,98,18,45,97,87];
// for(let i=0;i<marks.length;i++){
//     sum+=marks[i];
// }
// let avg=sum/marks.length;
// console.log(`avg marks of the class=${avg}`);
//console.log(typeof marks);

//------------------------------------

let prices=[200,360,400,385,900,850];
for(let i=0;i<prices.length;i++){
    let offer=prices[i]/10;
    prices[i]=prices[i]-offer;
}
console.log(prices);

//alternative way using for of loop

let price=[200,360,400,385,900,850];
let i=0;
for(let val of price){
    let offer=price[i]/10;
    price[i]-=offer;
    i++;
}
console.log(price);