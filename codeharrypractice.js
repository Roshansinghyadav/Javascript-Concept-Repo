 //practice question->1 
  
  let marks={
    Roshan:20,
    Rahul:30,
    subham:50,
    arya:51
}
//for(let i=0;i<Object.keys(marks).length;i++){
  // console.log("the marks of the student "+Object.keys(marks)[i]+" are "+ marks[Object.keys(marks)[i]])
//}

for( let key in marks){
    console.log("marks of the " + key+ " are" + marks[key] )
}

//Practice question->2



// let cn = 23;

// let i 

// while(i != cn){
//       i = prompt("enter a number")
// }
// console.log("You have entered a correct number")




//Question->3- Mean of 5 numbers


function mean(a,b,c,d,e){
    return (a+b+c+d+e)/5

}
const c = mean(2,3,4,5,6)
console.log(c)


const mymean = (a,b,c,d,e)=>{
    return (a+b+c+d+e)/5
    
}
console.log(mymean(4,5,6,7,8))