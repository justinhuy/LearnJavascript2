// Method 1

// let markMiller = {
//     fullName : "Mark Miller",
//     mass : 78,
//     height: 1.69
// }

// let johnSmith = {
//     fullName : "John Smith",
//     mass : 78,
//     height: 1.69
// }

// markBmi = bmi(markMiller.mass, markMiller.height);
// johnBmi = bmi(johnSmith.mass, johnSmith.height);


// function bmi(mass, height) {
//     let BMI = mass / (height * height);
//     return BMI;
// }

// if (markBmi > johnBmi) {
//     console.log(`Mark's BMI ${markBmi} is higher than John's ${johnBmi}`);
// } else if (johnBmi > markBmi) {
//     console.log(`John's BMI ${johnBmi} is higher than Mark's ${markBmi}`);
// } else {
//     console.log("Equal");
// }

//Method 2

let mark= {
    fullName : "Mark Miller",
    mass : 78,
    height: 1.69,
    calcBMI : function() {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
}

let john = {
    fullName : "John Smith",
    mass : 78,
    height: 1.69,
    calcBMI : function() {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
}

mark.calcBMI;
john.calcBMI;

if (mark.calcBMI > john.calcBMI) {
    console.log(`${mark.fullName}'s BMI ${markBmi} is higher than John's ${johnBmi}`);
} else if (john.calcBMI > mark.calcBMI) {
    console.log(`${john.fullName}'s BMI ${johnBmi} is higher than Mark's ${markBmi}`);
} else {
    console.log("Equal");
}