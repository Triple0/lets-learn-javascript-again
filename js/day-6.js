/**
 * Day 6!
 */

 /**
 * Let's see How Scope Works.
 */

 var myVariable = 3; // Declared in GLOBAL scope

 function myFunction () {
     console.log( myVariable ); //Can we myVariable in the function!?  Yes! We can see GLOBALLY scoped variables inside of a function!

     var myFunctionScopeVariable = 64; // Declared in a local (function) scope.
 }

 myFunction();
 console.log( myFunctionScopeVariable ); // Can we access it outside of the function!?
