let firstName = undefined;

try {
    "mike".toUpperCase()
} catch(error) {
    if (error instanceof TypeError) {
        console.log("You have made an TypeError", error.message);
    } else if (error instanceof SyntaxError) {
        console.log("You have made an SyntaxError", error.message);
    }
} finally {
    console.log("Code execution finished");
}

console.log("Some other process here")
// throw new Error("User provided invalid data!");