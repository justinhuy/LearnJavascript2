
// function logger() {
//     console.log("My name is Huy");
// }

// logger();

// function juiceProcessor (apples, oranges) {
//     let juice = `Juice with ${apples} apples and ${oranges} oranges.`
//     return juice;
// } 

// let fruitjuice = juiceProcessor(5, 10);
// console.log(fruitjuice);


//Function declaration

 function calcAge1 (birthYear) {
     return 2021 - birthYear;
 }

 let age1 = calcAge1(1996);
 console.log(age1)

 //Function expression 

 let calAge2 = function (birthYear) {
     return 2021 - birthYear;
 }

 let age2 = calAge2(1996);
 console.log(age2);