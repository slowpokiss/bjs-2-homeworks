"use strict"

function solveEquation(a, b, c) {
	let d = b ** 2 - 4 * a * c;
	let arr = [];
	if (d > 0) {
		arr.push((-b + Math.sqrt(d)) / (2 * a));
		arr.push((-b - Math.sqrt(d)) / (2 * a));
	} if (d === 0) {
		arr.push(-b / (2 * a));
	};
	return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	percent = Number(percent / 1200);
	if (percent === NaN) {
		return false;
	}
	let body = amount - contribution;
	let monthPay = body * (percent + (percent / (((1 + percent) ** countMonths) - 1)));
	return (monthPay * countMonths).toFixed(2);
}