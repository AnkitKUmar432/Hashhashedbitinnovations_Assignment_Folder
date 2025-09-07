// 2. Write a function to calculate which can add, subtract, multiply and divide two numbers. Use switch inside function.

function calculateFn(n1, n2, action) {
    switch (action) {
        case "+":
            return n1 + n2;
        case "-":
            return n1 - n2;
        case "*":
            return n1 * n2;
        case "/":
            return n1 / n2;
        default:
            return "Invalid Input"

    }
}
let calculateBtn = document.getElementById('calculateBtn');
let resultP = document.getElementById('result');

calculateBtn.addEventListener('click', () => {
    let n1 = parseFloat(document.getElementById('num1').value);
    let n2 = parseFloat(document.getElementById('num2').value);
    let action = document.getElementById('action').value;

    if (isNaN(n1) || isNaN(n2)) {
        resultP.innerText = "Please enter valid numbers";
    } else {
        let result = calculateFn(n1, n2, action);
        resultP.innerText = `Result: ${result}`;
    }
});
console.log(calculateFn(5, 5, "/"));

