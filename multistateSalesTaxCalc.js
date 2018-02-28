const type = document.getElementById('typeAhead');
const amount = document.getElementById('amount');
const states = document.getElementById('states');
const selection = document.getElementById('selection');
const taxRate = document.getElementById('taxRate');
const result = document.getElementById('result');

var arr = [
    {state: 'Wisconsin', counties: [{county: 'Eau Claire', tax: 0.005}, {county: 'Dunn', tax: 0.004}]},
    {state: 'California', counties: [{county: 'Alamedam', tax: 9.75}, {county: 'Kern', tax: 8.25}, {county: 'Los Angelas', tax: 10.25}]},
    {state: 'Illinois', tax: 4.95},
    {state: 'Indiana', tax: 3.3},
    {state: 'Massachusetts', tax: 5.1},
    {state: 'Michigan', tax: 4.25},
    {state: 'North Carolina', tax: 5.75},
    {state: 'Pennsylvania', tax: 3.07},
    {state: 'Utah', tax: 5}
]

function findMatches(wordToMatch) {
    return arr.filter(obj => {
        const regex = new RegExp(wordToMatch, 'gi')
        return obj.state.match(regex)
    })
}

function displayMatches() {
    type.addEventListener('mousemove', () => type.blur());
    states.style.display = "block";
    const matchArray = findMatches(type.value)
    states.innerHTML =  matchArray.map(i => { return `<li id="state" value="${i.state}">${i.state}</li>` }).join('');
}

type.addEventListener('keyup', displayMatches);
type.addEventListener('change', displayMatches);

states.addEventListener('click', i => {
    arr.forEach(obj => {
        if (obj.state === i.target.innerText) {
            if (obj.counties) {
                states.style.display = "none";
                selection.innerHTML += obj.counties.map(key => { return `<li id="county">${key.county}</li>`}).join('');
                const counties = document.querySelectorAll('#county');

                selection.addEventListener('click', el => {
                    obj.counties.map(key => {
                        if (key.county === el.target.innerText) {
                            selection.innerHTML = `<li id="tax1">${key.tax}%</li>`;
                            document.getElementById('tax1').addEventListener('click', i => {
                                taxRate.style.display = "inline";
                                amount.style.display = "inline";
                                taxRate.value = parseFloat(key.tax);
                            });
                        }
                    });
                });
            }

            if (obj.tax) {
                states.style.display = "none";
                selection.innerHTML = `<li id="tax2">${obj.tax}%</li>`;
                document.getElementById('tax2').addEventListener('click', i => {
                    taxRate.style.display = "inline";
                    amount.style.display = "inline";
                    taxRate.value = parseFloat(i.target.innerText);
                });
            }
        }
    });

    type.addEventListener('click', () => {
        while (selection.firstChild) {
            selection.removeChild(selection.firstChild);
        }
    });
});

amount.addEventListener('input', () => {
    const rate = amount.value * (taxRate.value / 100);
    const display = Number(amount.value) + rate;
    const z = display.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    result.innerHTML = `<h1>${z}</h1>`
});