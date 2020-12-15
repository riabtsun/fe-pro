function calc(firstNum, secondNum) {
  if (isNaN(firstNum) || isNaN(secondNum)) {
    alert(`Use only numbers!!!`)
  } else
    (console.log(`Результат ${firstNum} + ${secondNum} = ${firstNum + secondNum}`));
}

calc(+prompt(`Enter first number`), +prompt(`Enter second number`));