function temperatureConverter(valNum) {
  var parsedNum = parseFloat(valNum);
  document.getElementById("outputCelsius").innerHTML=(parsedNum-32)/1.8;
}