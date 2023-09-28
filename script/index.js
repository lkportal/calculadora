"use strict";
const btn = document.querySelectorAll('button');
const visor = document.getElementById('visor');
const ptext = document.getElementById('p');
const results = document.getElementById('n=');
let btns = '';
let result;
let numbs1;
let sum2;
btn.forEach((element) => {
    element.addEventListener('click', (ev) => {
        const { target } = ev;
        if (target) {
            const dado1 = target.textContent;
            dado1 ? btns += dado1 : 'erro';
            if (dado1 == '+') {
                numbs1 = btns.split('');
                btns = '';
            }
            else if (dado1 == '=') {
                btns = '';
            }
            results === null || results === void 0 ? void 0 : results.addEventListener('click', (event) => {
                console.log(numbs1);
            });
            visor.value = btns.toString();
        }
    });
});
