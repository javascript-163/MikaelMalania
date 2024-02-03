const userSalaries = [1500, 5000, 5700, 7000, 3400, 2000, 1000, 500, 50];

const sum = userSalaries.reduce(function(accumulator, currentNumber) {
    console.log(accumulator, currentNumber);
    return accumulator + currentNumber;
}, 0) // 0 ამ შემთხვევაში საწყისი მნიშვნელობაა "accumulator"-თვის.

// let result = []
// for (let item of userSalaries) {
//     result.push(item * 3)
// }

// userSalaries.forEach(number=> {
//     result.push(number * 3)
// })