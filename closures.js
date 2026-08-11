// function outer(){
//     // const a=10;
//     function inner(){
//         console.log(a);
//     } 
//     let a=10;
//     return inner;
// }
// const close=outer();
// close()

// function sayHii(){
//     console.log("hello")
// }
// setInterval(sayHii,2000)

/*
//countdown , pause , resume using scheduling call methods(setTimeout and setInterval)

let count=10;
let currentCount;
var clock;
function countDown(){
    clock=setInterval(()=>{
        console.log("current count:" , `${count}`);
          count++;
    if(count>50){
         clearInterval(clock);
    }
        
    },1000)
  
   
}
 

function pause(){
    currentCount=count;
    console.log("count pause at:", currentCount)
    clearInterval(clock)
}

function resume(){
    count=currentCount;
    console.log("count resume at:", `${count}`)
    countDown()
}

countDown()
setTimeout(pause, 5000)
setTimeout(resume, 9000)
*/

/*
//basic delay sequence

console.log("A")
setTimeout(()=>{
    console.log("B");

    setTimeout(()=>{
        console.log("C");
    },1000)

},2000)

*/

//countdown timer
//    let count=5;
//     setInterval(()=>{
//         if(count>0){
//             console.log(count);
//             count--;
//             if(count==0)
//             console.log("liftoff")
//         }
        
// },1000)
