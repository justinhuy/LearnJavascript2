let markMiller = {
    fullName : "Mark Miller",
    mass : 78,
    height: 1.69
}

let johnSmith = {
    fullName : "John Smith",
    mass : 92,
    height: 1.95
}


function bmi(mass, height) {
    let BMI = mass / (height * height);
    return BMI
}

if (bmi(markMiller.mass, markMiller.height) > bmi(johnSmith.mass, johnSmith.height)) {

}