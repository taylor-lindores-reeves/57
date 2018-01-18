
var request = async () => {
  const response = await fetch("http://www.apilayer.net/api/live?access_key=f7ac3b9468b140ead026dc26a0fa0518")
  const json = await response.json()

  if (response.status !== 200) {
    console.log('Looks like there was a problem. Status Code: ' +
      response.status);
    return;
  } else {
    calculate(json)
  }
}
request()

function calculate(XR) {
  var keyValuePairs = [];
  keyValuePairs.push(XR.quotes)
  var values = [];
  var keys = [];

  keyValuePairs.map(i => {
    values.push(Object.values(i))
    keys.push(Object.keys(i))
  })
  var amount = document.querySelector(".amount")

  amount.addEventListener('input', e => {

    for (a = 0; a < keys[0].length; a++) {
      var unorderedList = document.querySelector(".conversions")
      unorderedList.innerHTML += `<li>${keys[0][a]}</li><li id="haha"></li><br>`
    
      var amountValue = Number(amount.value)
      var hahas = document.querySelectorAll('#haha')

      hahas[a].innerHTML = `${values[0][a] * amountValue}`
      
    }
  })
}