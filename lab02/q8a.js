"use strict";

function foo(arg1,arg2)
{
	
if (arg2 === undefined) 
{
    arg2 = 0;
}  

var var1 = arg1;
var var2 = arg2;

	function bar()
	{
		console.log("Sum of parameters:  " , var1 + var2);
	}
bar();
}

var int = foo(2,5);
var float = foo(4.00,6.00);
var string = foo("alpple","mango");
var boolean = foo(true, false);



//var boolean = foo("True")

// var message = "Hello world!";
// var boolean =foo( Boolean(message) , Boolean(!message));
//console.log(messageAsBoolean);
