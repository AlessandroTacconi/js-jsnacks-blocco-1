'use strict';

/*
l software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
*/

const numeri = [];

for (const i = 0; i < 10; i++) {
  const inserisciNumero = Number(prompt('Inserisci un numero'));
  numeri.push(Number(inserisciNumero));
  console.log(numeri);
}
