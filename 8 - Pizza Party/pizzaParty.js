// prompt for the number of people
// prompt for the number of pizzas
// prompt for the number of slices per pizza
// ensure the number of slices comes out even
// display the number of slices of pizza each person should get
// display the number of left over slices

var people = Number(prompt("How many people?"))
var pizzas = Number(prompt("How many pizzas?"))
var slices = Number(prompt("In each pizza, how many slices are there?"))

var totalSlices = pizzas * slices
var slicesPerPerson = totalSlices / people
slicesPerPerson = Math.floor(slicesPerPerson)
var leftovers = totalSlices % people

alert(`
    There ${people == 1 ? "is" : "are"} ${people} ${people == 1 ? "person" : "people"} with ${pizzas} ${people == 1 ? "pizza" : "pizzas"}.\n
    Each person gets ${slicesPerPerson} ${people == 1 ? "slice" : "slices"} of pizza.\n
    There ${people == 1 ? "is" : "are"} ${leftovers} ${leftovers == 0 ? "slice" : "slices"} leftover.
`)

