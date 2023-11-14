'use strict';

/*
Fai inserire un numero, che chiameremo N, all’utente.
Genera N array, ognuno formato da 10 numeri casuali tra 1 e 100. Ogni volta che ne crei uno, stampalo a schermo.
*/

const nPrompt = parseInt(prompt('Inserisci un numero:'));

for (let i = 0; i < nPrompt; i++) {
  let arrayUtente = [];
  for (let x = 0; x < 10; x++) {
    arrayUtente.push(Math.floor(Math.random() * 100) + 1);
  }

  alert(`${i}: ${arrayUtente}`);
}
