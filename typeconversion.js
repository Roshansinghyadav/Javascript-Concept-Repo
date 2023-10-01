/*TYPE COERCION(BY FORCE) OR TYPE CONVERSION OR TYPE CASTING
IT IS ALSO TWO TYPES:- 1- IMPLICIT - JS ENGINE IS DOING IT
                       2- EXPLICIT WE (DEVELOPER) DO IT

IN TYPE CONVERSION WE WRITE THE FIRST LETTER FROM CAPITAL


*/

let a = '9'
let b = Number(a)
console.log(typeof b)



let c = 3
let d = String(c)
console.log(typeof d)

let m = -2.5
let n = String(m)
console.log(n)
console.log(typeof n)
                 
//we can change any number to string
// we can convert positive negative and decimal numbers to string

// There is some cache in typeconversion of data types
// All string can not be converted into number 

let l = "cat"
let z = Number(l)
console.log(z)
console.log(typeof z)

//there is a special keyword NaN=>Not a number

// all the strings can not be converted into meaningful number hence a  special keyword comes into picture called not a number.

// data type of NaN is also a number

//all the strings can be converted into boolean.
//Result of non empty string is always true

let p = "rat"
let v = Boolean(p)
console.log(v)
console.log(typeof v)

//Result of all the empty string in "",'',``is always false
let j = ""
let o = Boolean(j)
console.log(o)
console.log(typeof o)


// All the numbers can be converted into boolean and the result of all the numbers is true except of 0 and NaN the result of 0 and NaN is false

let x = 0
let u = Boolean(x)
console.log(u)
console.log(typeof u)

let h = Boolean(NaN)
console.log(h)

// If we convert boolean into number the result of false is 0 and the result of  true is 1

// if you create a box or variable you will pass some value to the variable
 
// in the case of undefined you create a box or variable but you doesn't put any value to the variable then js language put a default value undefined.
// aap box ko khali nahi chod sakte agar khali chodoge to js temporarly ek value put kar dega which is undefined

// in the case of null we create a box and we put the value inside the box null,hamne ek variable create kiya lekin hame pata nahi uske aandar value kya dalni hai
// jaise hum bus me seat par rumal rakh dete hai future me hum is par baithege.the concept of null is as it.

//undefined javascript engine dalta hai aur null develor dalta hai basically yahi aantar hai

























