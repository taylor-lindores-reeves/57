// prompt for two numbers
// print the sum, difference, product and quotient of those two numbers

document.querySelectorAll("input").forEach(function(elem) {
    elem.addEventListener('input', function() {
        var first = document.getElementById("first");
        var second = document.getElementById("second");
    
        if (first.value < 0 || second.value < 0) {
            alert("No negative numbers please!")
        }
    
        var firstValue = Number(first.value)
        var secondValue = Number(second.value)
        var sum = firstValue + secondValue
        var difference = firstValue - secondValue
        var product = firstValue * secondValue
        var quotient = firstValue / secondValue
        
        document.getElementById("result").innerHTML = `
            <p>sum: ${sum}</p>
            <p>difference: ${difference}</p>
            <p>product: ${product}</p>
            <p>quotient: ${quotient}</p>
        `
    })
})




