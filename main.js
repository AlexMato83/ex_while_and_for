/* il computer deve generare 16 numeri casuali da 1 a 100.
ognuno dei numeri deve essere diverso.
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




// funzione per generare 16 numeri casuali diversi tra loro
function createNum(num){

  // creo array di numeri vuoto
  var numbers = [];
  // ciclo i numeri fino a riempire l'array con 16 di essi
  while (numbers.length < 16) {
    //genero il numero random
     var addNumber = Math.floor(Math.random() * num);
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
     if (trovato === false) {
       // lo stampo nell'array numbers
       numbers.push(addNumber);
     }
  }
  console.log(numbers);
   return numbers;
}

// funzione per chiedere le giocate all'utente
function askNumber(array){

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
     for (var j = 0; j < array.length; j++) {
      // se il numero inserito è presente nell'array
       if (numIns === array[j]) {
         // cambio condizione var appoggio
         test = false;
       }
     }
     // se condizione var appoggio è cambiata
     if (test === false) {
         alert("he he he, mi dispiace, HAI SBAGLIATO");
         // cambio var appoggio principale (while)
         results = false;
         document.getElementById("stamp").innerHTML = "hai totalizzato " + conteggio + " punti";
       // creo controllo sul num di tiri vincenti

     } else if (conteggio >= 5) {
        results = false;
        alert("hai raggiunto il limite massimo di lanci");
        document.getElementById("stamp").innerHTML = "hai totalizzato " + conteggio + " punti";

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
}

// salvo la scelta di difficoltà dell'utente
var levelSelection = prompt("scegli difficoltà tra 0 , 1 e 2");

// in base alla difficoltà imposto argomento alla funzione
if (levelSelection == 0) {
  alert("hai scelto il livello 0");
  alert("hai a disposizione 5 giocate massimo")
  var numbers = createNum(101);
  askNumber(numbers);
} else if (levelSelection == 1){
  alert("hai scelto il livello 1");
  alert("hai a disposizione 5 giocate massimo")
  var numbers = createNum(81);
  askNumber(numbers);
} else if (levelSelection == 2){
  alert("hai scelto il livello 2");
  alert("hai a disposizione 5 giocate massimo")
  var numbers = createNum(51);
  askNumber(numbers);
}
