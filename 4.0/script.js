sports = [
  ['skier', '⛷'],
  ['snowboarder', '🏂'],
  ['apple', '🍎'],
  ['hockey', '🏒'],
  ['ice skate', '⛸'],
  ['swimmer', '🏊'],
  ['surfer', '🏄‍'],
  ['watermelon', '🍉'],
  ['lemon', '🍋'],
  ['rowboat', '🚣'],
  ['bicyclist', '🚴‍']
];
winter_sports = sports.slice(0, 5);

summer_sports = sports.slice(5, 11);

apple = winter_sports.splice(2, 1);
citrus = summer_sports.splice(2, 2);
fruits = apple.concat(citrus);

console.log(`*** Summer sports ***`);
for (i = 0; i < summer_sports.length; ++i) {
  row = summer_sports[i];
  console.log(row[0] + `:`, row[1]);
}
console.log('');
console.log(`*** Winter sports ***`);
for (i = 0; i < winter_sports.length; ++i) {
  row = winter_sports[i];
  console.log(row[0] + `:`, row[1]);
}
console.log('');
console.log(`*** Fruits ***`);
for (i = 0; i < fruits.length; ++i) {
  row = fruits[i];
  console.log(row[0] + `:`, row[1]);
}




