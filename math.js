function calculate(number) {
    let dollarDivisible = [];
    let changeDivisible = [];
    let num = (number + "").split(".");
    let dollars = num[0];
    let cents = num[1];
    let dollarArr = [20, 10, 5, 1];
    let changeArr = [25, 10, 5, 1];

    for (let i = 0; i < dollarArr.length; i++) {
        if (dollars >= dollarArr[i]) {
            dollarDivisible.push(Math.floor(dollars / dollarArr[i]))
            console.log(`$${dollarArr[i]}s - Quantity: ${dollarDivisible.slice(-1)}`)
            dollars = (dollars % dollarArr[i])
        }
    }

    for (let i = 0; i < changeArr.length; i++) {
        if (cents >= changeArr[i]) {
            changeDivisible.push(Math.floor(cents / changeArr[i]))
            console.log(`$.${changeArr[i]}s - Quantity: ${changeDivisible.slice(-1)}`)
            cents = (cents % changeArr[i])
        }

    }
}

console.log(calculate(12.34))