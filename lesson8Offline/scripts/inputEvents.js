function submitData() {
    let username = document.getElementById("username");
    let password = document.getElementById("password");
}

function usernameChecker() {
    let username = document.getElementById("username");
    console.log("user entered username:", username.value)
    let res = document.getElementById("res");
    if (username.value.length <= 3) {
        res.innerHTML = `
        <p style="color: red">Error! username must be at least 3 chars long</p>
        `
    } else if (username.value.length > 3) {
        res.innerHTML = "";
    }
}

function passwordChecker() {
    let password = document.getElementById("password");
    console.log("user entered password", password.value)
}