// alert('Hello, World!');

/**
 * Let's try Javascript, again!
 * Multi-line comment
 */

 // Single line comment

 //Basic assignment:
 var myVariable = '38.9587';
 console.log(myVariable + 5); //Oop, one of these is a string so plus is concatenating!


 // Type-handling:
 myVariable = parseFloat( myVariable ); // Floating point number, decimal maintained.
 console.log( myVariable ); // Is now a numeric.

 myVariable = parseInt( myVariable ); // Converted to integer, decimal removed.
 console.log( myVariable ); //38

 myVariable = Number( myVariable ); //Converted to any number type it can.
 console.log( myVariable ); // No change here.

 myVariable = myVariable + 5; // Addition. Beware "+" as it can add, or concatenate, depending on if any of the operands are strings.

 console.log( myVariable );


 myVariable = myVariable.toString(); //Convert back to a string.
 console.log( myVariable );

 /**
  * Other types?
  */

  var myArrayOfDataTypes = [
    //Booleans:  
    true,
    false,
    //Null
    null,
    // Number (float/inetger):
    34,
    168.793,
    // String
    'Hello, World!',
    // Value not definrd:
      undefined,
    // Not a Number
    NaN,
    // An array in an array!?
    [1, 2, 3, 4, 5]
  ];

  /**
   * Craeting elements for a webpage
   */

   //Create datalist.
   var myDataList = document.createElement( 'DL' ); //Won't show yet! we didn't tell it where to go.

   // Let's loop through the array so that we don't have to type each item!

   for ( var i = 0; i < myArrayOfDataTypes.length; i++) { //(ASSIGNMENT; TERMINATION CONDITION; ITERATION )
       // Create datalist title.
        var dataListTitle = document.createElement( 'DT');
        dataListTitle.textContent = typeof myArrayOfDataTypes[i]; //Output the datatype.

        // Create datalist data.
        var dataListData = document.createElement( 'DD' );
        dataListData.textContent = myArrayOfDataTypes[i];

        // Add our new elements to our datalist.
        myDataList.appendChild( dataListTitle );
        myDataList.appendChild( dataListData );
   }

   // Add ALL of that to the body! Yay! We should be able to see it now!
   document.body.appendChild( myDataList );

   