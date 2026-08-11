function calculate(a,b,op){
    switch(op){
        case "+":
            console.log(a+b);
            break;
        case "-":
            console.log(a-b);
            break; 
        case "*":
            console.log(a*b);
            break;    
        case "/":
            console.log(a/b);
            break;
        default:
            console.log("Invalid operator");         
    }
}
//calculate(20,5,"+");
/*
for(let i=1;i<=30;i++){
    if(i==13){
        continue;
    }
    if(i==25){
        break;
    }
    if(i%3==0 && i%5==0){
        console.log("Fizzbuzz");

    }
    else if(i%3==0){
        console.log("Fizz");
    }
    else if(i%5==0){
        console.log("Buzz");
    }
    else{
          console.log(i);
    }
}
    */
//    const nums=[1,2,3,4,5];
// nums.slice(-3,-4);
console.log(nums);
//    for(let i=0;i<nums.length;i++){
//     if(nums[i]<=0){
//         continue;
//     }
   
//     else{
//         console.log(nums[i]);
//     }
//    }
/*
let messages=["msg1,msg2"];
messages.unshift("urgent");
messages.push("msg3");
messages.shift(messages);
console.log(messages);   
*/
/*
let messages=["msg1","msg2","msg3","msg4","msg5"];
//deletion
//delete messages[0];
messages.splice(1,2,"hello","hii");
console.log(messages);
*/
/*
const cart=["pen","vehicle","book","mouse","charger","fruits"];
cart.splice(3,0,"bat");
cart.splice(4,2,"football","tennis");
console.log(cart);
*/
  console.log("hey sharan");