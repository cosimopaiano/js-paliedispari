// verifica corretto import script
console.log('me js is here');

 /**
  * Esercizio parte prima: Palidroma
     Chiedere all’utente di inserire una parola
     Creare una funzione per capire se la parola inserita è palindroma

 */

 // Chiedere parola all'utente
var yourWord = prompt('scegli la parola da inserire').toLowerCase();
console.log('La parola scelta è: ', yourWord);

//Invocazione
var yourWordReverse = reversePar(yourWord);
console.log('La tua parola al contrario è: ',yourWordReverse);

//Condizione per verificare se la parola è palindroma o meno
if (yourWord == yourWordReverse) {
  console.log('ottimo, la parola ' + yourWord + ' è palindroma');
} else {
  console.log('nah, la parola ' + yourWord + ' non è palindroma');
}

// Function
function reversePar(word) {

  var reverse = '';
  for (i = word.length - 1; i >= 0; i--) {
    reverse += word[i];
  }
  return reverse;
}

/**
 * Esercizio parte seconda: Pari e Dispari
    L’utente sceglie pari o dispari e un numero da 1 a 5.
    Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
    Sommiamo i due numeri
    Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
    Dichiariamo chi ha vinto.
 */

// Creazione variabili per scelta p/d, numero utente e computer(random)
var yourChocie = prompt("Fai la tua scelta! Pari o dispari?");
var yourNumb = parseInt( prompt("Ora scegli un numero da 1 a 5") );
var numbPc = randomNumber(1, 5);
var totNumb = yourNumb + numbPc;

//stampa delle scelte
console.log('La tua scelta è: ' + yourChocie);
console.log('Il numero da te scelto è: ' + yourNumb);
console.log('Il pc ha scelto il numero: ' + numbPc);

// Somma dei due numeri
var totNumb = yourNumb + numbPc;
console.log('La somma dei numeri è: ' + totNumb);

// Stabiliamo se il numero risultante dalla somma è pari o dispari
if (evenAndOdd(totNumb) == true) {
    var resEvenAndOdd = 'pari';
} else {
    var resEvenAndOdd = 'dispari';
}
console.log(totNumb + ' è un numero ' + resEvenAndOdd);

// Dichiariamo chi ha vinto
if (resEvenAndOdd == yourChocie) {
  console.log('Complimenti hai vinto!');
} else {
  console.log('Spiacente hai perso!');
}

// Function
function randomNumber (min, max) {
  var random = Math.floor(Math.random() * (max - min + 1) ) + 1;
  return random;
}

function evenAndOdd (num) {
  if (num % 2 == 0) {
    return true;
  }else {
    return false;
  }
}
