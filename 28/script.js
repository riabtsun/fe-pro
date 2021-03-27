// Сделать 3 асинхронные операции (симулируем при помощи функции getPromise(), внутри которой находится setTimeout(resolve(),timer)).
//  В каждом промисе (getPromise) возвращается число от 0 до 100.
// Создать обертку runAfter(), которая получает в качестве аргумента – 3 функции в массиве, которые выполнятся после окончания всех 3-х асинхронных операций.


function afterFirstPromise(data) {

};

function afterSecondPromise(data) {

};

function afterThirdPromise() {

};

let afterFunctions = [afterFirstPromise, afterSecondPromise, afterThirdPromise];

function runAfter(valuesArr) {
  // для каждого числа во входящем массиве valuesArr применить соответствующую ф-ю с массива afterFunctions;
  for (let i = 0; i < afterFunctions.length; i++) {
    if (afterFunctions[i] && valuesArr[i]) {
      let currentFunction = afterFunctions[i],
        currentValue = valuesArr[i];
      currentFunction(currentValue);
    }
  }
  return afterFunctions.map((func, index) => func(valuesArr[index]));
}

let getPromise = timer => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(timer);
    }, timer);
  })
}

Promise.all([
  getPromise(1000),
  getPromise(2000),
  getPromise(3000)
])
  .then(
    all => {
      runAfter(all);
    }
  )