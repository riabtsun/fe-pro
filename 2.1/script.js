
n = +prompt(`Enter a fibonacci number`);
a = 1;
b = 1;
if (n == 1) {
	console.log(a)
} else if (n == 2) {
	console.log(`${a} , ${b}`)
} else if (n >= 3) {
	for (i = 3; i <= n; i++) {
		console.log(c = a + b)
		a = b;
		b = c;
	}
}

console.log(`*****`);

