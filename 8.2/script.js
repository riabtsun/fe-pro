const users = [
  ["John", "red", 5, ["ball", "book", "pen"]],
  ["Becky", "bue", 10, ["tape", "backpack", "pen"]],
  ["Susy", "red", 55, ["ball", "eraser", "pen"]],
  ["Tyson", "green", 1, ["book", "pen"]]
];

function getUserNamesWithSign(users, sign) {
  const newUsersOne =  [];
  users.forEach(function(user) {
    const userName = `${user[0]}${sign}`;

    newUsersOne.push(userName)
  });

  return newUsersOne;
}

function filterUsers(users, filterValue) {
  // const filteredUsers = [];
  // users.forEach(function(user) {
  //   const filtered = user.filter(function(userItem) {
  //     return userItem === filterValue;
  //   });
  //
  //   if (filtered.length > 0) {
  //     filteredUsers.push(user);
  //   }
  // });
  // return filteredUsers;

  // return users.filter(function(user) {
  //   const filtered = user.filter(function(userItem) {
  //     return userItem === filterValue;
  //   });
  //   return filtered.length > 0;
  // });

  return users.filter(function(user) {
    return user[1] === filterValue;
  });
};

function getUsersScoreSum(users) {
  let score = 0;

  users.forEach(function (user) {
    score += user[2];
  });

  return score;
};

const filteredUsers = filterUsers(users, 'red');
const finalScore = getUsersScoreSum(filteredUsers);

console.log(getUserNamesWithSign(users, '!'));
console.log(getUserNamesWithSign(users, '?'));

let tableHtml = '<table>';
tableHtml += `<thead>`;
tableHtml += "<tr><th>Name</th><th>Color</th><th>Score</th><th>Items</th></tr>";
tableHtml += `</thead>`;
filteredUsers.forEach(function (user) {
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
tableHtml += `<tfoot>Final sum ${finalScore}</tfoot>`;
tableHtml += '</table>';

document.write(tableHtml);
