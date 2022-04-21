/*

L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
Difficoltà 1 => tra 1 e 100
Difficoltà 2 => tra 1 e 81
Difficoltà 3 => tra 1 e 49
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro.
**Consigli del giorno:** :party_wizard:
**** Creiamo prima una griglia unica (es con 100 quadratini) per  poi dinamicizzare il dato con classi css dedicate
**** Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
Ad esempio:
Di cosa ho bisogno per generare i numeri?
Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
Le validazioni e i controlli possiamo farli anche in un secondo momento.

*/


const container = document.querySelector('.container');
const btnPlay = document.getElementById('play');
let numberList = [];

btnPlay.addEventListener('click', function(){
  
  container.innerHTML = ' ';
  numberList = [];
  const gameDifficulty = document.getElementById('difficulty').value;

  if(gameDifficulty === 'easy'){
    init (49)
  }
  else if(gameDifficulty === 'medium'){
    init (81)
  }
  else if(gameDifficulty === 'hard'){
    init (100)
  }
  else if(gameDifficulty === 'ultra-nightmare'){
    init (225)
  }
});


init()
function init(num){
    
// con la funzione "for" creo la condizione che genero tutti i quadratini
for(let i = 0; i < (num); i++){

  // la funzione squareEasy genra il quadratino e me lo restituisce
  const game = squareGame(container, num)

  // ascolto l'evento click al quadratino generato
  game.addEventListener('click', function(){

    // this è una parola chiave che mi "dice" quale è l'elemento cickato
    this.classList.add('clicked');
    })}
}
