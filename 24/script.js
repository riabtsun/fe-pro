let elems = document.querySelectorAll('input');
let area = document.querySelector('textarea');

function text() {
  setInterval(function () {
    for (let i = 0; i < elems.length; i++) {
      if (elems[i].value !== '') {
        area.value += elems[i].value + ','
      }
    }
  }, 2000)
}



text()