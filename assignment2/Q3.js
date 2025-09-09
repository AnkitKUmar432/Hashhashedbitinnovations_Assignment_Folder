// 3. You need to write a function findTax() that takes a number type variable as an argument which is the salary of a person. You need to calculate the tax amount on his salary by using the Js switch control flow. The tax rates are given below.

// if 500000 >= salary > 0 then 0% tax on the entire salary.
// If 1000000 >= salary > 500000 then 10% tax on the entire salary.
// If 1500000 >= salary > 1000000 then 20% tax on the entire salary.
// If the salary > 1500000 then 30% tax on the entire salary.

let salary = 1000000
function findTax(salary) {

    let tax = 0;

    switch (true) {

        case (500000 >= salary && salary > 0):
            tax = 0;
            break;
        case (salary > 500000 && 1000000 >= salary):
            tax = salary * 0.10;
            break;
        case (salary > 1000000 && 1500000 >= salary):
            tax = salary * 0.20;
            break;
        case (1500000 < salary):
            tax = salary * 0.30;
            break;

    }
    return tax;


}


const calculateBtn = document.getElementById('calculateBtn');
const result = document.getElementById('result');

calculateBtn.addEventListener('click', () => {
    let salary = parseFloat(document.getElementById('salaryInput').value);
    if(isNaN(salary) || salary <= 0){
        result.innerText = "Please enter a valid salary greater than 0";
        return;
    }

    const tax = findTax(salary);
    const netSalary = salary - tax;

    result.innerText = `Total Salary: ₹${salary.toLocaleString()}, Tax: ₹${tax.toLocaleString()}, Net Salary: ₹${netSalary.toLocaleString()}`;
});
