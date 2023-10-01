// Javascript me jitne bhi copy karne ke method hai sab shallow copy ke method hai deep copy ke method nahi hai  


// Suppose we have an array [1,2,3,4,[9,8,6]]

// in shallow copy it makes the copy of the array [1,2,3,4,[9,8,6]] and inside the array at index no four comes the 
// address of the [9,8,6]

// but in deep copy it makes the copy of the [1,2,3,4,[9,8,6]] and makes the copy of the [9,8,6] also and stores 
//the address of the [9,8,6] inside the new copy of the array at index four.

const a = [1,2,3,4]
const b = a
const c = [...a]
console.log(a===b)
console.log(c===a)

// a = b is true because the address of the both arrays are same and a = c is false because c has different array and
// address is also different.

//b.push(3)
//console.log(a)

// it is adding another element in tthe array 
 c.push(3)
 console.log(a)
 // it is not adding the element in the array c because the both array has different address


 // KOI ARRAY/oBJECT HAI USME AUR ADDRESS HAI TO US ADDRESS PAR JO ARRAY HAI USKO COPY NAHI KAR SAKTE USKA ADDRESS 
 // COPY HOTA HAI THAT'S WHY WE CALL IT SHALLOW COPY DEEP COPY KA KOI TARIKA HAI NAHI JAVASCRIPT ME

