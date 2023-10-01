// Function (in JavaScript): A reusable block of code that performs a specific task

function Sum(a,b){
    const c = a+b;
    return c 
}
const result = Sum(2,3)
console.log(result)  // result is 5

/* function can take one or more input but it returns only a value.it returns a value in any condition it does not 
 you return something or not. if you will not return it will return undefined.

functions are reusable

function coffee machine ki tarah hote hai ek bar function bana diye kitni bhi bar function use karo.*/


function add(a,b){
    const d = a*b;
    return 
}
const ans = add(20,30)
console.log(ans) // result = undefined

//if you don't return anything it gives result undefined

function add(a,b){
    const d = a*b;

}
const res = add(20,30)
console.log(res) // result = undefined



function sub(a,b){
    return a-b;
}
const sres = sub(4,5)
console.log(sres)

// once you can store in any variable then return or you can directly return 


// ARGUMENT vs PARAMETER

// The doors(INPUT) we are creating is known Parameter  a, b are parameters
//The values you are passing through the door is known as argument  4 , 5 are arguments



function Roshan(...a){
    console.log(a)

}
Roshan(1,2,3,4,5,6,7,8,9,0)



function Rahul(a,c){
    const d = a/c
    return d
}
const rem = Rahul(2)
console.log(rem)//Result NaN

// if you are creating doors and you are passing the less value then it gives the result NaN

// if you are passing the argument less than parameter then it gives result NaN

// work of return 
// 1- To send the value outside the function
// 2- To terminate the function

// sabse pahle code me hum edge case likhte hai
// uske bad happy flow likhte hai


function Rostech(a,b){
    if(typeof a !== "number" || typeof b  !== "number"){
        return "invalid input"
    }

const c = a + b;
return c
}
const myresult = Rostech(2,"cat")
console.log(myresult)


/*
function myName(){
    for(i=0;i<=100;i++){
        if(i%2==0){
            console.log(i)
            
        }
        
    }
    return i
    
}
myName()

*/




function myCode(){
    let num = 100
    if(num<50){
        console.log("Ram")
    }else{
        console.log("Shyam")
    }
    return num
}
myCode()




function average(x,y){
    return (x+y)/2  
}
let a = 4 
let b = 6


console.log(" average of a and b is" , average(a,b) )