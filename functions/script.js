function sum(a,b){
    s=a+b;
    return s;
}
//console.log(sum(3,5));

const addition=(a,b,c)=>{
    return a*b*c;
}
//console.log(addition(5,6,7))

//------------------------------------------
function countVowels(str){
    let count=0;
    for(let char of str){
        if(char=='a'|| char=='e'|| char=='i'|| char=='o'||char=='u'){
            count++;
        }
    }
    return count;
}


//console.log(countVowels("sharanteja"));

// let arrow=(str)=>{
//      let count=0;
//     for(let char of str){
//         if(char=='a'|| char=='e'|| char=='i'|| char=='o'||char=='u'){
//             count++;
//         }
//     }
//     return count;
// }

// console.log(arrow("sharanteja"))

//----------------------------------------------------------------------------------------------

/*HIGHER ORDER FUNCTION/METHOD  --(HOF/HOM)....*/
//Higher-order functions are functions that make use of functions as either their argument or their return value.

// let arr=["hyderabad","delhi","pune","parkal","warangal"]
// arr.forEach((val)=>{
//     console.log(val);
// })

//-----------------------------------------
let nums=[1,2,3,4,5]
nums.forEach((value)=>{
    console.log(value*value);
})

