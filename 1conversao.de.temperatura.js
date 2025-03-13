/*
01 - Conversão de temperatura
Criar um código para conversão de temperatura entre Celsius e Fahrenheit.

Fórmulas:

F = (C * 9/5) + 32
C = (F - 32) * 5/9

*/

// função imprimir resultado de opção escolhida
function tempDefine1() {
  // Obter os valores mais recentes do DOM
  let temperature1 = parseFloat(document.getElementById("temp1").value);
  let conversionType1 = document.getElementById("convType1").value;
  let result1 = document.getElementById("result1");

  // função converter fahrenheit em celsius
  function celsiusToFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
  }

  // função converter celsius em fahrenheit
  function fahrenheitToCelsius(fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9;
  }

  let celsToFahr = celsiusToFahrenheit(temperature1);
  let fahrToCels = fahrenheitToCelsius(temperature1);

  if (conversionType1 === "cToF") {
    result1.innerText = `${temperature1}°C é igual a ${celsToFahr.toFixed(
      2
    )}°F`;
  } else {
    result1.innerText = `${temperature1}°F é igual a ${fahrToCels.toFixed(
      2
    )}°C`;
  }
}
