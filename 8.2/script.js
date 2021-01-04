const users = [
  ["John", "red", 5, ["ball", "book", "pen"]],
  ["Becky", "bue", 10, ["tape", "backpack", "pen"]],
  ["Susy", "red", 55, ["ball", "eraser", "pen"]],
  ["Tyson", "green", 1, ["book", "pen"]]
];


let usersExclam = [];
users.forEach(exclam);
function exclam(user) {
  let userName = `${user[0]}!`;
  usersExclam.push(userName);
  return usersExclam;
}
// console.log(usersExclam);

let usersQuest = users.map(question);
function question(user) {
  return user[0] + `?`;
}
// console.log(usersQuest);

let redArr = users.filter(redTeam);
function redTeam(color) {
  userColor = color[1];
  if (userColor === 'red') {
    return color;
  }
}
// console.log(redArr);

function UsersScoreSum(users) {
  let score = 0;
  users.forEach(function (user) {
    score += user[2];
  });
  return score;
};

const finalScore = UsersScoreSum(redArr);

let tableHtml = '<table>';
tableHtml += `<thead>`;
tableHtml += "<tr><th>Name</th><th>Color</th><th>Score</th><th>Items</th></tr>";
tableHtml += `</thead>`;
redArr.forEach(function (user) {
  const userName = user[0];
  const userColor = user[1];
  const userScore = user[2];
  const userItems = user[3];
  tableHtml += `<tr>`;
  tableHtml += `<td>${userName}</td>`;
  tableHtml += `<td>${userColor}</td>`;
  tableHtml += `<td>${userScore}</td>`;
  tableHtml += `<td>${userItems.toString()}</td>`;
  tableHtml += `</tr>`;
});
tableHtml += `<tfoot><tr><td>Final sum = ${finalScore} </td></tr></tfoot>`;
tableHtml += '</table>';

document.write(tableHtml);
