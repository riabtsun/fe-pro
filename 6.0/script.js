firstCar = `<img class='car' src="./images/cars/first.svg">`;
secondCar = `<img class='car' src="./images/cars/second.svg">`;
thirdCar = `<img class='car' src="./images/cars/third.svg">`;
fourthCar = `<img class='car' src="./images/cars/fourth.svg">`;
blueHome = `<img class="home" src="./images/home--blue.svg" alt=""home>`
pinkHome = `<img class="home" src="./images/home--pink.svg" alt=""home>`
purpleHome = `<img class="home" src="./images/home--purple.svg" alt=""home>`

trs = [];
for (i = 0; i < 3; i++) {
  tds = [];
  for (j = 0; j < 5; j++) {
    td = `<td></td>`;
    if (i == 0) {
      td = `<td style="height:50px"></td>`;
      if (j == 1) {
        td = `<td style="height:50px">
          ${firstCar}
          ${secondCar}
        </td>`;
      } else if (j == 2) {
        td = `<td style="height:50px">
        ${thirdCar}
        ${fourthCar}
        ${secondCar}
        </td>`;
      } else if (j == 3) {
        td = `<td style="height:50px">
        ${fourthCar}
        ${firstCar}
        </td>`;
      }
    } else {
      td = `<td style="height:100px"></td>`;
    }
    if (i == 1) {
      if (j == 1) {
        td = `<td style="display:flex; flex-direction: column">
          <div>${blueHome}${blueHome}</div>
          <div>${blueHome}${blueHome}</div>
          <div>${blueHome}${blueHome}</div>
          </td>`;
      }
      // else if (j == 2) {
      //   td = `<td style="display:flex; flex-direction: column">
      //   <div>${pinkHome}${pinkHome}</div>
      //   <div>${pinkHome}${pinkHome}</div>
      //   <div>${pinkHome}${pinkHome}</div>
      //   </td>`;
      // }
      // else if (j == 3) {
      //   td = `<td style="display:flex; flex-direction: column">
      //   <div>${purpleHome}${purpleHome}</div>
      //   <div>${purpleHome}${purpleHome}</div>
      //   <div>${purpleHome}${purpleHome}</div>
      //   </td>`;
      // }
    }
    if (i == 2) {
      if (j == 1) {
        td = `<td><img style="width:150px; object-fit: cover" src="./images/football-field.svg" alt="football field"></td>`;
      } else if (j == 2) {
        td = `<td style="background-color:blue;"><img style="width:150px; object-fit: cover" src="./images/whale.svg" alt="whale"></td>`;
      } else if (j == 3) {
        td = `<td><img style="max-width:150px; object-fit: cover" src="./images/ice-hockey.svg" alt="ice-hockey"></td>`;
      }
    }
    tds.push(td);
  }
  tr = `<tr>${tds.join('')}</tr>`;
  trs.push(tr);
}


table = `<table></table>`;
console.log(trs);
document.write(`<table class="kvartal">${trs.join('')}</table>`)