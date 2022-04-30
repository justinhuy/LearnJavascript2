let bills = [];
let tips = [];
let total = [];



function calcTip(bill) {
    let tip = (50 < bill < 300) ? bill * 0.15 : bill * 0.2;
    bills.push(bill);
    tips.push(tip);
    total.push(tip + bill);
    return tip;
}