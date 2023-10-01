// callback is a function passed  as an argument to another function

function greet(name,callback){
    console.log("Hi I am callback function")
    callback()
}


function callme(){
    console.log("I am not callback function");

}
greet('peter',callme)


// callback function  example 

const calculate = (a , b , operation) => {
    return operation(a,b);
};

const addition = calculate(3,4 , function(num1,num2){
    return num1+ num2;

});

console.log(addition);

const subtraction = (a,b) => a-b;
const subResult = calculate(8,3,subtraction);
console.log(subResult)


function multiply(a,b){
    return a*b
}
const myresult = calculate(3,5,multiply)
console.log(myresult)



const a = [10,23,45,67,-87,23]

// function myTeam(num){
//     return num < 0;
// }
// const pwd = a.find(myTeam)
// console.log(pwd)

a.forEach((num,i)=>{
    console.log("array of num " + num ,   i)

})