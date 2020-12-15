hero = ['Ivan'];
native = ['York', 'Of'];
destination = ['Poltava', 'In'];
// Объединить массивы destination, native, hero в общий массив rainbow.
rainbow = hero.concat(native, destination);
console.log(rainbow);
//2. Сделать реверс элементов полученного массива rainbow.
rainbow.reverse();
console.log(rainbow);
//Изменить/добавить элементы массива rainbow так, что бы в итоге получился массив вида ['Richard','Of','York','Gave', 'Battle, 'In','Vain'];
rainbow[1] = 'Vain';
rainbow[4] = 'Richard';
console.log(rainbow);

[
  rainbow[0],
  rainbow[1],
  rainbow[2],
  rainbow[3],
  rainbow[4],
] = [
    rainbow[4],
    rainbow[2],
    rainbow[3],
    rainbow[0],
    rainbow[1],
  ];

rainbow.splice(3, 0, 'Gave', 'Battle')
console.log(rainbow);

colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']


console.log(colors);
for (i = 0; i < rainbow.length; i++) {
  document.write(`<div class="ball ${colors[i]}">${rainbow[i]}</div>`);
}

