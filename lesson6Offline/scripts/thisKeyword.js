// console.log(this); // global context
let birthYear = 1985;
let person = {
    firstName: "George",
    lastName: "Beridze",
    birthYear: 1980,
    salary: 700,
    age: function() {
        // console.log(2024 - this.birthYear)
        // console.log(this.birthYear)
        return 2024 - this.birthYear; 
    },  
    annualSalary: function(months) {
        return this.salary * months;
    }
}
console.log(person.age())
console.log(person.annualSalary());