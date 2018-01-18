var inputs = document.querySelectorAll('input');
const gallons = 350;
var error = document.getElementById("display").innerHTML = `<p>You need to enter a number</p>`

inputs.forEach(function(e) {
    e.addEventListener('input', function() {
        if (e.id == 'rectangleLength' || e.id == 'rectangleWidth') {
            var length = document.getElementById('rectangleLength').value
            var width = document.getElementById('rectangleWidth').value
            const sqFeet = length * width
            var numberOfGallons = sqFeet / gallons
            var rounded = Math.ceil(numberOfGallons)
            document.getElementById("display").innerHTML = `
                <p>You will need to purchase ${rounded} gallons of paint to cover ${sqFeet} square feet</p>
            ` 
        }
        if (e.id == 'roundLength') {
            const pi = 3.141592;
            var diameter = document.getElementById('roundLength').value
            var radius = diameter / 2;
            var radiusSquared = radius * radius;
            var sqFeet = radiusSquared * pi;
            sqFeet = Math.round(sqFeet)
            var rounded = sqFeet / gallons;
            var roundedCircle = Math.ceil(rounded)
            document.getElementById("display").innerHTML = `
                <p>You will need to purchase ${roundedCircle} gallons of paint to cover approx ${sqFeet} square feet</p>
            ` 
        }
        
        if (e.id == '1-lLength' || e.id == '1-lWidth' || e.id == '2-lLength' || e.id == '2-lWidth') {
            var firstLength = document.getElementById("1-lLength").value
            var firstWidth = document.getElementById("1-lWidth").value
            var secondLength = document.getElementById("2-lLength").value
            var secondWidth = document.getElementById("2-lWidth").value
            const firstRectangle = firstLength * firstWidth
            const secondRectangle = secondLength * secondWidth
            const sqFeet = firstRectangle + secondRectangle
            var numberOfGallons = sqFeet / gallons
            var rounded = Math.ceil(numberOfGallons)
            document.getElementById("display").innerHTML = `
                <p>You will need to purchase ${rounded} gallons of paint to cover ${sqFeet} square feet</p>
            `
        }
    })
})