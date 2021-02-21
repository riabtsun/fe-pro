window.onload = function () {
  let elems = document.querySelectorAll('input');
  let area = document.querySelector('textarea');
  for (var i = 0; i < elems.length; i++) {
    elems[i].buffer = "";
  }

  setInterval(function () {
    for (var i = 0; i < elems.length; i++) {
      if (elems[i].value !== "" && elems[i].value !== elems[i].buffer) {
        area.value += elems[i].value + ',';
        elems[i].buffer = elems[i].value;
      }
    }
  }, 2000);
}