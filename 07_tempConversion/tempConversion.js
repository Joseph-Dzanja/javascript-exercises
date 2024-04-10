const convertToCelsius = function(fahrenheit) {
  // °C = (°F - 32) × 5/9,

  let celsius = ((fahrenheit-32) * (5/9));
  function round(value, precision) {
    var multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
  }
  return round(celsius,1);
};

const convertToFahrenheit = function(celsius) {
  // Temperature in degrees Fahrenheit (°F) = (Temperature in degrees Celsius (°C) * 9/5) + 32.
  let fahrenheit = (celsius * (9/5)) + 32;
  function round(value, precision) {
    var multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
  }
  return round(fahrenheit, 1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
