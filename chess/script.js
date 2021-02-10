trs = [];
alphabet = `abcdefgh`;
alphabet = alphabet.split('');
figures = ['rook', 'horse', 'bishop', 'queen', 'king', 'bishop', 'horse', 'rook']

for (i = 1; i <= 8; i++) {
  tds = [];
  for (j = 1; j <= 8; j++) {
    figure = '';
    if (i == 2) {
      figure = `<img src="./images/chess/black/pawn.svg" alt="pawn">`;
    } else if (i == 7) {
      figure = `<img src="./images/chess/white/pawn.svg" alt="pawn">`;
    } else if (i == 1) {
      figure = `<img src="./images/chess/black/${figures[j - 1]}.svg" alt="pawn">`;
    } else if (i == 8) {
      figure = `<img src="./images/chess/white/${figures[j - 1]}.svg" alt="pawn">`;
    }

    td = `<td data-id="${alphabet[j - 1]}${i}">${figure}</td>`;
    tds.push(td);
  }
  tr = `<tr><td>${i}</td>${tds.join('')}<td>${i}</td></tr>`;
  trs.push(tr);
}

letters = [];
for (letter = 0; letter < alphabet.length; letter++) {
  letters.push(`<td>${alphabet[letter]}</td>`);
}

lettersRow = `<tr><td></td>${letters.join('')}</tr>`;

document.write(`
<table class="board">
  ${lettersRow}
    ${trs.join('')}
  ${lettersRow}
</table>`);