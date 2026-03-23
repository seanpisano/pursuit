const form = document.getElementById('converter-form');
const distanceInput = document.getElementById('distance');
const directionSelect = document.getElementById('direction');
const result = document.getElementById('result');

const KM_TO_MI = 0.621371;
const MI_TO_KM = 1.60934;

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const value = parseFloat(distanceInput.value);
  const direction = directionSelect.value;

  if (Number.isNaN(value)) {
    result.textContent = 'Please enter a valid number.';
    return;
  }

  let convertedValue;
  let message;

  if (direction === 'km-to-mi') {
    convertedValue = value * KM_TO_MI;
    message = `${value} kilometer${value === 1 ? '' : 's'} = ${convertedValue.toFixed(2)} mile${convertedValue.toFixed(2) === '1.00' ? '' : 's'}`;
  } else {
    convertedValue = value * MI_TO_KM;
    message = `${value} mile${value === 1 ? '' : 's'} = ${convertedValue.toFixed(2)} kilometer${convertedValue.toFixed(2) === '1.00' ? '' : 's'}`;
  }

  result.textContent = message;
});
