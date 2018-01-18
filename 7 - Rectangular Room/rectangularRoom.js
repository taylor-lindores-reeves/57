// calculate the area of a room
    // Prompt user for length of room in ft
    // prompt user for width of room in ft
    // result in both square feet and square meters

document.querySelectorAll("input").forEach(function(e) {
    e.addEventListener('input', function(e) {
        var ftWidthInput = document.getElementById("ft-width")
        var ftLengthInput = document.getElementById("ft-length")
        var mWidthInput = document.getElementById("m-width")
        var mLengthInput = document.getElementById("m-length")

        var display = document.getElementById("display")

        var ftLength = ftLengthInput.value
        var ftWidth = ftWidthInput.value

        var mLength = mLengthInput.value
        var mWidth = mWidthInput.value
        
        const ftSquared = ftLength * ftWidth
        const mSquared = (mLength * mWidth) * 0.09290304

        displayFeet.innerHTML = `
            <p>${ftSquared}ft²</p>
        `

        displayMetres.innerHTML = `
            <p>${mSquared}m²</p>
        `
    })
})

