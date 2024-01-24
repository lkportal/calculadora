"use strict";
const btn = document.querySelectorAll('button');
const visor = document.getElementById('visor');
const results = document.getElementById('n=');
const soma = document.getElementById('n+');
const sub = document.getElementById('n-');
const multiplicar = document.getElementById('nx');
const dividir = document.getElementById('n/');
const clear = document.getElementById('C');
let btns = '';
let armazenandoAcumulador = 0;
let result;
let numeros;
let numero2;
let char = '';
btn.forEach((element) => {
    try {
        element.addEventListener('click', (ev) => {
            const { target } = ev;
            if (target) {
                const dado1 = target.textContent;
                if (dado1) {
                    btns += dado1;
                    numero2 = parseFloat(btns);
                    visor.value = btns.toString();
                    //O sinal recebido pelo btns altera o valor do resultado das expressões 
                }
            }
        });
    }
    catch (error) {
        throw new Error("Erro de conversão");
    }
});
clear.addEventListener("click", () => {
    if (btns.includes('c') || btns.includes('C')) {
        btns = '';
        numeros = 0;
        numero2 = 0;
        result = 0;
        visor.value = '0';
    }
});
soma.addEventListener('click', () => {
    if (btns.includes("+")) {
        numeros = parseFloat(btns);
        console.log(numeros, 'vinda função +');
        console.log(btns, 'btns');
        btns = '';
        char = '+';
    }
    else {
        visor.value = '';
    }
});
sub.addEventListener('click', () => {
    if (btns.includes("-")) {
        numeros = parseFloat(btns);
        console.log(numeros, 'vinda função -');
        console.log(btns, 'btns');
        btns = '';
        char = '-';
    }
});
results === null || results === void 0 ? void 0 : results.addEventListener('click', () => {
    if (btns.includes("=")) {
        visor.value = '';
        if (char.includes('+') && btns.includes('')) {
            result = numero2 + numeros;
            armazenandoAcumulador = result;
            // if(char.includes('+') || btns != '') {
            //      console.log(armazenandoAcumulador)
            //     result = armazenandoAcumulador + numero2
            // } 
        }
        else if (char.includes('-') && btns.includes('')) {
            result = numeros - numero2;
        }
    }
    console.log(numeros, 'numero1');
    console.log(numero2, 'numero2');
    console.log(result, 'resultado');
    btns = '';
    visor.value = result.toString();
});
