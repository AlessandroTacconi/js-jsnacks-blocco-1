/*
Crea un array vuoto e chiedi all’utente un numero da inserire nell’array. 
Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando la somma degli elementi è inferiore di 50.
*/

'use strict';

const arrayVuoto = [];

let numero = 0;

while (numero < 50) {
  let chiediNumero = prompt('inserisci un numero');
  arrayVuoto.push(chiediNumero);
  numero += +chiediNumero;
}

console.log('array', arrayVuoto);
console.log('somma', numero);
