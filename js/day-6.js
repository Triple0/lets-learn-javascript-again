/**
 * Day 6!
 */

/**
* Let's see How Scope Works.
*/

var myVariable = 3; // Declared in GLOBAL scope

function myFunction() {
    console.log(myVariable); //Can we myVariable in the function!?  Yes! We can see GLOBALLY scoped variables inside of a function!

    var myFunctionScopeVariable = 64; // Declared in a local (function) scope.

    console.log(myFunctionScopeVariable); // We can see it in the function :D

    function myNestedFunction() { // (Yes.)
        var myNestedFunctionVariable = 'I\'m very nested!';
        console.log(myNestedFunctionVariable); // Local access works!

        console.log('Accessing function scope variable in nested function: ' + myFunctionScopeVariable); //We can access variables from a PARENT function. But not the revesrse.

        // Eeven more nesting!?
        function myDoubleNestedFunction() {
            var doubleNestedVar = 'Double nested var, here!';

            console.log(doubleNestedVar); //We can access locally, right?

            //myNestedFunction();// Can I run this here! Yup! It was declared in /by a parent so we are good to go! Calling a funcr=tion inside of itself causes recursion --> Unless you have a termination condition this causes endless looping. (My browser is crashing.)
        }
        myDoubleNestedFunction(); // This works, same scope that the functio was defined!
    }

    //myDoubleNestedFunction (); // Can't reach this function 

    myNestedFunction();

    console.log(myVariable); //Global variables / functions are accessible even all the way in here! NICE!

    //console.log( myNestedFunctionVariable ); // The variable is scoped to its origin function, not here...
}

myFunction();
//console.log( myFunctionScopeVariable ); // Can we access it outside of the function!?

//myNestedFunction(); // Can we run the nested function!? Nope! It is not available globallly if it was defined in a localised scope! 


/**
 * Functions returning functions
 */

function addNums(x, y) { // Addition.
    return (Number(x) + Number(y)); //Using Number() function to make sure we don't end up concatenating! //Sum
}

function subtractNums(x, y) { // Subtraction
    return (x - y); // Difference
}

function multiplyNums(x, y) { //Multiplication
    return (x * y); // Product
}

function divideNums(x, y) { // Division
    return (x / y); //Quotient
}

// Function 1:
// function myMath(operation, x, y) {
//     switch (operation) {
//         case "add":
//             return addNums( x, y ); // "Return" kills the function, so breaks are optional here.
//         case "subtract":
//             return subtractNums( x, y );
//         case "multiply":
//             return MultiplyNums( x, y );
//         case "divide":
//             return divideNums( x, y );
//         default:
//             return 'Invalid operation.';
//     }

// }

// Function 2: Below code to return function which is call using myMath('add')(3, 4);
function myMath(operation) {
    switch (operation) {
        case "add":
            return addNums; // "Return" kills the function, so breaks are optional here.
        case "subtract":
            return subtractNums;
        case "multiply":
            return multiplyNums;
        case "divide":
            return divideNums;
        default:
            return 'Invalid operation.';
    }

}
// Caliing function 1:
//console.log( myMath( 'add', 64, 6 ) );
// Calling function 2:
//console.log( myMath( 'add' )( 64, 6 ) );

var result = myMath( 'divide' )( 9, 3); // result = 3
console.log( result );
var newResult = myMath( 'multiply' )( 2, result); // result = 3
console.log( newResult );

function newTestfunction ( myString ) {
    myString = 'Entered string is: '+ myString;
    return function ( additionalString ){
        if ( additionalString != undefined ) {
            myString += ', '+additionalString;
        }
        return function ( yetAnotherString ) {
            if ( yetAnotherString != undefined ) {
                myString += ', '+ yetAnotherString + '!!!';
            }
            return myString;
        };
    }
}

console.log(newTestfunction( 'A B C D E F G')('H I J K L M N O P')('Q R S T U V W X Y Z' ) );