const jonas = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
]

console.log("--- ONLY STRINGS ---");

for(let i = 0; i < jonas.length; i++) {
    if(typeof jonas[i] !== "string") continue;
    console.log(jonas[i], typeof jonas[i]);
}

console.log("--- ONLY NUMBER ---");

for (let i = 0; i < jonas.length; i++) {
    if(typeof jonas[i] === "number") break;
    console.log(jonas[i], typeof jonas[i]);
}

