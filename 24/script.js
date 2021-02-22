let values = [
  document.querySelector('.input-1').value,
  document.querySelector('.input-2').value,
  document.querySelector('.input-3').value,
];

let inputs = document.querySelectorAll('input');

inputs.forEach(function (input, index) {
  input.addEventListener('change', function () {
    values[index] = this.value;
    return document.querySelector('textarea').value = values.join(',');
  })
})