/*
function asyncOperation(resolve, reject){
    setTimeout(()=>{
        console.log("data fetched")
        resolve("promise resolved")
    },3000)
}

let p=new Promise(asyncOperation)
console.log("p:",p)

p.then((data)=> {
    console.log("p:",p)
    console.log("data:",data)
})

.catch((error)=>{
    console.log("p:",p)
    console.log("error:",error)
})
*/

