const convertToCelsius = function(faren) {
  let celsius = 0;

  celsius = (faren - 32) * (5/9);
  celsius = Math.round(celsius * 10) / 10;

  return celsius;
};

const convertToFahrenheit = function(cels) {
  let faren = 0;

  faren = cels * (9/5) + 32;
  faren = Math.round(faren * 10) / 10;

  return faren;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
