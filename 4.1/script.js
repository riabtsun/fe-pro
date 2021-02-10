hero = ['Ivan'];
native = ['York', 'Of'];
destination = ['Poltava', 'In'];
// Объединить массивы destination, native, hero в общий массив rainbow.
rainbow = destination.concat(native, hero);
//2. Сделать реверс элементов полученного массива rainbow.
rainbow.reverse();
//Изменить/добавить элементы массива rainbow так, что бы в итоге получился массив вида ['Richard','Of','York','Gave', 'Battle, 'In','Vain'];
rainbow.splice(0, 1, 'Richard');
rainbow.splice(4, 1, 'Vain');
console.log(rainbow);


rainbow.splice(3, 0, 'Gave', 'Battle')
console.log(rainbow);

colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']


console.log(colors);
for (i = 0; i < rainbow.length; i++) {
  document.write(`<div class="ball ${colors[i]}">${rainbow[i]}</div>`);
}

