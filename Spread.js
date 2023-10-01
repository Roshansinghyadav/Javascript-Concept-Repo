// Spread operator makes the copy of an array

const arr1 = [1,2,3]
const arr2 = [...arr1]

console.log(arr2)


const c = [4,5,6,7]
const d = [8,9,10]
const e = [...c,...d]
console.log(e)

const s = [1,2,56,78]
const t = [0,1,2,3]
const w = s.concat(t)
console.log(w)

// we can do the same thing by using the concatenation

const obj1 = {foo:"bar",x:42};
const obj2 = {foo:"my" ,y:24};
const obj3 = {...obj1,...obj2}
console.log(obj3)



const arr6 = [9,8,7,6]
const obj = {...arr6}
console.log(obj)