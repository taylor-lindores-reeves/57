

// Prompt for current age
var currentAge = prompt("What is your current age?")
// Prompt for retirement age
var retirementAge = prompt("What is your retirement age?")
// Display the output
var date = new Date().getFullYear();

var difference = retirementAge - currentAge
var dateOfRetirement = date + difference

if (difference > 0) {
    alert(`You have ${difference} year(s) left until you retire \nIt's ${date}, so you can retire in ${dateOfRetirement}.`)
} else {
    alert("You should have retired already!")
}