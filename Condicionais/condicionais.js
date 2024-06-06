var x = 10;

if (x > 5) {
    console.log("x é maior que 5");
}
// Saída: x é maior que 5


var x = 10;

if (x < 5) {
    console.log("x é menor que 5");
} else if (x > 5) {
    console.log("x é maior que 5");
} else {
    console.log("x é igual a 5");
}
// Saída: x é maior que 5


let color = 'verde';

switch (color) {
    case 'vermelho':
        console.log("A cor é vermelha");
        break;
    case 'azul':
        console.log("A cor é azul");
        break;
    case 'verde':
        console.log("A cor é verde");
        break;
    default:
        console.log("Cor desconhecida");
}
// Saída: A cor é verde
