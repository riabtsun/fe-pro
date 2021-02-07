let fencing = 'fencing', figureSkating = 'figure skating', skier = 'skier', snowboarder = 'snowboarder', golfing = 'golfing',
  rowingBoat = 'rowing boat', swimming = 'swimming', gymnastics = 'gymnastics', handball = 'handball';
let gold = 'gold', silver = 'silver', bronze = 'bronze';

const sports = [
  ['1F93A', 'fencing'],
  ['26F8', 'figure skating'],
  ['26F7', 'skier'],
  ['1F3C2', 'snowboarder'],
  ['1F3CC', 'golfing'],
  ['1F6A3', 'rowing boat'],
  ['1F3CA', 'swimming'],
  ['1F938', 'gymnastics'],
  ['1F93E', 'handball']
];

let medalIcon = medals.map(function (elem) {
  let medalUnicode = elem.map(function (code, index) {
    if (index === 0) {
      return code = String.fromCodePoint(parseInt(`${code}`, 16));
    }
  })
  return medalUnicode.join('')
})

const winners = [
  ['fencing', 'gold', 'fr'],
  ['fencing', 'silver', 'it'],
  ['fencing', 'bronze', 'us'],

  ['figure skating', 'gold', 'ca'],
  ['figure skating', 'silver', 'ru'],
  ['figure skating', 'bronze', 'us'],

  ['skier', 'gold', 'no'],
  ['skier', 'silver', 'ru'],
  ['skier', 'bronze', 'fr'],

  ['snowboarder', 'gold', 'us'],
  ['snowboarder', 'silver', 'jp'],
  ['snowboarder', 'bronze', 'au'],

  ['golfing', 'gold', 'gb'],
  ['golfing', 'silver', 'se'],
  ['golfing', 'bronze', 'us'],

  ['rowing boat', 'gold', 'us'],
  ['rowing boat', 'silver', 'gb'],
  ['rowing boat', 'bronze', 'ro'],

  ['swimming', 'gold', 'us'],
  ['swimming', 'silver', 'gb'],
  ['swimming', 'bronze', 'au'],

  ['gymnastics', 'gold', 'ru'],
  ['gymnastics', 'silver', 'ru'],
  ['gymnastics', 'bronze', 'ua'],

  ['handball', 'gold', 'dk'],
  ['handball', 'silver', 'fr'],
  ['handball', 'bronze', 'de'],
];

const olympic = ['1F535', '26AB', '1F534', '1F7E1', '1F7E2'];

let firstRow = olympic.map(function (circle) {
  circle = String.fromCodePoint(parseInt(`${circle}`, 16));
  return circle
});

const medals = [
  ['1F947', 'gold'],
  ['1F948', 'silver'],
  ['1F949', 'bronze'],
];

let medalIcon = medals.map(function (elem) {
  let medalUnicode = elem.map(function (code, index) {
    if (index === 0) {
      return code = String.fromCodePoint(parseInt(`${code}`, 16));
    }
  })
  return medalUnicode.join('')
})

const continents = [
  ['fr', 'Europe'],
  ['it', 'Europe'],
  ['us', 'The Americas'],
  ['ca', 'The Americas'],
  ['ru', 'Europe'],
  ['no', 'Europe'],
  ['jp', 'Asia'],
  ['au', 'Oceania'],
  ['gb', 'Europe'],
  ['se', 'Europe'],
  ['ro', 'Europe'],
  ['ua', 'Europe'],
  ['dk', 'Europe'],
  ['de', 'Europe']
];
//Необходимо вывести таблицу победителей Олимпийских игр в соответствии с видом спорта и континентом команды. Пример таблицы в прикрепленном рисунке.

// Метод для преобразования unicode вида спорта в соответствующую иконку – String.fromCodePoint(parseInt(val, 16)); где val – unicode вида спорта.

// Метод для преобразования аббревиатуры страны в соответствующую иконку флага – 
// 'ca'.toUpperCase().replace(/./g, char => String.fromCodePoint(char.charCodeAt(0)+127397)); где 'ca' – аббревиатура страны (Canada).



function logos(sports) {
  let secondRow = sports.map(function (elem, index) {
    let sportImg = elem.map(function (logo, index) {
      if (index === 0) {
        logo = `<td style="background-color: #d9fff7">${String.fromCodePoint(parseInt(`${logo}` + '</td>', 16))}`;
      }
      return logo;
    })
    return `<tr>${sportImg.join('')}</tr>`;
  })
  return secondRow.join('');
}



console.log(`<table>${firstRow}${logos(sports)}</table>`);
// document.write(`<table>${firstRow}${sportImg}</table>`);