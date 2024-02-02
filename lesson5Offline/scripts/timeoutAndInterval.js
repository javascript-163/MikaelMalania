function greetUsers() {
    console.log("Greetings to all of you ppl!")
}

// console.log("Start of the program");
const myTimeout = setTimeout(greetUsers, 5000);
let index =0;
const interval1 = setInterval(function() {
    console.log("Hey some delayed message here!")
    index = index + 1;
    if (index === 5) {
        clearInterval(interval1);
    }
}, 2000);



