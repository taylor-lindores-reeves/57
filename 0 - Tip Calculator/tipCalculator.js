// Initialize billAmount to 0
// Initialize tip to 0
// Initialize tipRate to 0
// Initialize total to 0

// Prompt for billAmount with "What is the bill amount?"
// Prompt for tipRate with "What is the tip rate?"

// convert billAmount to a number
// convert tipRate to a number

// tip = billAmount * (tipRate / 100)
// round tip up to nearest cent
// total = billAmount + tip

// Display "Tip: £" + tip
// Display "Total: £" + total

function tipCalculator(slider, bill) {
    let tip = 0;
    var total = 0;


    var bill = parseInt(document.getElementById("bill").value);
    
    if (isNaN(bill) || bill < 0 || bill == null) {
        document.getElementById("display").innerHTML = "<p>Please enter a valid amount.</p>"
    } else if (!isNaN(bill)) {
        
        tip = bill * (slider / 100);
        total = bill + tip;

        document.getElementById("display").innerHTML = `
            <p>Slider: ${slider + '%'}</p>
            <p>Tip: £${tip.toFixed(2)}</p>
            <p>Total: £${total.toFixed(2)}</p>
        `
    }
}
