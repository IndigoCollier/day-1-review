// ✅ Final Challenge

// 1. Create a calculator function
// Should accept 3 arguments: num1, operator (+, -, *, /), num2

function calcMath (num1, operator, num2) {
if (operator === '+') {
    return num1 + num2;
} else if (operator === '-') {
    return num1 - num2;
  } else if (operator === '*') {
    return num1 * num2;
  } else if (operator === '/') {
    if (num2 === 0) {
      return 'Error';
    }
    return num1 / num2;
  } else {
    return 'Error';
  }
}
// 2. Loop through object data
let obj = {}
for (let key in obj) {
    console.log(`${key}: ${obj[key]}`);
}


  
// 3. Add nested conditions
  