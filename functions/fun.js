// let sum=(a,b) => {
//     return a+b
// }
// console.log(sum(5,6))

// function sum(a,b){
//     return a+b
// }
// console.log(sum(9,8))

// function gooodBye(name){
//     return {name}
// }
// console.log(goodBye("sharan"))
// const greet = (name) => {
//   const message = `Hello, ${sharan}`;
//   return message;
// };
// console.log(greet)

/*
function sum(a,b,c, ...rest){
  console.log(a);
  console.log(b);
  console.log(c);
  console.log(rest);

}
sum(1,2,3,4,5,6);
*/
function sum(...numbers){
  let total=0;
  for(let num of numbers){
    total+=num;
  }
 return total;
}
console.log(sum(1,2,3,4,5));

function Sum(...rest){
  console.log(rest);

  return rest.reduce((total,curr) => {
    return total+curr
 },0)
}
console.log(Sum(20,30,50))
                          