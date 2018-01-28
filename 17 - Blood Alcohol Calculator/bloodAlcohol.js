var slider = document.getElementById("slider")
var metric = document.getElementById("metric")
var imperial = document.getElementById("imperial")
var weight = document.getElementById("weight")
var weightmeasurement = document.getElementById("weightmeasurement")
var volumemeasurement = document.getElementById("volumemeasurement")
var gender = document.getElementById("gender")
var drinks = document.getElementById("drinks")
var percentage = document.getElementById("percentage")
var volume = document.getElementById("alcoholperdrink")
var time = document.getElementById("time")
var display = document.getElementById("result")

slider.addEventListener("change", () => {
    if (slider.value == 0) {
        imperial.style.color = "black";
        metric.style.color = "red";
        weightmeasurement.innerHTML = `kg`;
        volumemeasurement.innerHTML = `g`;
        const doMetric = 0;
        CalculateAlcohol(doMetric);
    } else if (slider.value == 1) {
        metric.style.color = "black";
        imperial.style.color = "red";
        weightmeasurement.innerHTML = `lbs`;
        volumemeasurement.innerHTML = `oz`;
        const doImperial = 1;
        CalculateAlcohol(doImperial);
    }
})

var CalculateAlcohol = function(measurement) {
    if (measurement == 0) {
        weight.addEventListener('input', calculateMetric);
        drinks.addEventListener('input', calculateMetric);
        percentage.addEventListener('input', calculateMetric);
        volume.addEventListener('input', calculateMetric);
        time.addEventListener('input', calculateMetric);
        gender.addEventListener('change', calculateMetric);
    }
    
    if (measurement == 1) {
        weight.addEventListener('input', calculateImperial);
        drinks.addEventListener('input', calculateImperial);
        percentage.addEventListener('input', calculateImperial);
        volume.addEventListener('input', calculateImperial);
        time.addEventListener('input', calculateImperial);
        gender.addEventListener('change', calculateImperial);
    }
}

function calculateMetric() {
    var A  = ((drinks.value * (volume.value * 0.03527396)) * percentage.value);
    A = A /= 100
    const BAC = (A * 5.14) / ((weight.value * 2.2046226218) * (gender.value == "male" ? 0.73 : 0.66)) - (.015 * time.value);
    display.innerHTML = `${BAC.toFixed(3)}`
}

function calculateImperial() {
    var A  = ((drinks.value * volume.value) * percentage.value);
    A = A /= 100
    const BAC = (A * 5.14) / (weight.value * (gender.value == "male" ? 0.73 : 0.66)) - (.015 * time.value);
    display.innerHTML = `${BAC.toFixed(3)}`
}