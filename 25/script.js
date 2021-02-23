let radioCheck = document.querySelectorAll('input');
let figure = document.querySelector('.figure');


window.onload = radioCheck.forEach(function (btn, index) {
  console.log(btn.checked)
  if (btn.checked) {
    figure.classList.add('red')
  }

})


// figure.classList.add('red')
