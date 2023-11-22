// Declare firstName, lastName, country, city, age, isMarried, year variable
//  and assign value to it and use the typeof operator to check different data types.

let person = {
  firstName: "John",
  lastName: "Doe",
  country: "USA",
  city: "New York",
  age: 30,
  isMarried: true,
  year: new Date().getFullYear(),
};

console.log(` Typeof firstName: ${typeof person.firstName}`);
console.log(` Typeof lastName: ${typeof person.lastName}`);
console.log(` Typeof country: ${typeof person.country}`);
console.log(` Typeof city: ${typeof person.city}`);
console.log(` Typeof age: ${typeof person.age}`);
console.log(` Typeof isMarried: ${typeof person.isMarried}`);
console.log(` Typeof year: ${typeof person.year}`);
console.log(person.year);


//Check if type of '10' is equal to 10

console.log(typeof '10' === typeof 10 ? true : false)

// Check if parseInt('9.8') is equal to 10

console.log(parseInt("9.8") === 10 ? true : false)
console.log(parseFloat('9,8'))

// Boolean value is either true or false.


// Write three JavaScript statement which provide truthy value
  let number = 3
  let string = 'string'
  let boolean = true

  // Write three JavaScript statement which provide falsy value.
  let nullValue = null
  let undefinedValue = undefined
  let zero = 0

  console.log('--07--')
  // Figure out the result of the following comparison expression 
  // first without using console.log(). After you decide the result
  // confirm it using console.log()

4 > 3 //true
4 >= 3 //true
4 < 3 //false
4 <= 3 //false
4 == 4 //true
4 === 4 //true
4 != 4 //false
4 !== 4 //false
4 != '4' //false
4 == '4' //true
4 === '4' //false

console.log(4 > 3)
console.log(4 >=3)
console.log(4 < 3)
console.log(4 <= 3)
console.log(4 == 4)
console.log(4 === 4)
console.log(4 != 4)
console.log(4 !== 4)
console.log(4 != '4')
console.log(4 == '4')
console.log(4 === '4')

console.log('--08--')
// Find the length of python and jargon and make a falsy comparison statement

let python = 'python'
let jargon = 'jargon'

console.log(python.length !== jargon.length)

console.log('--09--')
// Figure out the result of the following expressions first without using 
// console.log(). After you decide the result confirm it by using console.log()

// 4 > 3 && 10 < 12 //true
// 4 > 3 && 10 > 12 //false
// 4 > 3 || 10 < 12 //true
// 4 > 3 || 10 > 12 //true
// !(4 > 3) //false
// !(4 < 3) //true
// !(false) //true
// !(4 > 3 && 10 < 12) //flase
// !(4 > 3 && 10 > 12) //true
// !(4 === '4') //true

console.log(4 > 3 && 10 < 12)
console.log(4 > 3 && 10 > 12)
console.log(4 > 3 && 10 < 12 )
console.log(4 > 3 || 10 > 12)
console.log(!(4 > 3))
console.log(!(4 < 3))
console.log(!(false))
console.log(!(4 > 3 && 10 < 12))
console.log(!(4 > 3 && 10 > 12))
console.log(!(4 === '4'))





//There is no 'on' in both dragon and python
console.log('--09--')
console.log(python.includes('on') && jargon.includes('on'))


console.log('--09--')


// What is the year today?
let date = new Date() 
console.log(date.getFullYear())

// What is the month today as a number?
console.log(date.getMonth() + 1)
// What is the date today?
console.log(date)
// What is the day today as a number?
console.log(date.getDay())
// What is the hours now?
console.log(date.getHours())
// What is the minutes now?
console.log(date.getMinutes())
// Find out the numbers of seconds elapsed from January 1, 1970 to now.
console.log(date.getTime())




