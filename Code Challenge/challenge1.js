let calcAvenger = (a, b, c) => {
   return score = (a + b + c) / 3;
}

let checkWinner = (avgDolphins, avgKoalas) => {

    if (avgDolphins > avgKoalas * 2) {
        console.log(`The winner is Dolphin(${avgDolphins} vs ${avgKoalas})`);
    } else if (avgKoalas > avgDolphins * 2) {
        console.log(`The winner is Koala(${avgDolphins} vs ${avgKoalas})`);
    } else {
        console.log(`No team win(${avgDolphins} vs ${avgKoalas})`);
    }
}

let avgDolphins = calcAvenger(44, 71, 71);
let avgKoalas = calcAvenger(44, 71, 71);

checkWinner(avgDolphins, avgKoalas);

