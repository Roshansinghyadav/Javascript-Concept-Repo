// Find and findIndex is also a higher order function. it checks the condition of the function if it founds the condition
//true it stops searching and returns the value.it returns only one value finds the condition true stops searching.

const arr3 = [23,4,5,56,89,98]
const arr2 = arr3.find(num=>num>10)
console.log(arr2)


const arr4 = [90,89,87,86,85]
const arr5 = arr4.find(number=>number>10)
console.log(arr5)



// findIndex work same as the find but it returns the index of the array

const myArr = [1,2,3,4,5,6,7,8,9]
const myArr1 = myArr.findIndex(num=>num>5)
console.log(myArr1)

// if it does not find the index it returns the undefined example is as following
const myArra = [1,2,3,4,5,6,7,8,9]
const myArra1 = myArr.findIndex(num=>num>9)
console.log(myArra1)

// output is -1
//find Index me I capital rahta hai small likhne par output nahi deta hai


