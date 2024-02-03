const numbers = [1,2,3,4,5];

const doubledNumbers = numbers.map(num => num * 2);

const doubledNumbersVers1 = numbers.map(num => {
    if (num % 2 === 0) {
        return  num * 2
    }
});
console.log(doubledNumbersVers1)

const doubledNumbersVers2 = numbers.map(function(num) {
    return num * 2
});

console.log(doubledNumbersVers2);

let result = [];
for (let number = 0; number < numbers.length; number++ ) {
    result.push(numbers[number] * 2)
}
console.log(result);
