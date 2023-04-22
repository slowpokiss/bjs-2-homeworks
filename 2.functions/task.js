
// 1st task
function getArrayParams(...arr) {
	let min = Infinity;
	let max = -Infinity;
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > max) {
			max = arr[i];
		} 
		if (arr[i] < min) {
			min = arr[i];
		} 
		sum += arr[i];
	}
	return {max, min, avg: Number((sum / arr.length).toFixed(2))};
}

// 2nd task

function summElementsWorker(...mass) {
	if (mass.length > 0) {
		return mass.reduce(function (s, i) {return s + i});
	} else {
		return 0;
	}
}

function differenceMaxMinWorker (...mass) {
	if (mass.length > 0) {
		return Math.max(...mass) - Math.min(...mass);
	} else {
		return 0;
	}
}

function differenceEvenOddWorker (...mass) {
	if (mass.length > 0) {
	let sumEvenElement = sumOddElement = 0;
	mass.forEach(function (i) {(i % 2 === 0) ? sumEvenElement+= i : sumOddElement+= i});
	return sumEvenElement - sumOddElement;
	} else {
		return 0;
	}
}

function averageEvenElementsWorker(...mass) {
	if (mass.length > 0) {
		let sumEvenElement = countEvenElement = 0;
		mass.forEach(function (i) {
			if (i % 2 === 0) {
				sumEvenElement+= i;
				countEvenElement++;
			}});
		return sumEvenElement / countEvenElement;
	} else {
		return 0;
	}
}	


// 3rd task

function makeWork(arrOfArr, func) {
	let maxWorkerResult = -Infinity;

	for (let i = 0; i < arrOfArr.length; i++) {
		let maxim = func(...arrOfArr[i]);
		if (maxim > maxWorkerResult) {
			maxWorkerResult = maxim;
		}
	}
	return maxWorkerResult;
}

