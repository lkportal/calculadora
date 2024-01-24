/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./script/index.ts":
/*!*************************!*\
  !*** ./script/index.ts ***!
  \*************************/
/***/ (() => {

eval("\nconst btn = document.querySelectorAll('button');\nconst visor = document.getElementById('visor');\nconst results = document.getElementById('n=');\nconst soma = document.getElementById('n+');\nconst sub = document.getElementById('n-');\nconst multiplicar = document.getElementById('nx');\nconst dividir = document.getElementById('n/');\nconst clear = document.getElementById('C');\nlet btns = '';\nlet armazenandoAcumulador = 0;\nlet result;\nlet numeros;\nlet numero2;\nlet char = '';\nbtn.forEach((element) => {\n    try {\n        element.addEventListener('click', (ev) => {\n            const { target } = ev;\n            if (target) {\n                const dado1 = target.textContent;\n                if (dado1) {\n                    btns += dado1;\n                    numero2 = parseFloat(btns);\n                    visor.value = btns.toString();\n                    //O sinal recebido pelo btns altera o valor do resultado das expressões \n                }\n            }\n        });\n    }\n    catch (error) {\n        throw new Error(\"Erro de conversão\");\n    }\n});\nclear.addEventListener(\"click\", () => {\n    if (btns.includes('c') || btns.includes('C')) {\n        btns = '';\n        numeros = 0;\n        numero2 = 0;\n        result = 0;\n        visor.value = '0';\n    }\n});\nsoma.addEventListener('click', () => {\n    if (btns.includes(\"+\")) {\n        numeros = parseFloat(btns);\n        console.log(numeros, 'vinda função +');\n        console.log(btns, 'btns');\n        btns = '';\n        char = '+';\n    }\n    else {\n        visor.value = '';\n    }\n});\nsub.addEventListener('click', () => {\n    if (btns.includes(\"-\")) {\n        numeros = parseFloat(btns);\n        console.log(numeros, 'vinda função -');\n        console.log(btns, 'btns');\n        btns = '';\n        char = '-';\n    }\n});\nresults === null || results === void 0 ? void 0 : results.addEventListener('click', () => {\n    if (btns.includes(\"=\")) {\n        visor.value = '';\n        if (char.includes('+') && btns.includes('')) {\n            result = numero2 + numeros;\n            armazenandoAcumulador = result;\n            // if(char.includes('+') || btns != '') {\n            //      console.log(armazenandoAcumulador)\n            //     result = armazenandoAcumulador + numero2\n            // } \n        }\n        else if (char.includes('-') && btns.includes('')) {\n            result = numeros - numero2;\n        }\n    }\n    console.log(numeros, 'numero1');\n    console.log(numero2, 'numero2');\n    console.log(result, 'resultado');\n    btns = '';\n    visor.value = result.toString();\n});\n\n\n//# sourceURL=webpack://calculadora/./script/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./script/index.ts"]();
/******/ 	
/******/ })()
;