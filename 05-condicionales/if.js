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
