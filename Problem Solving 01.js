//Problem Solving 01

console.log('\n');

// Exercise 1:
// Write a function named destructureExample that takes in an object and an array as parameters. The function should use destructuring to extract the values 'name' and 'age' from the object and the values at index 0 and index 2 from the array. The function should then return an object with the extracted values as properties with name and age.
const obj = { name: 'John', age: 30, city: 'New York' }
const arr = [10, 20, 30, 40]

const destructureExample = (objx, arrx) => {
    const {name, age, city} = objx
    const [n1, n2, n3, n4] = arrx
    console.log(`Exercise 1 (Object Destructuring): `, {name, age})
    console.log(`Exercise 1 (Array Destructuring): `, [n1, n3])
}

//Input & Output
destructureExample(obj, arr) //{ name: 'John', age: 30 } //[10, 30]


// *****************************************************************

// Exercise 2:
// Write a function named sumNumbers that takes in multiple numbers as arguments using the rest operator. The function should return the sum of all the numbers.
const sumNumbers = (...numSum) => {
    let sum = 0
    numSum.forEach(item => sum += item)
    console.log(`Exercise 2 (Rest Operator): `, sum)
}

//Input & Output
sumNumbers(1, 2, 3, 4, 5, ) //15

// *****************************************************************

// Exercise 3:
//  Write a function named createGreeting that takes in a name as a parameter and returns a greeting message using template literals. The message should be in the format: "Hello, [name]! Welcome to our website."

const createGreeting = (input) => console.log(`Exercise 3 (Template Literals): Hello, ${input}! Welcome to our website.`)

// Input & Output
createGreeting('Alice') //"Hello, Alice! Welcome to our website."

// *****************************************************************
 
// Exercise 4: 
// Write a function named isEven that takes in a number as a parameter and returns the string "Even" if the number is even, and "Odd" if the number is odd. Use a ternary operator instead of an if/else statement.

const isEven = (number) => console.log(`Exercise 4 (Ternary Operator): `, (number % 2 == 0) ? "Even" : "Odd")

// Input & Output
isEven(7) //Odd

// *****************************************************************

// Exercise 5: 
// Convert the following function to an arrow function:
// function multiply(a, b) {
//   return a * b;
// }

const multiply = (a, b) => a * b

//Input & Output
console.log(`Exercise 5 (Arrow Function): `, multiply(10, 5)) //50

// *****************************************************************

// Exercise 6: 
// Write a function named getLargestNumber that takes in two numbers as parameters. The function should return the larger number using short-circuiting and logical operators (&&, ||, ??).

const getLargestNumber = (a, b) => {
    const validCheck = (a || b) !== (0 && null && undefined)
    const validCompare = ((a > b) ? a : b)
    const invalidCompare = (a ?? b) ? a : b
    const compare = (validCheck === true) ? validCompare : invalidCompare
    console.log(`Exercise 6 (Logical Operators): `, compare)
}

// Input & Output
getLargestNumber(10, 5) //10

// *****************************************************************

// Exercise 7: 
// Write a function named getAddressCity that takes in an object representing a person's address. The address object has properties 'street', 'city', and 'country'. The function should return the value of the 'city' property if it exists, or the string "Unknown" if it doesn't exist, using optional chaining.

const address = { street: '123 Main St', country: 'USA' }

const getAddressCity = (city) => {
    console.log(`Exercise 7 (Optional Chaining): `, (address.city === city) ? city : 'Unknown')
}

// Input & Output
getAddressCity('') //Unknown

// *****************************************************************



// Exercise 8 to 11 : Array Methods



// Exercise 8: 
// Write a function named doubleNumbers that takes in an array of numbers and returns a new array with each number doubled using the array map method.

const doubleNumbers = (arr) => console.log(`Exercise 8 (Array Map): `, arr.map(num => num * 2))

//Input & Output
doubleNumbers([1, 2, 3, 4, 5]) //[2, 4, 6, 8, 10]

// *****************************************************************

// Exercise 9: 
// Write a function named filterEvenNumbers that takes in an array of numbers and returns a new array with only the even numbers using the array filter method.

const filterEvenNumbers = (arr) => console.log(`Exercise 9 (Array Filter): `, arr.filter(arr => arr % 2 === 0))

//Input & Output
filterEvenNumbers([1, 2, 3, 4, 5]) //[2, 4]

// *****************************************************************

// Exercise 10: 
// Write a function named sumArray that takes in an array of numbers and returns the sum of all the numbers using the array reduce method.

const sumArray = (arr) => console.log(`Exercise 10 (Array Reduce): `, arr.reduce((accumulator, currentValue) => accumulator + currentValue))

//Input & Output
sumArray([1, 2, 3, 4, 5]) //15

// *****************************************************************

// Exercise 11: 
// Write a function named sortNumbers that takes in an array of numbers and returns a new array with the numbers sorted in ascending order using the array sort method.

const sortNumbers = (arr) => console.log(`Exercise 11 (Array Sort): `, arr.sort())

//Input & Output
sortNumbers([5, 2, 8, 1, 4]) // [1, 2, 4, 5, 8]

// *****************************************************************