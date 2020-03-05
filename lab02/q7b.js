"use strict";

var foo = function()
{
	console.log("Anonymous function delay 2 sec")
}
foo();
setTimeout(function () 
{
	console.log("Second argument delay of 2 second")

}, 2000);




