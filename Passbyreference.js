const a = [1,2]
//Box got created
//the box was locked
// The name of the box is a
// Content of the box is the RAM/MEMORY address of the array.


const d = [1,2,3,4]
const s = d
console.log(d)
console.log(s)
console.log(d===s)

// In pass by reference it passes the address the variable and it is true for non primitive data types only array object
// and function


console.log(2 === 2)
console.log("Hi" === "Hi")
console.log([]=== [])

// In the case of primitive data type it compares the value and in the case of non primitive data types it compares 
// the MEMORY/RAM address



const p = [1,2,3,5]
const q = p
q.push(3)
console.log(p)
console.log(q)
// this is the best example of pass by reference


// the main difference is in the case of primitive the value passes and in the case of non primitive the reference 
//passes