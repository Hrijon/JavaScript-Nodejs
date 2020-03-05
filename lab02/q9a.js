"use strict";
//using Object constructor to create Object 
var Student = new Object();

//calling the properties of Student using dot notation
//and populating properties
Student.firstName = "Rijan";
Student.surName = "Chapagain";
Student.age = "19";
Student.degree = "Bsc";

//Displaying property:value using the dot notation
console.log("First and surname: " + Student.firstName + " " + Student.surName);
console.log("Age: " + Student.age);
console.log("Degree: " + Student.degree)

