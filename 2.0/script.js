
a = +prompt(`Enter a first number`);
while (isNaN(a)) {
	alert(`${a} not a number!`);
	a = +prompt(`Enter a first number`);
}
document.write(`a = ${a}`);

b = +prompt(`Enter a larger number`);
while (isNaN(b) || a >= b) {
	alert(`${b} ? I said enter a larger number!`);
	b = +prompt(`Enter a larger number`);
}
document.write(` b = ${b}`)

h = +prompt(`Enter a step `);
while (isNaN(h)) {
	alert(`${h} is not a number`);
	h = +prompt(`Enter a step `);
}

i = a;
fact = 1;
for (summ = 0; a <= b; a = a + h) {
	while (i <= a) {
		i++;
		fact *= i - 1;
	}
	console.log(`${a}! = ${fact}`);
	summ = fact + summ;
}
console.log(`*****`);
console.log(`summ of factorials = ${summ}`)
