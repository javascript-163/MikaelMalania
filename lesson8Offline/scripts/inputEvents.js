// @ts-check

function submitData() {
    let username = document.getElementById("username");
    let password = document.getElementById("password");
}

function usernameChecker() {
    /**
     * @type {Array<string>}
     */
    let colors = ['abc', "123", "asd", "vz"]


    let username = document.getElementById("username");
    if (username instanceof HTMLInputElement) {
    console.log("user entered username:", username.value)
    let res = document.getElementById("res");
    if (res && username.value.length <= 3) {
        res.innerHTML = `
        <p style="color: red">Error! username must be at least 3 chars long</p>
        `
    } else if (res && username.value.length > 3) {
        res.innerHTML = "";
    }
}}

function passwordChecker() {
    let password = document.getElementById("password");

    let passwordValue = password instanceof HTMLInputElement ? password.value: null;
    
    console.log("user entered password", passwordValue)
}