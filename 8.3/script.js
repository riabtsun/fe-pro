// function getMaxs(args) {
//   let max = args[0];
//   let maxArr = [];
//   for (let i = 0; i < args.length; i++) {
//     let firstLvl = args[i];
//     for (let j = 0; j < firstLvl.length; j++) {
//       if (firstLvl[j] > max) {
//         maxArr.push(firstLvl);
//       } return maxArr;
//     } return maxArr;
//   } return maxArr;
// }

args = [
  [1, 2, 3, 4, 5],
  [55, 44, 33, 22, 11],
  [11, 22, 33, 21, 10]
];
str = '';
function getMaxs(elem) {
  for (i = 0; i < elem.length; i++) {
    bigArr = elem[i];
    str += Math.max(...bigArr) + ';';
  } return str;
}

console.log(getMaxs(args))