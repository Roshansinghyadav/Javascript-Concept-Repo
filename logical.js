// Always use brackets if you are using logical operators

// The presedense of And Gate is more than than the OR Gate.Always use brackets when you are using more than one logical operator other wise your result will be false.


// OR gate me ek bhi false aaya to javascript engine SHORT CIRCUIT EVALUATION KAR DETA HAI.uske bad vo calculate nahi karta hai

// Jab hum logical && or || operator use karte hai to uska result last calculated valve hoti hai.agar aapne non boolean value suppy ki hai to uska result true or false nahi hoga,last calculated value hoti hai
 
// Boolean supply karne par true or false aata hai

 let a = 10 && 20 && 30 && 40
 console.log(a)


 let s = 10 && 20 && 0 && 90
 console.log(s)


 // Javascript ka pahle bahut hi limited use case the.bad me bahut jyada update kiya gaya hai ise.
 // pahle bahut hi small use case ke liye thi

 // Javascript is mix of both old and new features

 // FACEBOOK KI MESSANGER APP KA CODE PAHLE 17 LAKH LINES ME LIKHA THA.BAD ME EK PROJECT SURU KIYA GAYA-PROJECT LIGHTSPEED
 //JISME CODE KO KAM KARKE 3.6 LAKH KA KAR DIYA GAYA