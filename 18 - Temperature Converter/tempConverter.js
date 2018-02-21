// Prompt for the starting temperature
// Prompt for the type of conversion

// Farenheit to Celcius or Celcius to Farenheit

// Celcius = (F - 32) * (5/9)
// Farenheit = (C * 9/5) + 32

var prefix = document.getElementById('prefix')
var pf = document.getElementById('pf')
var temp = document.getElementById('temperature')
var display = document.getElementById('display')


window.addEventListener('keypress', function(i) {
    if (i.key == 'c') {
        prefix.innerHTML = `°C`;
        pf.innerHTML = `°F`;
        temp.addEventListener('input', calculateTemp(i.key));
    } else if (i.key == 'f') {
        prefix.innerHTML = `°F`;
        pf.innerHTML = `°C`;
        temp.addEventListener('input', calculateTemp(i.key));
    }
})

function calculateTemp(val) {
    if (val == 'c') {
        window.addEventListener('keypress', function(i) {
            console.log(i.keyCode)
            if (i.keyCode == 13 && temp.value) {
                var result = (temp.value * (9/5)) + 32;
                display.innerHTML = `${result.toFixed(0)}`;
            } else if (i.keyCode == 102) {
                display.innerHTML = ``;
            }
        })
    } else if (val == 'f') {
        window.addEventListener('keypress', function(i) {
            if (i.keyCode == 13 && temp.value) {
                var result = (temp.value - 32) * (5/9);
                display.innerHTML = `${result.toFixed(0)}`;
            } else if (i.keyCode == 99) {
                display.innerHTML = ``;
            }
        })
    }
}