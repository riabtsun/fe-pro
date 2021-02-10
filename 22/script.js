let lastElem = document.querySelectorAll('.root>li:last-child, .root>li>ul>li:last-child ')
for (let elem of lastElem) {
  elem.className = 'last';
}

function setFirstItemClassName(level) {
  let firstItem;
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
  firstItem.style.backgroundColor = `red`;
  lastElem.style.backgroundColor = `green`;

  // setTimeout(function () {
  // }, 2000)
  // setTimeout
  // return firstItem
}

let firstElem = setFirstItemClassName(2)
firstItem.style.backgroundColor = `red`;
lastElem.style.backgroundColor = `green`;
document.body.style.backgroundColor = 'red'