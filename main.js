// 1. K => C => F
// // constant variable for Kelvin temp
const kelvin = 300;
// // const variable for Celsius temp; C is K - 273
const celsius = kelvin - 273;

// // let variable for the temp in Fahrenheit; F = C *1.8 + 32
// // we used Math.floor() method to round down to nearest integer
let fahrenheit = Math.floor(celsius * 1.8 + 32);

// // string interpolation to log temp in F to the console
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)



// 2. K => C => N
// Newton = Celsius * (33/100)
// constant variable for temp in Kelvin
// const kelvin = 300;

// constant variable for temp in Celsius with formula
// const celsius = kelvin - 273;

// let variable for temp in Newton with formula
// let newton = Math.round(celsius * (33/100));

// string interpolation to log temp in N to the console
// console.log(`The temperature is ${newton} degrees Newton.`)