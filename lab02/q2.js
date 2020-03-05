	"use strict";


console.log(typeof true);
console.log(typeof 10);
console.log(typeof "Rijan");
console.log(typeof 10n);
console.log(typeof Symbol("id"));
// console.log(typeof Math);
// console.log(typeof alert);


typeof undefined // "undefined"

typeof 0 // "number"

typeof 10n // "bigint"

typeof true // "boolean"

typeof "foo" // "string"

typeof Symbol("id") // "symbol"

typeof Math // "object"  (1)

typeof null // "object"  (2)

typeof alert // "function"  (3)
