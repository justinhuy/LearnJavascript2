
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

//  function calcAge1 (birthYear) {
//      return 2021 - birthYear;
//  }

//  let age1 = calcAge1(1996);
//  console.log(age1)

//  //Function expression 

//  let calAge2 = function (birthYear) {
//      return 2021 - birthYear;
//  }

//  let age2 = calAge2(1996);
//  console.log(age2);


// function cutFruitPieces (fruit) {
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//     let applePieces = cutFruitPieces(apples);
//     let orangePieces = cutFruitPieces(oranges);
//     let juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
//     return juice;
// }

// console.log(fruitProcessor(2, 3));



const calcAge = function (birthYear) {
    return 2022 - birthYear;
}

const yearsUntilRetirement = function (name, birthYear) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${name} retires in ${retirement} years.`)
    } else {
        console.log(`${name} has already retired.`)
    }
}

console.log(yearsUntilRetirement("Huy",1996))
