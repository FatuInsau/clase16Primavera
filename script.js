// scoup --> entorno --> donde tiene sentido las variables

let perrito = 2
var num1 = 1; // -->  Variable Global
let num2 = 2; // -->  Variable Global

if (true) {
    var num1 = 100; // --> Variable Global --> pisa num1 anterior
    let num2 = 200; // --> Variable Local o de Bloque --> distinta al num2 de antes

    console.log(num1);
    console.log(num2);
}

console.log(num1);  
console.log(num2);

