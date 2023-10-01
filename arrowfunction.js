//Arrow function is just a syntax

// Normal function is also stored in a variable.we write the name of the function for storing the function


// Arrow function is also stored in avariable 

// in arrow function body ek line ki hai to hame return ki bhi jarurat nahi hoti hai

// agar body ek line ki hai to you can skip the curly bracket and and return keyword

// No need of function keyword in arrow function

//if our function is one line then we do not need to write the return keyword js engine automatically laga deta hai

// main difference between normal function and arrow function is normal function me jitne door hum create karte hai 
//uske alava ek hidden door hota hai. lekin arrow function me nahi hota hai.

// arrow function ko padhne me bhi thoda dikkat hoti hai

// Arrow function ES6 me naya feature add hua hai

const add = (a,b) => (a+b)
add(2,3)


const hello = (p,q) =>{
    return p+q
}
console.log(hello(1,1))


const mello = ()=>{
    console.log("I am fine ")

    return "Hi"

}
  let v = mello()
  console.log(v)

// This is normal function

  function lhello(num){
    for( let i=0;i<=num;i++){
        console.log("hello guys " + i)
    }
  }
  lhello(23)


  // This is arrow function

  const myCode = (num) =>{
    for(let i=0;i<num;i++){
        console.log("hello javascript " + i)
    }
  }
  myCode(5)