
var input = document.getElementById('string');
let counter = 0;

input.addEventListener('keypress', function(e) {
    if(e.key && e.key !== "Enter") {
        counter++
        document.getElementById("display").innerHTML = `<span>${counter} characters</span>`;
    }

    if(e.key === 'Enter') {
        alert("'" + input.value + `' has ${counter} characters`)
    }
})

input.addEventListener('keydown', function(e) {
    if(e.keyCode == 8) {
        counter--
        document.getElementById("display").innerHTML = `<span>${counter} characters</span>`;
    }
});