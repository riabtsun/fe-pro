function calc(a, operator, b) {
  switch (operator) {
    case '+':
      console.log(`Результат: ${a} + ${b} = ${a + b}`);
      break;
    case '-':
      console.log(`Результат: ${a} + ${b} = ${a - b}`);
      break;
    case '*':
      console.log(`Результат: ${a} * ${b} = ${a * b}`);
      break;
    case '/':
      if (b == 0) {
        console.log(`You can't use 0 in this operation`);
      }
      else {
        console.log(`Результат: ${a} / ${b} = ${a / b}`)
      };
  }
}

calc(+prompt(`Enter first number`), prompt(`Select an operation '+', '-', '*', '/' `), +prompt(`Enter second number`));