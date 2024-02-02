let children = ["George", "Lia", "Anna", "Demetre"];
// console.log(children[0])

// მასივში ახალი მონაცემის ჩამატება ბოლო ინდექსზე
children.push()

// to delete past element from array
// children.pop()

let childrenFromSecond = children.slice(1, 3);
// console.log(childrenFromSecond)

let splicedData = children.splice(2, 2);

let fruits = ["apple", "bannana", "grape", "cheery"];

fruits.splice(2,0, "Lemon", "plump", "kiwi");

// ------------- Objects ------------------------
let person  = {
    firstName: "Nick",
    lastName: "jiqia",
    children: ["Qeti", "Tako", "Demetre"]
};

let students = [
    {
        firstName: "George",
        lastName: "lomidze",
        jobs: [
            {
                name: "product owner",
                company: "Abc"
            },
            {
                name: "product manager",
                company: "Def"
            }
        ]
    },
    {
        firstName: "Givi",
        lastName: "bagishvili",
        jobs: [
            {
                name: "product owner",
                company: "Kli"
            },
            {
                name: "product manager",
                company: "Mno"
            }
        ]
    }
]

console.log(students[0].jobs[0].name);