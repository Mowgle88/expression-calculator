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
		
		let interRes = result (intermed)

		arr = (expr.slice(0, a) + interRes + expr.slice(b+1)).trim().split(' ');
	}

	let res = result (arr)

	return res;

}

function result (array) {

	let arr = array;
	let res = +arr[0];
	let stack = 0;

	for(let i = 2; i < arr.length; i+=2) {
		
		if(arr[i-1] === '-') {
			if(arr[i+1] === '/' || arr[i+1] === '*') {
				if(stack !== 0) {
					res += stack;
					stack = 0;
				}
				stack -= +arr[i];
				stack = stack.toString();
				continue;
			}
			res -= +arr[i];
			
		} else if(arr[i-1] === '+') {
			if(arr[i+1] === '/' || arr[i+1] === '*') {
				if(stack !== 0) {
					res += stack;
					stack = 0;
				}
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