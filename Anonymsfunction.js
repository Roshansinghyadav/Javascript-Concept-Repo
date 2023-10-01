// normal function
function square(num) {
    const c = num * num
    return c
}
const res = console.log(square(3))

//ANONYIMYS FUNCTION

const isquare = function (num) {

    return num * num

}
console.log(isquare(4))


// Main difference between normal function and anonyms function is normal function me hoisting hoti hai and anonyms function me hoisting nahi hoti hai

// Nested function 

function sum(a,b){
    const d = a+b;

    function sub(e,f){
       const r = e*f 
       return r
    }
    console.log(sub(5,6))

    return d

}
console.log(sum(1,1))

