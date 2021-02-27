let radioCheck = document.querySelectorAll('input');
let figure = document.querySelector('.figure');
let typeOfFigure = document.querySelector('select')

radioCheck.forEach(function (btn, index) {
  btn.addEventListener('change', coloredFigure);
})
function coloredFigure() {
  figure.style.backgroundColor = this.dataset.color;
}

typeOfFigure.addEventListener('change', typeFigure);

function typeFigure() {
  figure.className = `figure ${this.value}`;
}
