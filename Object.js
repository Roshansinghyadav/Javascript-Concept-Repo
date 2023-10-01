//an object is a fundamental data type that represents a collection of key-value pairs. It is a container for properties, where each property consists of a key (also known as a property name) and a corresponding value. Objects in JavaScript can be created using object literals, constructor functions, or the built-in Object constructor.

// There are some rules for creating objects.these rules are related to keys .

// Values can be anything but there is rules for keys

/*Rules for keys-: 
                    1- can't be numbers
                    2- can't have spaces
                    3- can't start from numbers
                    4- can be repeated */

                    const myCode = {
                        1: 20
                    }
                    const keys = Object.keys(myCode)
                    console.log(typeof keys[0])//js engine  is doing implicit conversion of key 1 into string

// you can not give spaces between keys-like- my key - you will have to write in double quote " my name"

// we can not store duplicate keys in object because first vali key ignore ho jati hai.
// keys can be repeated lekin latest key ko hi entry milegi baki sab automatically delete ho jayegi.

const person = {
    name: "Aakash",
    school: "Delhi pubic schools",
    address: "Meduadeeh narayanpur kalan raniganj pratapgarh",
    age: 20

}
person.name= "Rahul"

console.log(person.name)
console.log(person.age)
console.log(Object.keys(person))
console.log(Object.values(person))



const car = {
    brand: "Toyota",
    model: "Camry",
    start: function() {
      console.log("The car has started.");
    }
  };
  
  car.start(); // Output: The car has started.


  // Immutable-means can't be changed 
  // Mutable-means can be changed 

  // Q:- Objects are mutable are immutable in js ?
  // Const is immutable we are saying but in object we are changing the value why it is-
  const school = {
    name:"Rahul"
  }

  school.name = "Ritik"
  console.log(school.name)

// but here const is mutable 

// const kya karta hai ki- aap value ko bahar throw nahi kar sakte
 //                      - aap value ko insert nahi kar sakte


 // I can't throw the document.
 // I can't insert the document.I can edit the document.
 // Const puri tarah se immutable nahi hai

 // Const is mutable in the case of non primitive data types



 const arr = [23,34,5]
 arr[0] = 12
 console.log(arr)

 // we can not add new elements to the array.we can only edit the array.in the case of non primitive data type editing is allowed
 // we can not add or delete the data.

 // if you want to make const immutable we have a property freez

 const Roshan ={
  name:"Brother"

 }
 Object.freeze(Roshan)
 Roshan.name = "Darshan"
 console.log(Roshan)

 // object ko true sense me immutable banana hai to object.freeze ka use karna padega.freeze se hum editing ko freeze kar dete hai

 // For knowledge-: we store our aadhar in object because if we store our data in array it is not safe and time consuming.
 // by index number someone can access the personal information

 // we store our aadhar information in object because if we know the aadhar as a key we can directly access the information
 // we store aadhar no as a key and aadhar details as values.
 // we store our aadhar details in object

 let alien = {
  name:"Navin",
  tech:"js",
  laptop:{
    cpu:'i7',
    ram:4,
    brand:'asus'
  }
 }
 console.log(alien)
 console.log(alien.laptop.brand.length)



 let myalien = {
  name:"Navin",
  tech:"js",
  laptop:{
    cpu:'i7',
    ram:4,
    brand1:'Asus'
  }
 }
 
 console.log(myalien.laptop?.brand1?.length)
 // if you write the ? after the key.if that key is not available it gives result undefined.otherwise it will  give the error.

 // ? checks if that property is not available it give undefined if it is present it gives result.

 // Delete property in object

 

 let myDada = {
  name:"Navin",
  tech:"js",
  laptop:{
    cpu:'i7',
    ram:4,
    brand1:'Asus'
  }
 }
 delete myDada.laptop
 console.log(myDada)