// SCOPE MEANS VISIBILITY OF A VARIABLE
{
    let a = 2
    console.log(a)

}
//We have created a box inside the inside the room
//basically we limited the scpe of variable
// we can not access the variable outside that room 
// if we write like this
 {
      console.log(d)
       let d = 45
   }
//it gives error you can not access before initialization
let t = 6
{

    m = 3
    console.log(m)
}
console.log(t)

//console.log variable ke aandar ki value lakar deta hai

// We can not access any variable before creating it.

//** TEMPORAL DEAD ZONE -:WHEN WE ACCESS ANY VARIABLE IN ANY ROOM(SCOPE) WITHOUT CREATING THE VARIABLE THIS IS KNOWN AS TEMPORAL DEAD ZONE.

//variable to create hoga lekin future me.temporarly dead hai permanentaly nahi.

//var doesn't follow the concept of scope.the concept of scope exist only in let and const.

// THE CONCEPT OF SCOPE DOESN'T EXIST IN VAR,IT EXIST IN ONLY LET AND CONST

// var is globally available.we don't use global variable because it is available everywhere someone can change,steal and modify its data.there is no lock on global variable.


{
    var n = 7
}
console.log(n) //there is no error it is ok because var is globally available



// Concept of scope chain-: you are allowed to come into the big room from small room and you are not allowed to go into small room from bigroom.


