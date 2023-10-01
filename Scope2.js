/*const a = 5
{

    {
        const a = 6  // you can create same name variable in different room.you can not create same name variable in the same room
      console.log(a)
    }
    console.log(a)

    
}
console.log(a)

// if you make a variable globally  you can access that variable in any room


{
    {
        const d = 4
        
    
    }
    console.log(d)
    
}
// it gives error because if you have created the varible inside the small room you can not access the variable outside that room.
// if you are inside the big room you can go inside the small room.if you are inside the small room you can not access the big room.
//Basically you can not access the local varaible outside the local scope.if you have created variable globally you can access locally and globally both.

// JS ENGINE MOVES UP THE SCOPE CHAIN TO FIND A VARIABLE */




{ 
    let a = 6 //=>this is  variable shadowing
    {
       let a = 5
       console.log(a) 
    }
    
}

// it gives output 5 it shadows the value of first variable

let a = 45
{
    let a = 30  // this is variable shadowding
    {
       console.log(a)
    }
}