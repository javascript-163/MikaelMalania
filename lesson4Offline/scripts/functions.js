function calculator(number1, number2, action="+") {
    if (action === "+") {
        return number1 + number2;
    } else if (action === "-") {
        return number1 - number2;
    } else if (action === "*") {
        return number1 * number2;
    } else if (action === "/") {
        return number1 / number2
    };
}
let result = calculator(4, "+");

let calculator1 = (number1, number2, action) => {
    if (action === "+") {
        return number1 + number2;
    } else if (action === "-") {
        return number1 - number2;
    } else if (action === "*") {
        return number1 * number2;
    } else if (action === "/") {
        return number1 / number2
    };   
};

let calculator2 = function(number1, number2, action) {
    if (action === "+") {
        return number1 + number2;
    } else if (action === "-") {
        return number1 - number2;
    } else if (action === "*") {
        return number1 * number2;
    } else if (action === "/") {
        return number1 / number2
    };   
}

