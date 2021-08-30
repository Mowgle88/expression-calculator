function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {
    // write your solution here

    let arr = expr.trim().split(' ');

	if(arr.length === 1) {
		arr =arr.join('').split('');
	}
	

	if(expr.indexOf('(') >= 0 || expr.indexOf(')') >= 0) {
		
		let a = expr.indexOf('(');
		let b = expr.indexOf(')');
		let intermed = expr.slice(a+1, b).trim().split(' ');

		let interRes = +intermed[0];
		let interStack = 0;
		
		for(let i = 2; i < intermed.length; i+=2) {
		
		if(intermed[i-1] === '-') {
			if(intermed[i+1] === '/' || intermed[i+1] === '*') {
				interStack -= +intermed[i];
				interStack = interStack.toString();
				continue;
			}
			interRes -= +intermed[i];
			
		} else if(intermed[i-1] === '+') {
			if(intermed[i+1] === '/' || intermed[i+1] === '*') {
				interStack += +intermed[i];
				interStack = interStack.toString();
				continue;
			}
			interRes += +intermed[i];
			
		} else if(intermed[i-1] === '*') {
			if(interStack !== 0) {
				interStack *= +intermed[i];
				continue;
			}
			interRes *= +intermed[i];
			
		} else if(intermed[i-1] === '/') {
			if(interStack !== 0) {
				interStack /= +intermed[i];
				continue;
			} 
			interRes /= +intermed[i];
		}
	}
		
	interRes = interRes + interStack;

	arr = (expr.slice(0, a) + interRes + expr.slice(b+1)).trim().split(' ');
}

	let res = +arr[0];
	let stack = 0;

	for(let i = 2; i < arr.length; i+=2) {
		
		if(arr[i-1] === '-') {
			if(arr[i+1] === '/' || arr[i+1] === '*') {
				stack -= +arr[i];
				stack = stack.toString();
				continue;
			}
			res -= +arr[i];
			
		} else if(arr[i-1] === '+') {
			if(arr[i+1] === '/' || arr[i+1] === '*') {
				stack += +arr[i];
				stack = stack.toString();
				continue;
			}
			res += +arr[i];
			
		} else if(arr[i-1] === '*') {
			if(stack !== 0) {
				stack *= +arr[i];
				continue;
			}
			res *= +arr[i];
			
		} else if(arr[i-1] === '/') {
			if(stack !== 0) {
				stack /= +arr[i];
				continue;
			} 
			res /= +arr[i];
		}
		console.log(res)
	}
	res = res + stack;
	
	return res;

}

module.exports = {
    expressionCalculator
}