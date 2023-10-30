'use strict';
//  @@@@@@@@@@@@@@@@@@@@@@@@@@@@    CONDICIONALES   @@@@@@@@@@@@@@@@@@@@@@@@@@@@

/*
                                            '>'   mayor qué
                                            '<'   menor qué
                                            '>='  mayor o igual qué
                                            '<='  menor o igual qué
                                            '=='  igual qué
                                            '!='  distinto qué
                                            '===' extrictamente igual
                                            '!==' extrictamente diferente
*/

//  ############    IF    ###############
//condicional: estructura de control que nos permite comparar. (si A es igual a B, haz algo). A == B
const edad1 = 33; // cambiar la edad para las distintas condicionáles.
const edad2 = 16;
//  si pasa esto--1
if (edad1 >= edad2) {
    // haz esto--2
    console.log('edad1 es mayor que edad2');
    if (edad1 <= 33) {
        console.log('Todabía eres joven');
    } else if (edad1 >= 40){
        console.log('A comerse el mundo!');
    } else {
        console.log('Toca cuidarse');
    }
} else{
    console.log('edad1 es nemor que edad2');
}

/**
 * ############ OPERADORES LÓGICOS  ##############
 * 
 * && = AND (Y)
 * || = OR (O)
 * !  = negación
 * 
 */
const year = 2023;
//  negación
if (year != 2013) {
    console.log('No! Estámos en el 2023.');
}
// OR
if (year == 2012 || year == 2023) {
    console.log('Cómo no es 2012 pasa a la siguente condición, la cuál si se cumpre a ser 2023.');
}
//  AND
if (year != 2012 && year == 2023) {
    console.log('La condición se cumpre en ambos casos por lo que se ejecuta esta linea.');
}

// También podremos enlazár
const six = 6
if (six == 8 || (six >= 3 && six <=9)) {
    console.log('Se cumpre la segunda condición');
}else{
    console.log('Si cambiámos el valor de "six" a "2", entonces no se cumpriría.');
}

//  ############### SWING #################
const edad = 18;
const imprime = '';

switch (edad) {
    case 18:
        imprime = 'Tiene 18 años';
        break;
    case 19:
        imprime = 'Tiene 19 años';
        break;
    default:
        break;
}