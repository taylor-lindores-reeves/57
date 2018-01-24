
var bill = document.getElementById("bill");
var input = document.getElementById("state");
var display = document.getElementById("display");

input.addEventListener('input', calculateTax);
bill.addEventListener('input', calculateTax);

var total = 0;

display.innerHTML = `Total: ${total.toLocaleString('en-GB', {style: 'currency', currency: 'GBP'})}`

function calculateTax() {
    var lowerCase = input.value.toLowerCase();
    total = Number(bill.value)
    
    if (input.value == 'wi' || input.value == 'wisconsin') {
        var tax = bill.value * 0.055;
        total = Number(total) + Number(tax);
    } else {
        total = Number(total)
    }

    display.innerHTML = `Total: ${total.toLocaleString('en-GB', {style: 'currency', currency: 'GBP'})}`
}
