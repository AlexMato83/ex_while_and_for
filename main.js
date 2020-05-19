

// generare 16 numeri casuali tra 1 e 100 ognuno diverso dall'altro


var numbers = [];
while (numbers.length < 16) {
  //genero il numero
   var addNumber = Math.floor(Math.random() * (100 - 1) + 1);
   //controllo che il numero sia diverso da TUTTI gli altri numeri
   var trovato = false;
   for(var i = 0; i < numbers.length; i++) {
      if (addNumber === numbers[i]) {
        trovato = true;

      }
   }

   //Se il numero non viene trovato significa che è unico
   if (trovato == false) {
     numbers.push(addNumber);
     console.log(numbers);
   }
}
console.log(numbers);

var numIns = parseInt(prompt("inserire numero"));
var results = true;
var conteggio = 0;

while (results) {
  var test = true;

   for (var j = 0; j < numbers.length; j++) {

     if (numIns === numbers[j]) {
       console.log(numIns + " è nella lista");
       test = false;
     }
   }
   if (test === false) {
       console.log(numIns + " è presente in lista, hai perso");
       results = false;

   } else if (conteggio >= 5) {
      results = false;
      console.log("hai raggiunto il limite massimo di lanci");

   } else if(test === true){
     console.log(numIns + " è assente");
     conteggio += 1;
     console.log(conteggio);
     var numIns = parseInt(prompt("inserire numero"));

   }
}
