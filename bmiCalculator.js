const units = document.getElementById('units');
const heightUnit = document.getElementById('heightUnit');
const weightUnit = document.getElementById('weightUnit');
const imperial = document.getElementById('imperial');
const slider = document.getElementById('slider');
const feet = document.getElementById('feet');
const inches = document.getElementById('inches');
const hide = document.getElementById('hide');
const weight = document.getElementById('weight');
const height = document.getElementById('height');
const display = document.getElementById('display');
const verdict = document.getElementById('verdict');

if (units.value === 'metric') {
    height.addEventListener('input', calculateMetric);
    weightUnit.innerHTML = `kgs`;
    heightUnit.innerHTML = `meters`;
    imperial.style.display = 'none';
    hide.style.display = "block";
}

units.addEventListener('change', () => {
    if (units.value === 'metric') {
        height.addEventListener('input', calculateMetric);
        weightUnit.innerHTML = `kgs`;
        heightUnit.innerHTML = `meters`;
        imperial.style.display = 'none';
        hide.style.display = "block";
    } else if (units.value === 'imperial') {
        feet.addEventListener('input', calculateImperial);
        inches.addEventListener('input', calculateImperial);
        hide.style.display = "none";
        imperial.style.display = 'block';
        weightUnit.innerHTML = `lbs`;
        heightUnit.innerHTML = `inches`;
    }
})

function calculateMetric() {
    const BMI = (weight.value / (height.value * height.value));
    display.innerHTML = `<p>Your BMI = ${BMI.toFixed(1)}</p>`;
    conditionals(BMI);
}

function calculateImperial() {
    var feetToInches = feet.value * 12;
    var height = feetToInches + Number(inches.value);
    const BMI = (weight.value / (height * height)) * 703;
    display.innerHTML = `<p>Your BMI = ${BMI.toFixed(1)}</p>`;
    conditionals(BMI);
}

function conditionals(val) {
    if (val < 18.5) {
        verdict.innerHTML = `<p>You're underweight, please consult your doctor.</p>`;
    } else if (val > 25) {
        verdict.innerHTML = `<p>You're overweight, please consult your doctor.</p>`;
    } else {
        verdict.innerHTML = `<p>You're good.</p>`
    }

    slider.value = (val - 12) * (100/30)

    var len = slider.value / 100;
    display.style.backgroundColor=getColor(len);
}

function getColor(value){
    var hue=((1-value)*180).toString(10);
    return ["hsl(",hue,",100%,50%)"].join("");
}