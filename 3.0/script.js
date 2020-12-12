console.log(`*****EX-1*****`);

A = [], B = [];

A.length = 10;
B.length = 10;

for (i = 0, max = 10; i < A.length && i < B.length; i++) {
	A[i] = Math.floor(Math.random() * Math.floor(max));
	B[i] = Math.floor(Math.random() * Math.floor(max));
}
console.log(A);
console.log(B);

for (x = 0; x < A.length; x++) {
	for (y = 0; y < B.length; y++) {
		if (A[x] == B[y]) {
			console.log(`${A[x]} = ${B[y]}`);
			break;
		}
	}
}
console.log(`*****EX-2*****`);
arrA = new Array(15);
arrB = new Array();

for (i = 0, max = 100; i < arrA.length; i++) {
	arrA[i] = Math.floor(Math.random() * Math.floor(max));
	prime = true;
	for (j = 2; j < arrA[i]; j++) {
		if (arrA[i] % j == 0) {
			prime = false;
			break;
		}
	}
	if (prime) {
		arrB.push(arrA[i]);
	}
}
console.log(arrA);
console.log(arrB);

console.log(`*****EX-2b*****`);

console.log(arrB);

for (i = 0, minIndex = 0, maxIndex = 0; i < arrB.length; i++) {
	if (arrB[i] < arrB[minIndex]) {
		minIndex = i;
	}
	if (arrB[i] > arrB[maxIndex]) {
		maxIndex = arrB[i]; // не могу понять почему когда я писал maxIndex = i, то цикл сразу останавливается
	}
}
console.log(`min element = ${arrB[minIndex]}, max element = ${maxIndex}`);

console.log(`*****EX-3*****`);

arrC = new Array(10);
arrD = new Array()
for (i = 0, max = 100; i < arrC.length; i++) {
	arrC[i] = Math.floor(Math.random() * Math.floor(max));
}
for (i = 0, minIndex = 0, maxIndex = 0; i < arrC.length; i++) {
	if (arrC[i] < arrC[minIndex]) {
		minIndex = i;
	}
	if (arrC[i] > arrC[maxIndex]) {
		maxIndex = i;
	}

}
for (i = 0; i < arrC.length; i++)
	if (arrC[i] !== arrC[minIndex] && arrC[i] !== arrC[maxIndex]) {
		arrD[i] = arrC[i];
	}


console.log(arrC);
console.log(`min element = ${arrC[minIndex]}, max element = ${arrC[maxIndex]}`);
console.log(arrD);

console.log(`*****EX-4*****`);

arrE = new Array(10);

for (i = 0, max = 100; i < arrE.length; i++) {
	arrE[i] = Math.floor(Math.random() * Math.floor(max));
}
for (i = 0, minIndex = 0, maxIndex = 0; i < arrE.length; i++) {
	if (arrE[i] < arrE[minIndex]) {
		minIndex = i;
	}
	if (arrE[i] > arrE[maxIndex]) {
		maxIndex = i;
	}
}
console.log(arrE);
console.log(`min element = ${arrE[minIndex]}, max element = ${arrE[maxIndex]}`);


