// We have a special keyword for deep copy  in js we can not copy ramdomly

 // JSON.parse(JSON.stringify())

 const a  = [1,2,[3,4]]

 const c = JSON.parse(JSON.stringify(a))

 c[2].push(10)

 console.log(c)
 console.log(a)

// Basically our data array and object are like loose sheet. we have an array in our computer we want to send this array 
// to another computer but we can't send because they are loose.
// badhne ka process hi stringify kahlata hai.data pahuchne ke bad hum usko khol lete hai.
// "hi I am Roshan singh yadav i am from pratapgarh uttar pradesh" it takes whole string as one unit

// JSON.stringify badhta hai data ko and JSON.parse data ko unwrap kar deta hai.

const d = [2,3]
d.push(5)
d[1] = 100
console.log(d)


const t = [11,112,13]
w = t
console.log(w)




// if we create a variable using const-
 //                                   - const is mutable -if data type is non primitive
 //                                   - const is immutable - if data type is primitive


 const u = [1,2]
 Object.freeze(u)
 u[1] = 100
 console.log(u)

 // if we wanted to make the const immutable for non primitive data type we use freeze.const is mutable or immutable 
 // depend upon the data type
 // because the address of the array or object stored in the varible that's why const is mutable for non primitive data
 // array to store hota nahi hai isliye lock nahi hota hai