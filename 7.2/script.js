
function biggerArr(a, b) {
  sumA = 0;
  sumB = 0;
  for (i = 0, j = 0; i < a.length, j < b.length; i++, j++) {
    if (typeof a[i] === 'number') {
      sumA += a[i];
    } if (typeof b[j] === 'number') {
      sumB += b[j];
    }
  }
  // console.log(sumA, sumB);
  if (sumA < sumB) {
    return sumB;
  } else {
    return sumA;
  }
  console.log(sumA, sumB);
}

a = [1, 2, 3, 'hello', 4, 5];
b = [1, 2, 3, true, 4, undefined, 6];
biggerArr(a, b);