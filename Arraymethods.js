// array methods 


// 1- toString-: Converts an array to string of comm repeated value

let arr1 = [1,23,4,5,6]
let b = arr1.toString()
console.log(b)


// join -: join all the arry elements using a seperator
let c = arr1.join("_")
console.log(c,typeof(c))

//pop-: removes the last element of the array 
// pop returns the popped element 

arr1.pop()
console.log(arr1)
let r = arr1.pop()
console.log(r)
console.log(arr1)
// pop() updates the original array and returns the popped value



// push() add a new element to the end of the array and returns the new length array



//shift() removes the first element of the array and return it


// unshift() add a new element to the beginning of the array and returns new arry length