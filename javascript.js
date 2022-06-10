let input = require('readline-sync');

const currency = {
    USD: 1,
    JPY: 113.5,
    EUR: 0.89,
    UAH: 29.47,
    GBP: 0.75
}

console.log('Welcome to Currency Converter!');
for (let key in currency){
    console.log(`1 USD equals  ${currency[key]} ${key}`);
}

while(true){
    console.log('What do you want to do?');
    console.log('1-Convert currencies 2-Exit program');
    let answer = input.question();
    if (Number(answer) === 1){
        while(true){
            console.log(`What do you want to convert?`);
            let fromCurr = input.question('From: ').toUpperCase();
            if (!searchFor(fromCurr, currency)) {
                console.log('Unknown currency');
                continue;
            } else {
                let toCurr = input.question('To: ').toUpperCase();
                if (!searchFor(toCurr, currency)) {
                    console.log('Unknown currency');
                    continue;
                } else {
                    let amount = Number(input.question('Amount: '));
                    if (isNaN(amount)) {
                        console.log('The amount has to be a number');
                    } else if (amount < 1) {
                        console.log('The amount can not be less than 1');
                    } else {
                        let result = ((amount / currency[fromCurr]) * currency[toCurr]).toFixed(4);
                        console.log(`Result: ${amount} ${fromCurr} equals ${result} ${toCurr}`);
                        break;
                    }
                }
            }
        }
    } else if(Number(answer) === 2){
        console.log('Have a nice day!');
        break;
    } else {
        console.log('Unknown input');
        continue;
    }
}

function searchFor (value, arr){
    for (let i in arr){
        if (i === value)
            return true;
    }
    return false;
}

