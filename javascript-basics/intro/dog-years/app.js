//Declare human age
const myAge = 8

//The first two years of a dog’s life count as 10.5 dog years each.

//Declare human first 2 years
let earlyYears = 2

//Each year is worth 10.5 dog years
earlyYears *= 10.5

//Set variable for rest of years after 2 yrs
let laterYears = myAge - 2

//Each year after the first 2yrs (earlyYears) is worth 4 dog years
laterYears *= 4
console.log(earlyYears, laterYears)

//Calc human age in dog years
myAgeInDogYears =  earlyYears + laterYears

//convert string of your name to lower case
const myName = 'BOB'.toLowerCase()

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)

