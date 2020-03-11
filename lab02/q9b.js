//using object literal to create object (Student)
//and populating the student properties
var Student = {
    firstName: "Rijan",
    surName: "Chapagain",
    age: 19,
    degree: "Bsc"
};

//Displaying property:value using the square bracket notation
console.log("Name: " + Student['firstName'] + " " + Student['surName']);
console.log("Age: " + Student['age']);
console.log("Degree: " + Student['degree']);
