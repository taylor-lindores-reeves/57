// class One {
//     constructor() {
//         this.principal = document.getElementById('principal');
//         this.rate = document.getElementById('rate');
//         this.years = document.getElementById('years');
//         this.compound = document.getElementById('compound');
//         this.events();
//     }

//     events() {
//         this.principal.addEventListener("input", this.fire.bind(this))
//     }

//     fire() {
//         console.log(this.principal)
//     }

// }

// var p = new One();

// USE THE BIND KEYWORD IN BOTH INSTANCES TO PASS THE VARIABLES FROM FUNCTION TO FUNCTION WITHIN A E L FUNCTION

var Compound = function () {}

Compound.prototype.askQuestion = function() {
    this.principal = document.getElementById('principal');
    this.rate = document.getElementById('rate');
    this.years = document.getElementById('years');
    this.compound = document.getElementById('compound');

    this.principal.addEventListener('input', this.calculateInterest.bind(this))
    this.rate.addEventListener('input', this.calculateInterest.bind(this))
    this.years.addEventListener('input', this.calculateInterest.bind(this))
    this.compound.addEventListener('input', this.calculateInterest.bind(this))
}

Compound.prototype.calculateInterest = function() {
    var principal = this.principal.value;
    var rate = this.rate.value;
    rate = rate /= 100;
    var compound = this.compound.value;
    var base = (rate / compound) + 1;
    var years = this.years.value;
    var exponent = compound * years;
    var calculateCompound = Math.pow(base, exponent);
    const result = Number(principal * calculateCompound);
    this.displayAnswer(result);
}

Compound.prototype.displayAnswer = function(result) {
    var display = document.querySelector('#result');
    result = result.toLocaleString('en-gb', { style: 'currency', currency: 'GBP'});
    display.innerHTML = `${result}`
}

var compound = new Compound();
compound.askQuestion();

// THERES A DIFFERENCE BETWEEN INVOKING A FUNCTION () AND PASSING IT BY REFERENCE WITHOUT THE PARENTHESES









// var person = {
//     name: 'Taylor'
// }

// var logName = function(a, b) {
//     console.log(this.name + ' ' + a + ' ' + b)
// }

// var some = logName.bind(person); // bind attaches this variable to object passed as parameter
// some(); // you need to call the function when binding  something to it

// logName.call(person, 'one', 'two') // same as bind but invokes function and takes paramters

// logName.apply(person, ['one', 'two']) // same as call but takes parameters as an array