let roadV = `<td class="road-v"></td>`;
let grass = `<td class="grass"></td>`;
let roadG = `<tr><td colspan="9" class="road-g"></td></tr>`;

function topRow() {
  let topRow = `<tr>
  ${grass}
  ${roadV}
  <td class="parking">
    <img class="auto" src="./images/cars/first.svg" alt="car">
    <img class="auto" src="./images/cars/second.svg" alt="car">
  </td>
  ${roadV}
  <td class="parking">
    <img class="auto" src="./images/cars/third.svg" alt="car">
    <img class="auto" src="./images/cars/fourth.svg" alt="car">
    <img class="auto" src="./images/cars/second.svg" alt="car">
  </td>
  ${roadV}
  <td class="parking">
    <img class="auto" src="./images/cars/fourth.svg" alt="car">
    <img class="auto" src="./images/cars/first.svg" alt="car">
  </td>
  ${roadV}
  ${grass}
</tr>`;
  return topRow;
}

function homeBlock(color) {
  let houseImg = `<img class="home" src="./images/home--${color}.svg" alt="blue house">`;
  let nearHouse = `
    <tr>
      <td class="empty"></td>
      <td class="house">${houseImg}</td>
      <td class="house">${houseImg}</td>
      <td class="empty"></td>
    </tr>`;
  let table = `<table class="home-block">
  ${nearHouse}
  <tr>
  <td class="house">${houseImg}</td>
  <td colspan='2' class="empty"></td>
  <td class="house">${houseImg}</td>
  </tr>
  ${nearHouse}
</table>`
  return table;
}

function midRow() {
  let midRow = `
  <tr>
    ${grass}
    ${roadV}
    <td>${homeBlock('blue')}</td>
    ${roadV}
    <td>${homeBlock('pink')}</td>
    ${roadV}
    <td>${homeBlock('purple')}</td>
    ${roadV}
    ${grass}
  </tr>`;
  return midRow;
}

function rest(tdClass) {
  let rest = `
  <td class='${tdClass}'></td>`;
  return rest
}

function bottomRow() {
  let bottomRow = `
  <tr>
  ${grass}
  ${roadV}
  ${rest(`football`)}
  ${roadV}
  ${rest(`ocean`)}
  ${roadV}
  ${rest('hockey')}
  ${roadV}
  ${grass}
  `;
  return bottomRow;
}

let kvartal = `<table class="kvartal">${topRow()}${roadG}${midRow()}${roadG}${bottomRow()}</table >`;
document.write(kvartal);

