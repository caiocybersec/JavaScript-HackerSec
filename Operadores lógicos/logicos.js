/*
E lógico (AND) - &&

Retorna verdadeiro se ambos os operandos forem verdadeiros.
Exemplo:
javascript
Copiar código
let a = true;
let b = false;
console.log(a && b); // false
------------------------------------------------------------------------------
OU lógico (OR) - ||

Retorna verdadeiro se pelo menos um dos operandos for verdadeiro.
Exemplo:
javascript
Copiar código
let a = true;
let b = false;
console.log(a || b); // true
----------------------------------------------------------------------------------------------
NÃO lógico (NOT) - !

Retorna verdadeiro se o operando for falso e vice-versa.
Exemplo:
javascript
Copiar código
let a = true;
console.log(!a); // false
----------------------------------------------------------------------------------------------
Operadores de Comparação
Além dos operadores lógicos, os operadores de comparação também são usados frequentemente para avaliações booleanas:

Igualdade (==)

Compara se os valores dos dois operandos são iguais, sem considerar o tipo.
Exemplo:
javascript
Copiar código
let a = 5;
let b = '5';
console.log(a == b); // true
----------------------------------------------------------------------------------------------
Igualdade Estrita (===)

Compara se os valores e os tipos dos dois operandos são iguais.
Exemplo:
javascript
Copiar código
let a = 5;
let b = '5';
console.log(a === b); // false
----------------------------------------------------------------------------------------------
Desigualdade (!=)

Compara se os valores dos dois operandos não são iguais, sem considerar o tipo.
Exemplo:
javascript
Copiar código
let a = 5;
let b = '5';
console.log(a != b); // false
----------------------------------------------------------------------------------------------
Desigualdade Estrita (!==)

Compara se os valores e os tipos dos dois operandos não são iguais.
Exemplo:
javascript
Copiar código
let a = 5;
let b = '5';
console.log(a !== b); // true
----------------------------------------------------------------------------------------------
Maior que (>)

Compara se o valor do operando à esquerda é maior que o valor do operando à direita.
Exemplo:
javascript
Copiar código
let a = 10;
let b = 5;
console.log(a > b); // true
----------------------------------------------------------------------------------------------
Maior ou Igual que (>=)

Compara se o valor do operando à esquerda é maior ou igual ao valor do operando à direita.
Exemplo:
javascript
Copiar código
let a = 5;
let b = 5;
console.log(a >= b); // true
----------------------------------------------------------------------------------------------
Menor que (<)

Compara se o valor do operando à esquerda é menor que o valor do operando à direita.
Exemplo:
javascript
Copiar código
let a = 5;
let b = 10;
console.log(a < b); // true
----------------------------------------------------------------------------------------------
Menor ou Igual que (<=)

Compara se o valor do operando à esquerda é menor ou igual ao valor do operando à direita.
Exemplo:
javascript
Copiar código
let a = 5;
let b = 5;
console.log(a <= b); // true
----------------------------------------------------------------------------------------------
Operador Condicional (Ternário)
O operador ternário é uma forma compacta de fazer uma condição if-else em uma única linha:

Ternário (condição ? expr1 : expr2)
Retorna expr1 se a condição for verdadeira; caso contrário, retorna expr2.
Exemplo:
javascript
Copiar código
let a = 10;
let b = 5;
let max = (a > b) ? a : b;
console.log(max); // 10
*/