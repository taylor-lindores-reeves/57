

input()
function input() {
    var onePrice = Number(prompt("Enter the price of item 1:"))
    var oneQuantity = Number(prompt("Enter the quantitity of item 1:"))

    var twoPrice = Number(prompt("Enter the price of item 2:"))
    var twoQuantity = Number(prompt("Enter the quantitity of item 2:"))

    var threePrice = Number(prompt("Enter the price of item 3:"))
    var threeQuantity = Number(prompt("Enter the quantitity of item 3:"))

    if (isNaN(onePrice) ||
        isNaN(oneQuantity) ||
        isNaN(twoPrice) ||
        isNaN(twoQuantity) ||
        isNaN(threePrice) ||
        isNaN(threeQuantity)) {
        alert('You need to enter valid numbers!')
        input()
    } else

    processing(onePrice, oneQuantity, twoPrice, twoQuantity, threePrice, threeQuantity)
}

function processing(onePrice, oneQuantity, twoPrice, twoQuantity, threePrice, threeQuantity) {
    var totalQuantity = oneQuantity + twoQuantity + threeQuantity
    var subtotal = (onePrice * oneQuantity) + (twoPrice * twoQuantity) + (threePrice * threeQuantity);
    var tax = subtotal * 0.055
    var total = subtotal + tax
    output(totalQuantity, onePrice, oneQuantity, twoPrice, twoQuantity, threePrice, threeQuantity, tax, subtotal, total)
}


function output(totalQuantity, onePrice, oneQuantity, twoPrice, twoQuantity, threePrice, threeQuantity, tax, subtotal, total) {
    alert(`
        The first item costs ${onePrice} and there are ${oneQuantity} which equals ${onePrice * oneQuantity}\n
        The second item costs ${twoPrice} and there are ${twoQuantity} which equals ${twoPrice * twoQuantity}\n
        The third item costs ${threePrice} and there are ${threeQuantity} which equals ${threePrice * threeQuantity}\n
        There are ${totalQuantity} items which altogether cost ${subtotal}\n
        5.5% of ${subtotal} is ${tax}
        Add ${tax} to the subtotal of ${subtotal} equals ${total}
    `)
}