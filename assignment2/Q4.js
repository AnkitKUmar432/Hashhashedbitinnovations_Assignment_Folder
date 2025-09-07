//4. Write a function to perform this. You are given two numbers n1 and n2. You need to find the sum of the products of their corresponding digits. So, for a number n1= 6 and n2 = 34, you'll do (6*4)+(0*3) = 24.

function sumofProducts(n1, n2) {
    let Total = 0;

    while (n1 > 0 || n2 > 0) {
        let firstRemainder = n1 % 10;
        let secondRemainder = n2 % 10;
        console.log(firstRemainder, secondRemainder);

        Total += firstRemainder * secondRemainder;
        n1 = Math.floor(n1 / 10);
        n2 = Math.floor(n2 / 10);

    }
    return Total;
}

const calculateBtn = document.getElementById('calculateBtn');
const resultP = document.getElementById('result');

calculateBtn.addEventListener('click', () => {
    let n1 = parseInt(document.getElementById('num1').value);
    let n2 = parseInt(document.getElementById('num2').value);

    if(isNaN(n1) || isNaN(n2)){
        resultP.innerText = "Please enter valid numbers";
        return;
    }

    let result = sumofProducts(n1, n2);
    resultP.innerText = `Sum of Products: ${result}`;
});