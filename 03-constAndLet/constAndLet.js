'use strict';
//  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@     TIPOS DE VARIABLES      @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

//  ##############    VAR    ###############

var number = 40; // valor 40
console.log(number);

if(true){
    var number = 50; 
    console.log(number); // valor 50
}

console.log(number); // valor 50
//  las variables declaradas con VAR se puede manipular su contenido global desde ambito local.

//================================================================================================================//

//  ############    LET    ############

const text = 'hi world';
console.log(text); // valor 'hi world'

if(true){
    let text = 'hola mundo'; // valor 'hola mundo'
    console.log(text);
}

console.log(text); // valor 'hi world'
//  Las variables declaradas con LET dentro de ambito local se reescriben pero recuperan su valor original cuando estas vuelven a estar en ambito global.

//============================================================================================≈======================//

//  ###########     CONST    ###########

// Las variables declaradas con CONST no se pueden variar su valor.

let web = 'https://www.google.com';
web = 'https://www.amazon.com';
console.log(web); //    Se sobrescribirá dando como resultado 'amazon.com'

const ip = '8.8.8.8'
ip = '0.0.0.0;'
console.log(ip); //     NO se puede sobrescribir la variable CONST dando como resultado fallo en el navegador (ver consola de dependencias de desarrollo).
