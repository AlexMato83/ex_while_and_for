/* il computer deve generare 16 numeri casuali da 1 a 100.
In seguito deve chiedere all'utente di inserire un numero da 1 a
 100 alla volta, se il numero è presente nella lista dei numeri
 generati, la partita termina, altrimenti contiua chiedendo
 all'utente un altro numero.
 La partita termina quando un giocatore inserisce un numero
 "vietato" o raggiunge il numero massimo possibile di numeri consentiti.
 al termine della partita il software deve comunicare il punteggio,
 cioè il numero di volte che l'utente ha inserito un numero consentito.

 BONUS: all'inizio il software richiede anche una difficoltà all'utente
 che cambia il range di numeri casuali.
 Con difficoltà 0=> da 1 a 100, con difficoltà 1 => da 1 a 80 e
 con difficoltà 2 => da 1 a 50*/

// creo array di numeri vuoto
var numbers = [];
// ciclo i numeri fino a riempire l'array con 16 di essi
while (numbers.length < 16) {
  //genero il numero random
   var addNumber = Math.floor(Math.random() * (100 - 1) + 1);
   // creo var di appoggio
   var trovato = false;
   // ciclo ogni numero presente nell'array
   for(var i = 0; i < numbers.length; i++) {
     // confronto il numero random con ogni numero nell'array
      if (addNumber === numbers[i]) {
        // cambio variabile di appoggio
        trovato = true;

      }
   }
   //Se il numero non viene trovato significa che è unico
   if (trovato == false) {
     // lo stampo nell'array numbers
     numbers.push(addNumber);
   }
}
console.log(numbers);

// chiedo un numero all'utente
var numIns = parseInt(prompt("inserire numero"));
//creo variabile di appoggio
var results = true;
// creo variabile per conteggio punti
var conteggio = 0;
// ciclo finchè var appoggio mantiene la condizione
while (results) {
  // creo var appoggio per il for
  var test = true;
   // ciclo ogni numero dell'array
   for (var j = 0; j < numbers.length; j++) {
    // se il numero inserito è presente nell'array
     if (numIns === numbers[j]) {
       // cambio condizione var appoggio
       test = false;
     }
   }
   // se condizione var appoggio è cambiata
   if (test === false) {
       console.log(numIns + " è presente in lista, hai perso");
       // cambio var appoggio principale (while)
       results = false;
     // creo controllo sul num di tiri vincenti
   } else if (conteggio >= 5) {
      results = false;
      console.log("hai raggiunto il limite massimo di lanci");
     // se condizione var appoggio del for è invariata(il numero non è presente)
   } else if(test === true){
     console.log(numIns + " è assente");
     // aumento il conteggio tiri vincenti
     conteggio += 1;
     console.log(conteggio);
     // rifaccio tirare l'utente
     var numIns = parseInt(prompt("inserire numero"));

   }
}
