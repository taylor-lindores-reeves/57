var age = document.getElementById('age');
var display = document.getElementById('display');

var ages = {
    'south africa': 17,
    'nigeria': 23,
    'canada': 14,
    'united states': 14,
    'iraq': 17,
    'india': 18,
    'united kingdom': 17,
    'indonesia': 17,
    'china': 18,
    'el salvador': 15,
    'estonia': 16
}

age.addEventListener("input", function() {
    display.innerHTML = ``;
    for (i in ages) {
        if (age.value >= ages[i]) {
            display.innerHTML += `<li>${i}</li>`
        } else if (age.value < 14) {
            display.innerHTML = `<li>You're not old enough to drive</li>`
        }
    }
})