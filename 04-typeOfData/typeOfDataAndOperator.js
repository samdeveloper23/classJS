'use stritc';
//  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@     OPERADORES Y TIPOS DE DATOS     @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

//  OPERADORES ARITMETICOS BÁSICOS.

const numberOne = 5;
const numberTwo = 10;
//  +   sumar
const operator = numberOne + numberTwo // valor 15, con el operador '+' sumamos o concatenamos 'suma para los tipo NUMBER y concatenación para los tipo STRING'.
//  -   restar
const operatorTwo = numberOne - numberTwo
// *    multiplicar
const operatorTree = numberOne * numberTwo
//  /   dividir
const operatorFour = numberOne / numberTwo
//  %   porcetaje de resultado
const operatorFive = numberOne % numberTwo

console.log(`El resultado de la operación es: ${operator}`);

//  TIPOS DE DATOS.

//  number
const numeros_enteros = 20;
//  string
const cadenas_texto = 'hola mundo';
//  boolean
const verdadero_o_falso = true; // o 'false'  EXTRA: 0 = false, 1 = true
//  funcion Number
const numero_string = '22';

console.log(numero_string + 7); // valor 227, concatena el string 22 con el numero entero 7.
console.log(Number(numero_string + 7)); // valor 29, a pasar el valor inicial de string a number, este se puede manipular como tal haciendo el valor de la operación.

// 'parseInt' para numeros enteros.
// 'parseFloat' para numeros con decimales. 

//  función String
console.log(String(numeros_enteros + 10)); // valor 2010, a pasar de numero a cadena de texto (string) podemos optar por la concatenación.

// TYPEOF
//  con el método 'typeof' obtenemos el tipo de dato que le asignamos.
console.log(typeof numeros_enteros);    //  NUMBER
console.log(typeof numero_string);      //  STRING
console.log(typeof verdadero_o_falso);  //  BOOLEAN
console.log(typeof cadenas_texto);      //  STRING
 