// localStorage.setItem("sampleData", "sampleValue");

function addData() {
    let userDataKey = document.getElementById("userDataKey").value;
    let userDataValue = document.getElementById("userDataValue").value;

    localStorage.setItem(userDataKey, userDataValue);
}

function registerUser() {
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let age = document.getElementById("age").value;

    let userData = {
        firstName, lastName, age
    }

    localStorage.setItem("registeredUser", JSON.stringify(userData));
}

function loadData() {
    let infoGetter = document.getElementById("infoGetter").value;

    let result = document.getElementById("result");

    let dataFromLocalStorage = localStorage.getItem(infoGetter);

    result.innerHTML = JSON.parse(dataFromLocalStorage).firstName;
}

function deleteInfo() {
    let deleteThis = document.getElementById("infoDeleter").value;

    localStorage.removeItem(deleteThis);


    localStorage.clear();
}

