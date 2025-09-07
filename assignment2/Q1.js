// 1. Write code to display from 1 to 100 but just even numbers.
let container = document.getElementById('even-numbers');

for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        let p = document.createElement('p');
        p.innerText = i;
        container.appendChild(p);
    }
}