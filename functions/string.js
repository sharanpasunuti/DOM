function makeSentence(prefix, ...words) {
  return prefix + " " + words.join(" ");
  console.log(makeSentence(prefix));
}

//console.log(makeSentence("Hello", "my", "name", "is", "Sara"));

const str="sharanteja from warangal";
//console.log(str.slice(-2));
//console.log("a,b,c".split(","));
//console.log("hello".split(","));
/*
const url="https://bing.com/page";
console.log(url.includes("google"));
console.log(url.startsWith("https"));
console.log(".com/page");
*/
/*
const text="I like cats.catS are great";
console.log(text.replace("cats","dogs"));
console.log(text.replaceAll("catS","Dogs"));
*/

// const num="7";
// console.log(num.padEnd(4,0));

// const add= (a,b) => a+b;
// console.log(add(9,8));
/*
let a=5+"5";
b=Number(a);
console.log(b);
console.log(typeof(b));
*/
/*
let sharan='{"name":"teja","age":19}'
let json=JSON.parse(sharan);
console.log(json);
*/
//closure

// console.log(a);
// var a=5;

// if(true){
//   let c=1;
// }
// console.log(c);


// for(var i=0;i<3;i++){
//   setTimeout(() => console.log(i),0);
// }

 //setTimeout(() => console.log("hii sharan"),5000);
 /*
 let count=0;
let clock=setInterval(function hii(){
  count++;
  console.log("hey siri",count);
  if(count==10){
    clearInterval(clock);
  }
},1000)
*/

/*
let cnt=20;
let clock1=setInterval(function countdown(){
 
  console.log(cnt);
   cnt--;
   if(cnt<=0){
    clearInterval(clock1);
   }
},1000)
*/

// function poll(){
//   console.log("time:",new Date().toLocaleTimeString());
//   setTimeout(poll,1000);
// }
// setInterval(poll,2000)

// function startClock(){
//   console.log("time:",new Date().toLocaleTimeString());
//   setTimeout(poll,5);
// }
// // setInterval(poll,5);
// let arr=[40,50,60,11,56];
// let newArr=[];
// for(let i=0;i<arr.length;i++){  
//   newArr[i]=arr[i]*2;
// }
// console.log(newArr)

// const arr=[40,50,60,11,56,15,12,6]
// let res=arr.filter(function(x){
//   if(x%2!=0){
//     return x
//   };
// })
// console.log(res)

// let res=nums.filter(x => x<40)
// console.log(res)

// const fruits=["kiwi","mango","banana"]
// let ans=fruits.filter(fruit => fruit.length<=4)
// console.log(ans)

// const users=[
//                 {id:1,name:'Rahul',salary:30000} ,
//                 {id:2,name:'zoya',salary:90000} ,
//                 {id:3,name:'ann',salary:80000} ,
//                 {id:4,name:'bb',salary:50000}, 
//                 {id:5,name:'maya',salary:40000} 
//             ]
// let res=users.filter(user => user.salary > 40000).map(item =>item.name)
// console.log(res)

// const student=[
//                 {name:'Rahul',status:true} ,
//                 {name:'zoya',status:true} ,
//                 {name:'ann',status:true} ,
//                 {name:'bb',status:false}, 
//                 {name:'maya',status:false} 
//             ]
// let result=users.filter(student => student.status==false).map(item =>item.name)
// console.log(res)
// const numsarr=[10,29,11,43,47]
// let arr=numsarr.reduce((maxi,curr)=>{
//     if(maxi<curr){
//    return curr;
//     }
   
// },numsarr[0]);
// console.log(arr)

// const number=[1,2,3,4,5,6,7,8,9]
// let newArr=number.filter((x)=>{
//   if(x%2==0){
//     return x;
//   }
// })
// let newnum=newArr.map((x)=>{
//   return x*x;
// })
// console.log(newnum)

                                     
