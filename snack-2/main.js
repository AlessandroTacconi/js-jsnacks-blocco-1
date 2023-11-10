'use strict';

const promUno = prompt('Inserisci la prima parola');
const promDue = prompt('Inserisci la seconda parola');

const lunghezzaUno = promUno.length;
const lunghezzaDue = promDue.length;

if (lunghezzaUno > lunghezzaDue) {
  console.log(promUno);
  console.log(promDue);
} else if (lunghezzaUno < lunghezzaDue) {
  console.log(promDue);
  console.log(promUno);
} else {
  ('hanno la stessa lunghezza');
}
