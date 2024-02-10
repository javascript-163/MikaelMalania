document.getElementById("res").addEventListener("click", function() {
    let username = document.getElementById("username");
    let password = document.getElementById("password");
    let res = document.getElementById("res");

    res.innerHTML = `
    <p style="color: blue"> you entered: username:${username.value} and password: ${password.value}</p>
    `
})

