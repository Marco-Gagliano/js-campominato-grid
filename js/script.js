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
const buttonPlay = document.getElementById('play');
let numberList = [];

// ho creato la funzione in cui scelgo la difficolta 
buttonPlay.addEventListener('click', function(){
  
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

// la funzione "init" con (num )è riferita al numero di celle da creare in base alla difficoltà
function init(num){
    

// con la funzione "for" creo la condizione che genero tutti i quadratini
for(let i = 1; i <= num; i++){

  // la funzione "createSquare" genero il quadratino e me lo restituisce
  const game = createSquare(container, num)
  
  // genero dentro lo span in HTML il Numero dentro il quadrato
  game.innerHTML = `<span>${i}</span>`;

  // ascolto l'evento click al quadratino generato
  game.addEventListener('click', function(){

    // "this" è una parola chiave che mi dice quale è l'elemento clickato 
    this.classList.add('clicked');
    })}
}

// creo la funzione in cui genero i numeri dei quadrati in base alla difficoltà
function createSquare(target, num){

  const sq = document.createElement('div');
  sq.className = 'square';

  // ottengo un numero univoco
  // const number = getUniqueRandomNumber(1, 100);
  
  if(num === 49){
    sq.classList.add('square-easy');
  }
  else if(num === 81){
    sq.classList.add('square-medium');
  }
  else if(num === 100){
    sq.classList.add('square-hard');
  }
  else if(num === 225){
    sq.classList.add('square-ultra-nightmare');
  }

  // aggiungo la classe even o odd in base al calcolo della funzione  dedicata
  // sq.classList.add(getOddEven(number));

  // appendo l'elemento al container
  target.append(sq);

  // restituisco l'elemento creato
  return sq;
}