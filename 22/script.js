let lastElem = document.querySelectorAll('.root>li:last-child, .root>li>ul>li:last-child ')
for (let elem of lastElem) {
  elem.className = 'last';
}

let firstItem;

function setFirstItemClassName(level) {
  switch (level) {
    case 1:
      firstItem = document.querySelector(`.root li:first-of-type`);
      firstItem.className = `first-item`;
      break;
    case 2:
      firstItem = document.querySelectorAll('.root>li>ul>li:first-child')
      for (let elem of firstItem) {
        elem.className = `first-item`;
      }
      break;
  }
}

setTimeout(function () {
  if (firstItem.length > 1) {
    firstItem.forEach(function (elems) {
      elems.style.backgroundColor = 'red'
    })
  }
  else {
    firstItem.style.backgroundColor = 'red'
  }
  lastElem.forEach(function (elems) {
    elems.style.backgroundColor = 'green'
  })
}, 2000)


let insideLevel = setFirstItemClassName(2)

