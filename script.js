'use strict'

/*--------------------------------------
Basic Variables ------------------------
----------------------------------------
*/

const resultContainer = document.querySelector('.result');
const controls = document.querySelector('.controls');
const experssionContainer = document.querySelector('.expression');

/*--------------------------------------
Evant Listners -------------------------
----------------------------------------
*/
console.log(resultContainer);
console.log(controls);
console.log(experssionContainer);

let result = 0;

let experssion = "";

resultContainer.textContent = result;

controls.addEventListener("click", function (e) {
    const input = e.target.textContent;
    if (input === '=') {
        console.log(experssion)
        experssion = experssion.replaceAll("^", "**")
        console.log(experssion)
        result = eval(experssion);
        resultContainer.textContent = result;
    } else if (input === 'AC') {
        result = 0;
        resultContainer.textContent = result;
        experssionContainer.textContent = '';
        experssion = ''

    } else {
        experssion += input;
        experssionContainer.textContent = experssion;
    }
});