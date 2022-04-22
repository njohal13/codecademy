//Constant temp in Kelvin
const kelvin = 0

//Convert Kelvin to Celsius
let celsius = kelvin -273

//Calculate Fahrenheit value
let fahrenheit = celsius*(9/5) +32

//Change decimal places: round down
fahrenheit = Math.floor(fahrenheit)

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)