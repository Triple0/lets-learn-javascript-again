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

     console.log( myFunctionScopeVariable ); // We can see it in the function :D

     function myNestedFunction () { // (Yes.)
         var myNestedFunctionVariable = 'I\'m very nested!';
         console.log( myNestedFunctionVariable ); // Local access works!

         console.log( 'Accessing function scope variable in nested function: '+ myFunctionScopeVariable ); //We can access variables from a PARENT function. But not the revesrse.
     }
     myNestedFunction();

     console.log( myVariable ); //Global variables / functions are accessible even all the way in here! NICE!

     //console.log( myNestedFunctionVariable ); // The variable is scoped to its origin function, not here...
 }

 myFunction();
 //console.log( myFunctionScopeVariable ); // Can we access it outside of the function!?

 //myNestedFunction(); // Can we run the nested function!? Nope! It is not available globallly if it was defined in a localised scope! 
