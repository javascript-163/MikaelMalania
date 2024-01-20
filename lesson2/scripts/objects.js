let person = {
    name: "Qeti",
    surname: "Mebonia"
};

let children = ["nino", "nika", "sofo", 1121, 123.45, null, undefined, 'cotne'];

// let child = prompt("Enter child name");

// children.push(child);

children.pop();

children.pop();

children.pop();


person.age = 30;
person["isMarried"] = false;
delete person.surname;

console.log(person);