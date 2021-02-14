let block = document.querySelector('.square')
let body = document.querySelector('body')

let step = 10;

let keyFunction = {
  37: function () {
    block.style.left = !block.style.left ? `-${step}px` : (parseInt(block.style.left) - 10) + 'px';
    console.log(block.style.left)
    if (block.offsetLeft <= 8) {
      block.style.left = (parseInt(block.style.left) + (step * 2) + 'px');
      console.log(block.style.left)
      boom()
    }
  },
  38: function () {
    block.style.bottom = !block.style.bottom ? `${step}px` : (parseInt(block.style.bottom) + 10) + 'px';
    console.log(block.style.bottom)
    if (block.offsetTop <= 0) {
      block.style.bottom = (parseInt(block.style.bottom) - (step * 2) + 'px');
      console.log(block.style.left)
      boom()
    }
  },
  39: function () {
    block.style.left = !block.style.left ? `${step}px` : (parseInt(block.style.left) + 10) + 'px';
    console.log(block.style.left)
    if (block.offsetLeft >= 1080) {
      block.style.left = (parseInt(block.style.left) - (step * 2) + 'px');
      console.log(block.style.left)
      boom()
    }
  },
  40: function () {
    block.style.bottom = !block.style.bottom ? `-${step}px` : (parseInt(block.style.bottom) - 10) + 'px';
    console.log(block.style.bottom)
    if (block.offsetTop >= 520) {
      block.style.bottom = (parseInt(block.style.bottom) + (step * 2) + 'px');
      console.log(block.style.left)
      boom()
    }

  }
}

document.onkeydown = function (event) {
  keyFunction[event.keyCode] && keyFunction[event.keyCode]();
  console.dir(block)

}

if (block.style.left == '-540px') {
  block.style.left = (parseInt(block.style.left) + (step * 2) + 'px');
  console.log(block.style.left)
}
if (block.offsetLeft == 8) {
  block.style.left = (parseInt(block.style.left) + (step * 2) + 'px');
  console.log(block.style.left)
}

let jump = {
  8: function () {
    block.style.left += step * 2;
  }
}

block.offsetLeft = function (event) {
  jump[event] && jump[event]()
}
function boom() {
  let text = document.querySelector('p')
  text.style.opacity = 1;
  setTimeout(function () {
    text.style.opacity = 0;
  }, 2000)
}