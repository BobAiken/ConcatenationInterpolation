// Both Concatenation and Interpolation are methods to accomplish the same task in JavaScript
// That task being embedding variable references into strings.
// For example, here are some variables we will use to showcase Concatenation and Interpolation
var name = "Bob"
var daysComplete = 2

//Using string Concatenation, they could be referenced like:
console.log("Hello " + name + "! You have completed " + daysComplete + "at Turing.")

//With Concatenation, every time you want to reference at variable you must put end quotes, a plus sign, your variable name, then another plus sign, then start typing a new string.

// using string interpolation, they could be referenced like:
console.log(`Hello ${name}! You have completed + ${daysComplete} + "at Turing.`)

//With Interpolation, everything in the `back ticks` are treated as a string and variables can be referenced by ${inserting them into curly brackets after a dollar sign}


// I perfer Interpolation over Concatenation becuase it flows more smoothly to read and write.
//...also because I can't pronounce Concatenation.
