/*Truthy values are:
* All numbers (positive and negative) except 0
* All strings are truthy except an empty string
* The boolean true
*/

/*Falsy values are:
* 0, 0n, null, undefined, NaN, the boolean false, '',"",``, empty string
*/

// == compares only value. === compares value and data type
//Ternary operators 
let isRaining = false
isRaining?console.log('You need an umbrella'):console.log('You do not need an umbrella')


let number = -5
number > 0 ? console.log(`${number} is a positive number`):console.log(`{number} is a negative number`)


//let age = prompt('Enter your age: ', 'Age in number goes here') 
//console.log(age)

// let agree = window.confirm('Do you want to cancel?')
// console.log(agree)