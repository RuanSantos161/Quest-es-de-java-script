//Primeira questão

let num1 = parseFloat(prompt("Digite um número"));
let num2 = parseFloat(prompt("Digite um número"));

let soma = num1 + num2 ;

console.log ("a soma de dois numeros é:" + soma);

//Segunda questão


let num1 = parseFloat(prompt("Digite um número"));
let num2 = parseFloat(prompt("Digite um número"));

let subtração = Number1 - Number2 ;

console.log ("a subtração de dois numeros é:" + subtração);

// Terceira questão

let num1 = parseFloat(prompt("Digite um número"));
let num2 = parseFloat(prompt("Digite um número"));

let multiplicação = num1 * num2 ;

console.log ("a soma de dois numeros é:" +multiplicação);

// Quarta questão

let num1 = parseFloat(prompt("Digite um número"));
let num2 = parseFloat(prompt("Digite um número"));

let soma = num1 / num2 ;

console.log ("a soma de dois numeros é:" +divisão);

//Quinta questão

let num1 = parseFloat(prompt("Digite um número"));
let num2 = parseFloat(prompt("Digite um número"));

let modúlo = num1 % num2 ;

console.log ("o resto da divisão do {num1} por {num2} é: {resto}");

// Sexta questão

valor = 20
valor += 1
console.log ("o valor incrementado é:",valor);

//Sétima questão

valor = 20
valor -= 1
console.log ("o valor decrementado é:",valor);

//Oitava questão

let a = 999;
let b = a;
console.log(b);

// Nona questão

let x=999;
x +=10;
console.log(x);

// Décima questão

let x=999;
x -=5;
console.log(x);

// Décima primeira

let x=999;
x *=4;
console.log(x);

//Décima segunda
let x=999;
x /=2;
console.log(x);

//Décima terceira
let x=998;
x %=3;
console.log(x);

//Décima quarta
function verificarNumero() {

    let entrada = prompt("Por favor, insira um número:");

    let num = parseFloat(entrada);

    if (isNaN(num)) {
        alert("Por favor, insira um número válido.");
        return;
    }

    if (num > 0) {
        alert(num + " é um número positivo.");
    } else if (num < 0) {
        alert(num + " é um número negativo.");
    } else {
        alert(num + " é zero.");
    }
}
verificarNumero();

