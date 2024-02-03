function multiplyBy(factor) {
    factor = factor * factor;

    return function (number) {
        console.log(number, "step 2");
        return number * factor;
    }
};

// console.log(multiplyBy(3), "result 1");
const multiplyData = multiplyBy(3);
console.log(multiplyData(6), "result 2"); 