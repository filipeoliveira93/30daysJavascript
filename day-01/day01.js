// Create a variable.js file and declare variables and assign string, boolean, undefined and null data types
// Create datatypes.js file and use the JavaScript typeof operator to check different data types. Check the data type of each variable
// Create a variable.js file and declare variables and assign string, boolean, undefined and null data types
// Create datatypes.js file and use the JavaScript typeof operator to check different data types. Check the data type of each variable

// Declare four variables with assigned values
let strings = 'lorens ipsuns'
let boolean = true
const undefinedVar = undefined;
let nll = null
let number = 245

console.log(`strings = ${strings} type: ${typeof strings}`);
console.log(`boolean = ${boolean} type: ${typeof boolean}`);
console.log(`undefinedVar = ${undefinedVar} type ${typeof undefinedVar}`);
console.log(`nll = ${null} = type ${typeof nll}`);
console.log(`number = ${typeof number}`);


// Declare four variables without assigning values
let one, two, three, four;
console.log(`variables: one = ${one}, two = ${two}, three = ${three}, four = ${four}`)

// Declare variables to store your first name, last name, marital status, country and age in multiple lines

let firstname = 'Thiago'
let lastname = 'Oliveira'
let isMarried = false //true if is married
let nationality = "Brazil"
let myAge = 30

// Declare variables to store your first name, last name, marital status, country and age in a single line

function oneline() {
    let firstname = 'Thiago', lastname = 'Oliveira', isMarried = false, nationality = "Brazil", myAge = 30
    return console.log(firstname, lastname, isMarried, nationality, myAge)
}
oneline()

// Declare two variables myAge and yourAge and assign them initial values and log to the browser console.

function ages() {
    var myAge = 18
    var yourAge = 29;
    console.log(`I am ${myAge} years old.\nAnd you are ${yourAge} old.`)
}
ages()