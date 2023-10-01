//  Array are variable which can hold more than one value

let marks = [23,45,34,55,33,77,"Roshan",false]
marks[8]=20
marks[0]=1
console.log(marks)

console.log(marks[0])
console.log(marks[1])
console.log(marks[2])
console.log(marks[3])
console.log(marks[4])
console.log(marks[5])
console.log(marks[6])
console.log(marks.length)
console.log(typeof marks)


// Arrays are mutable array can be changed 
// String are immutable string can not be changed

for(let i=0;i<=marks.length;i++){
    console.log(marks,i)
}
