"use strict";
const btn = document.querySelectorAll('button');
const visor = document.getElementById('visor');
const ptext = document.getElementById('p');
const results = document.getElementById('n=');
const soma = document.getElementById('n+');
const sub = document.getElementById('n-');
const multiplicar = document.getElementById('nx');
const dividir = document.getElementById('n/');
let btns = '';
let result;
let operado;
let numeros;
let numero2;
const regex = /[^\W]/gi;
btn.forEach((element) => {
    element.addEventListener('click', (ev) => {
        const { target } = ev;
        if (target) {
            const dado1 = target.textContent;
            if (dado1) {
                btns += dado1;
                numeros = parseFloat(btns);
            }
        }
        visor.value = btns.toString();
    });
});
soma.addEventListener('click', () => {
    if (result) {
        numeros = result;
    }
    numero2 = numeros;
    operado = btns;
    btns = '';
});
sub.addEventListener('click', () => {
    if (result) {
        numeros = result;
    }
    numero2 = numeros;
    operado = btns;
    btns = '';
});
multiplicar.addEventListener('click', () => {
    if (result) {
        numeros = result;
    }
    numero2 = numeros;
    operado = btns;
    btns = '';
});
dividir.addEventListener('click', () => {
    if (result) {
        numeros = result;
    }
    numero2 = numeros;
    operado = btns;
    btns = '';
});
results === null || results === void 0 ? void 0 : results.addEventListener('click', () => {
    if (operado.includes('+')) {
        result = numeros + numero2;
    }
    else if (operado.includes('-')) {
        numeros > numero2 ? result = numeros - numero2 : result = numero2 - numeros;
    }
    else if (operado.includes('x')) {
        result = numero2 * numeros;
    }
    else if (operado.includes('/')) {
        result = numero2 / numeros;
    }
    btns = '';
    visor.value = result.toString();
});
