"use strict"

function solveEquation(a, b, c) {
	const d = b ** 2 - 4 * a * c;
	const arr = [];
	if (d > 0) {
		arr.push((-b + Math.sqrt(d)) / (2 * a));
		arr.push((-b - Math.sqrt(d)) / (2 * a));
	} if (d === 0) {
		arr.push(-b / (2 * a));
	};
	return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	const arr = [percent, contribution, amount, countMonths];
	for (let i = 0; i < arr.length; i++) {
		Number(i);
		if (typeof(arr[i]) !== 'number') {
			return false;
		}
	}

	percent = Number(percent / 1200);
	const body = amount - contribution;
	const monthPay = body * (percent + (percent / (((1 + percent) ** countMonths) - 1)));
	return (monthPay * countMonths).toFixed(2);
}
