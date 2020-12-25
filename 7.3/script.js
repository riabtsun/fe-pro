// Реализовать функцию copy(list) по копированию массива.

// Предусмотреть возможность передачи вторым аргументом функции. При копировании массива – функция применяется к каждому элементу копируемого массива.


let arrA = [1, 2, 3, 4, 5];


function copy(a, b) {
  let newList = [];
  for (let i = 0; i < a.length; i++) {
    if (typeof b === 'function') {
      a[i] = b(a[i]);
      newList.push(a[i]);
    } else {
      newList.push(a[i]);
    }

  }
  return newList;
}


function multi(value) {
  return value * 10;
}

newList = copy(arrA, multi);
console.log(newList); 
