// Functions are first class citzens

// You can pass function to other functions as arguments return them from other functions as value and then store them in a variable

//HIGHER ORDER FUNCTION-> that accepts functions as parameter or return a function 


// FIRST EXAMPLE -> 

// map is a higher order function 

myArr= [1,2,3,4,54,6]

const map1 = [1,2,3,4,54,6].map(x=>x+5)
console.log(map1)



//Example 2->

 const myMap = [1,2,3,4,5,6]
 const disney = [1,2,3,4,5,6].map(res=>res*5)
 console.log(disney)

/* Is it possible that the length of the resultant arry is less than the input array

ANS == NO
   Is it possible that the length of the resultant array is greater than the input array

   Ans = no   */

// Actually map what does- it takes input an array and after performing operation on each element of the arry
 //  it returns an array of the the same length.

 // if you want to perform function on each element use map





 myTeam = [1,2,3,4,5,6]

 const myFilter = myTeam.filter(x=>x%2===0)
 console.log(myFilter)

 /*Is it possible that the length of the resultant arry is less than the input array

ANS == yes
   Is it possible that the length of the resultant array is greater than the input array

   Ans = no   
   
   filter performs operation on each element of the array it returns the value in new array only those
   for which condition is true
   
   */


   // MAP and Filter method both are immutable.map aur filter input ko ched nahi rahe hai.filter bas naya output de 
   // deta hai


   // multiple higher order functions in a function

   const aero = [1,2,3,4,5,6,7,8,9]
   .map(x=> x*2)
   .filter(x=>x%2===0)
   .map(x=>x+5)
   .filter(x=>x<10)
   console.log(aero)




   //map function returns element index and arry
   //it has three doors.
   // it can return three values
   
   const array = ['a','b','c']
   function foo(element,index,array){
      console.log(element,index,array)
   }
   const map = array.map(foo)
// if you want you can return element,index or array
