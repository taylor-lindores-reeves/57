
// alert(`After ${time} years at ${percentage * 100}%, the investment will be worth 


var principal = document.getElementsByClassName("principal")
var percentage = document.getElementsByClassName("percentage")
var time = document.getElementsByClassName("time")
var output = document.getElementById("result")
var result
var newResult
var finalOutput

var calculate = () => {
    var newPrincipal = principal[0].value;
    result = newPrincipal
    var newPercentage = percentage[0].value
    newResult = result * (newPercentage / 100)
    var newTime = time[0].value
    finalOutput = (newResult * newTime) + Number(result)

    finalOutput = Math.ceil(finalOutput.toFixed(2)).toLocaleString('en-gb', { style: 'currency', currency: 'GBP'})
  }
  
  document.addEventListener('input', function (event) {
  
      if ( event.target.classList.contains( 'principal' ) ) {
          calculate();
      }
  
      if ( event.target.classList.contains( 'percentage' ) ) {
          calculate();
      }
  
      if ( event.target.classList.contains( 'time' ) ) {
          calculate();
      }
  
      output.innerHTML = `${finalOutput ? finalOutput : ""}`
  }, false);

