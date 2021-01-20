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

// let resultMonday = monday.map(hours);
// let resultTuesday = tuesday.map(hours)

// function hours(value) {
//   value[1] /= 60;
//   if (value[1] >= 2) {
//     return value;
//   }
// }

// function table(tasks) {
//   let html = "";
//   for (let i = 0; i < tasks.length; i++) {
//     const day = tasks[i];
//     for (let j = 0; j < day.length; j++) {
//       const dayTasks = day[j];
//       const taskName = dayTasks[0];
//       const taskDuration = dayTasks[1];
//       const taskAmount = amount * taskDuration;
//       html += '<tr>';
//       html += `<td>Task name: ${taskName}</td>`;
//       html += `<td>Taks duration: ${taskDuration} hours</td>`;
//       html += `<td>Task amount: $${taskAmount}</td>`;
//       html += '</tr>';
//     }
//   }
//   return html;
// }

// let tableHtml = '<table>'
// let tableRows = table(tasks);
// tableHtml += tableRows
// tableHtml += '</table>'

// document.write(tableHtml)

tasks = monday.concat(tuesday);
taskName = ['Task name: ', 'Taks duration:  hours', 'Task amount: $']
function finalResult(general) {
  let trs = [];
  let arr = general.map(function (item) {
    item[1] /= 60;
    return trs.push(item)
  });
  let hours = arr.filter(function (hours) {
    if (hours[1] >= 2) {
      return hours;
    }
  });
  let money = trs.map(function (item) {
    let price = item[1] * amount;
    item.push(price);
    return item;
  });
  let rows = money.map(function (all) {
    tds = all.map(function (td) {
      td = `<td>${td}</td>`;
      return td
    })
    all = `<tr>${tds.join('')}</tr>`;

    return all
  });

  document.write(`<table>${rows.join('')}</table>`);


}

finalResult(tasks);