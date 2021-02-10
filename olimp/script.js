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

const medals = [
  ['1F947', 'gold'],
  ['1F948', 'silver'],
  ['1F949', 'bronze'],
];

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

let medalIcon = medals.map(function (elem) {
  let medalUnicode = elem.map(function (code, index) {
    if (index === 0) {
      return code = String.fromCodePoint(parseInt(`${code}`, 16));
    }
  })
  return medalUnicode.join('');
});


function getContinentByCountry(country) {
  country = continents.filter(function (arr) {
    return arr[0] === country;
  });
  return country[0][1];
}

let sportTRS = sports.map(function (sport) {
  //console.log(sport); // ex. ["1F93A", "fencing"]

  let sportName = String.fromCodePoint(parseInt(`${sport[0]}`, 16));;

  let sportWinners = winners.filter(function (winner) {
    return winner[0] === sport[1]; // получим массив олимпийцев для текущего вида спорта
  });

  sportWinners.forEach(function (elem) {
    switch (elem[1]) {
      case 'gold':
        elem[1] = medalIcon[0];
        break;
      case 'silver':
        elem[1] = medalIcon[1];
        break;
      case 'bronze':
        elem[1] = medalIcon[2];
        break;
    }
  })
  sportWinners.join('')
  // ex:
  // 0: (3) ["fencing", "gold", "fr"]
  // 1: (3) ["fencing", "silver", "it"]
  // 2: (3) ["fencing", "bronze", "us"]

  let Europe = [],
    Americas = [],
    Asia = [],
    Oceania = [],
    Africa = [];

  sportWinners.forEach(function (winner) {
    // console.log(winner[0]);
    let winnerContinent = getContinentByCountry(winner[2]); // получим название контиента, с которого наш олимпиец
    switch (winnerContinent) {
      case 'Europe':
        Europe.push(winner);
        break;
      case 'The Americas':
        Americas.push(winner);
        break;
      case 'Asia':
        Asia.push(winner);
        break;
      case 'Oceania':
        Oceania.push(winner);
        break;
      case 'Africa':
        Africa.push(winner);
        break;
    }
  });

  newEurope = Europe.map(function (elem) {
    return elem.slice(1).join('- ')
  })
  newAfrica = Africa.map(function (elem) {
    return elem.slice(1).join('- ')
  })
  newAmericas = Americas.map(function (elem) {
    return elem.slice(1).join('- ')
  })
  newAsia = Asia.map(function (elem) {
    return elem.slice(1).join('- ')
  })
  newOceania = Oceania.map(function (elem) {
    return elem.slice(1).join('- ')
  })

  let olympicRing = olympic.map(function (circle) {
    circle = String.fromCodePoint(parseInt(`${circle}`, 16));
    return circle
  });

  firstRow = `<tr><td></td>`;
  for (let i = 0; i < olympicRing.length; i++) {
    olympicRing[i] = `<td class='ring'>${olympicRing[i]}</td>`;
    firstRow += olympicRing[i];
  };
  firstRow += `</tr>`;

  let sportTR = `<tr>
		<td class='sport-logo'>${sportName}</td>
    <td>${newEurope.join('<br>')}</td>
    <td>${newAfrica.join('<br>')}</td>
    <td>${newAmericas.join('<br>')}</td>
    <td>${newAsia.join('<br>')}</td>
		<td>${newOceania.join('<br>')}</td>
	</tr>`;
  return sportTR;
});

let thead = `<thead>
	<tr>
		<th>Sport name</th>
		<th>Europe</th>
		<th>Africa</th>
		<th>The Americas</th>
		<th>Asia</th>
		<th>Oceania</th>
	</tr>
</thead>`;

document.write(`<table>
  ${thead}
  ${firstRow}
	${sportTRS.join('')}
</table>`);
