let randomString = "Digital edu";
// console.log(randomString.charAt(4)); 
// console.log(randomString.at(4));
// console.log(randomString[4]);

// console.log(randomString.length);

// console.log(randomString.slice(0,8));

// console.log(randomString.substr(2, 5));

// console.log(randomString.toLowerCase());

// console.log(randomString.concat("+", "cation"));

// console.log(randomString.startsWith("D"));

// console.log(randomString.endsWith("D"));

// console.log(randomString.replace("D", "B"));

// console.log(randomString.replaceAll("i", "l"));

let children = "Gaga, Gia, Tamari, Nutsa, Nini, Nika";

let childrenArray = children.split(", ");
// console.log(childrenArray.join("-"));

// console.log(childrenArray.includes("Gaga"));

// console.log(children.indexOf("N"));

let clonedChildren = Array.from(childrenArray);
clonedChildren.pop();
console.log(childrenArray);

let person = {
    name: "George"
};

console.log(typeof childrenArray, typeof person, Array.isArray(childrenArray));