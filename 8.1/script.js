// Для массива tasks необходимо выполнить следующую цепочку методов:

// Сконвертировать время потраченное на выполнение задач в часы, вместо минут.
// Отфильтровать задачи, на выполнение, которых ушло два часа или больше.
// Умножить результат на часовую ставку.
// Вывести в html таблицу, которая состоит из ячеек с отфильтрованными задачами в виде:

let amount = 100;
let monday = [
  ['Write a tutorial', 180],
  ['Some web development', 120]
];
let tuesday = [
  ['Keep writing that tutorial', 240],
  ['Some more web development', 180],
  ['A whole lot of nothing', 240]
];
let tasks = [monday, tuesday];

let resultMonday = monday.map(hours);
let resultTuesday = tuesday.map(hours)

function hours(value) {
  value[1] /= 60;
  if (value[1] >= 2) {
    return value;
  }
}
// document.write(`<tr>
//                   <td>Task name: Write a tutorial</td>
//                   <td>Task duration: 3 hours</td>
//                   <td>Task amount: $${price}</td>
//                 </tr>`)

// let taskName = function tdTask(task) {
//   return task[0][0] = `<td>Task name: ${task[0][0]}</td>`;
// }
let taskDuration = function tdDur(time) {
  return time[0][1] = `<td>Task duration: ${time[0][1]} hours</td>`;
}
let price = function tdPrice(price) {
  let newtime = price[0][1] * amount;
  return newtime = `<td>Task amount: ${newtime}</td>`
}
// document.write(`<table><tr>${taskName(monday)}${taskDuration(monday)}${price(monday)}</tr></table>`)

// function taskTable(value){
//   for(value[0] && value[1]){

// }
// }
function table(day) {
  for (let i = 0; i <= day.length; i++) {
    for (let j = 0; j <= day[i].length; j++) {
      if (typeof day[i][j] == 'string') {
        console.log(day[i][j])
      }
    }
  }
}

console.log(table(monday))