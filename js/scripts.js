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
myVariable = parseFloat(myVariable); // Floating point number, decimal maintained.
console.log(myVariable); // Is now a numeric.

myVariable = parseInt(myVariable); // Converted to integer, decimal removed.
console.log(myVariable); //38

myVariable = Number(myVariable); //Converted to any number type it can.
console.log(myVariable); // No change here.

myVariable = myVariable + 5; // Addition. Beware "+" as it can add, or concatenate, depending on if any of the operands are strings.

console.log(myVariable);


myVariable = myVariable.toString(); //Convert back to a string.
console.log(myVariable);

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
var myDataList = document.createElement('DL'); //Won't show yet! we didn't tell it where to go.

// Let's loop through the array so that we don't have to type each item!

for (var i = 0; i < myArrayOfDataTypes.length; i++) { //(ASSIGNMENT; TERMINATION CONDITION; ITERATION )
    // Create datalist title.
    var dataListTitle = document.createElement('DT');
    dataListTitle.textContent = typeof myArrayOfDataTypes[i]; //Output the datatype.

    // Create datalist data.
    var dataListData = document.createElement('DD');
    dataListData.textContent = myArrayOfDataTypes[i];

    // Add our new elements to our datalist.
    myDataList.appendChild(dataListTitle);
    myDataList.appendChild(dataListData);


}
var myHeadingText = 'View below the data types from our arrays ';
// This is adding HTML to our body dynamically
document.body.innerHTML += `<!-- Back ticks are used in JS for multi-line strings. -->
        <h2>
            Our Data-Type Test: `+ myHeadingText /* Concatenating strings!*/ + `
        </h2>`;

// Add ALL of our DATALIST to the body! Yay! We should be able to see it now!
document.body.appendChild(myDataList);


/**
 * Collecting elements. Items can be collected using IDs, Classes or Names using querySelector() or getElementByID/Tag/Class
 */

var myHeading = document.getElementById('my-heading');
myHeading.title = 'This is a heading.'; //Tooltip attribute.
//myHeading.style.color = 'darkgray'; // PLEASE avoid using inline styles.. This is the CSS file's job!!!

//Better Idea will be:
myHeading.className = 'gray-text'; //Use classes instead


/**
 * Events
 */

// We can add event-listeners to a targeted element.
myHeading.addEventListener('mouseover' /* Here we say which event we are targeting.*/, function (event /* We can capture info about the eventthe event */) {
    this.className = 'salmon-text'; /* In an event, the "this" keyword represents our element (myHeading). */
});

// When you stop hovering...
myHeading.addEventListener('mouseleave', function (event) {
    this.className = 'indian-red-text';
});

// When you click...
myHeading.addEventListener('click', function (event) {
    var bigClass = 'big-text';
    if (!this.className.includes(bigClass)) {
        // Exclamation means NOT. So it fires on the OPPOSITE
        this.className += ' big-text'; // Concatenating a new class!
        // Remember , you must have a space between classes when assigning multiple.
    }
});

// Function keyword, followed by the function name (and paramenters if any are needed.)
function addTwoNumbers(x, y) {
    x = Number(x); //Enforce data-type (number).
    y = Number(y); //Enforce data-type (number).
    return (x + y); //Add the two together.
}

function currentDayString() {
    // New date object.
    var date = new Date();
    // Declare a string we can store data info in.
    var dateString = '';
    dateString += date.getFullYear(); // Full four digit year.
    dateString += '.'; // (Period for formatting.)
    dateString += date.getMonth() + 1; // Month of the year.
    dateString += '.'; // (Period for formatting.)
    dateString += date.getDay() + 1; // Day of the week.
    return dateString; // (Period for formatting.)
}

//Output to console.
console.log('The current date is: \r\n' + currentDayString());


/**
 * Let's review some conditions-related operators..
 */

// Check for equivalency (type-agnostic.)
console.log(1 == true); //True
console.log('Hello, World' == true); //False
console.log(-137 == true); //False
console.log('test' == 'test'); //True
console.log(36 == '36'); //True
console.log(0 == false); //True
console.log(`test string` == "test string"); //True

//Check if identical (value comparison including type.)
console.log(1 === true); //False
console.log('' === true); //False
console.log(-137 === true); //False
console.log('test' === 'test'); //True
console.log(36 === '36'); //False
console.log(0 === false); //False
console.log(`test string` === "test string") //True


/**
 * Hamburger Menu
 */

// Let's grab our menu...
var myNav = document.querySelector('nav');

// And our menu button...
var myNavButton = document.querySelector('.menu-button');

myNavButton.addEventListener('click', function (event) {
    // When clicked, add/remove the "nav-open" class (in HTML.)
    myNav.classList.toggle('nav-open');
});

/**
 * Let's dig into objects!
 */
/* JavaScript Object Notation (JSON) */
var myObject = { /* Valid JSON format */
    name: 'Jerry',
    age: 61,
    hobbies: [
        'snowboarding',
        'action movies'
    ]
};

// Red whole object.
console.log(myObject);

// Extracting property values
console.log('Object "name": ' + myObject.name);
console.log('Object "age": ' + myObject.age);
console.log('Object "hobbies": ' + myObject.hobbies[0] + ', ' + myObject.hobbies[1]);

// Lets add to the hobbies array... just like normal! It is an array, afterall. 

//Just stored in an object property instead of a variale this time.)
myObject.hobbies.push( 'programming' );
console.log( 'Updated hobbies:' );
console.log( myObject.hobbies );

/**
 * Let's ramp things up a bit with a method.
 */

var newObject = {
    myNum:     5, // property
    updateNum: function () {// Here is a metod! note the new syntax, versus a function.
        // Difference from a function?
        this.myNum = this.myNum + 5;
        return this.myNum;
    }
};


/**
 * Object constructors.
 */

 function Person ( name, age, hobbies ){
     this.name     = name;
     this.age      = age;
     this.hobbies  = hobbies;
     this.sayGoodbye = function (){ // Setting up a method in a constructor function.
         document.body.innerHTML += `
            <p>
                This is 
                <strong>` + this.name + `</strong>, saying <em>goodbye</em>!
            </p>`

     };

 }

// Let's make a new instance of "Person". This is called an object.
 var jerry = new Person( 'Jerry', 61, ['snowboarding', 'action movies', 'programing']);
 
 //And another! Isn't this easier than typing out a whole object every time?
 var sally = new Person( 
     'Sally', // name
     36, //age
     [//hobbies:
      'daredevil biking', 
      'skydiving', 
      'teaching'
    ] 
);

// We can add to the blueprint using "prototype", even after its initial declaration.
Person.prototype.introduction = function () {
    var hobbiesString = ''; // Set up for list HTML.
    this.hobbies.forEach( function ( value, index) {
        hobbiesString += '<li>' + value + '</li>';// Loop through our hobbies and make a list item for each.
    } );

hobbiesString += '</ul>'; // We opened a UL in this string, so lets close it! (Concatenation!)

// Add HTML to the body.
    document.body.innerHTML += `
    <h2>`+ this.name+ `</h2>
    <dl><!-- My name is: ` + this.name + ` --> 
        <dt>Age</dt>
        <dd>`+ this.age + `</dd>
        <dt>Hobbies</dt>
        <dd>` +hobbiesString  /* We built the string above, using this.hibbies! "hobbiesString" is a local variable (born in the method, and it will die in the method.) */+ `</dd>
    </dl>`;  

}

// Extra prototype practice: a property.
Person.prototype.nickname = '';//Updating a bluepront outside the blueprint

jerry.nickname = 'The Big Jare';
sally.nickname = 'Sallers';
