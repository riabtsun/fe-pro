function square(num) {
  return num * num;
}

function sum(a, b) {
  return a + b;
}

function main(a, b, c) {
  let resultSumm = sum(a, b);
  if (typeof c === 'function') {
    return c(resultSumm);
  }
  return sum;
}

main(1, 2, 3);


