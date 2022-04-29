 let yearsUntilRetirement = (birthYears, firstName) => {
     let age = 2022 - birthYears;
     let retirement = 65 - age;
    //  return retirement;
    return `${firstName} retires in ${retirement} years`;
 }

 console.log(yearsUntilRetirement(1996, "Huy"));