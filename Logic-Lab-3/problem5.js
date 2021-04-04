function Function(number) {
	var a = 0;
	for (var i = 0; i < number; i++) {
		var r = number % i;
		if (r == 0) {
			a += i;
		}
	}
	if (a == number) {
		window.alert(number + " is a Perfect number.");
	}
	else {
		window.alert(number + " is not a Perfect number.");
	}
}


// function perfect(a) {
// 	var sum = 0;
// 	for (var i = 1; i < a; i++) {
// 		if (a % i === 0) {
// 			sum += i;
// 		}
// 	} if (a === sum) {
// 		return 'IS PERFECT';
// 	} else {
// 		return "NOT PERFECT";
// 	}

// }
