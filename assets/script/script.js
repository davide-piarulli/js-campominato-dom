const gridContainer = document.getElementById('grid-container');
const play = document.getElementById('play');
const difficulty = document.getElementById('select');

const totBombe = 16;

let contatore;

reset();


play.addEventListener('click', start);

function start () {
  reset();
  const scelta = parseInt(difficulty.value);
  let numeriContati = 100;
  if (scelta == 2) {
    numeriContati = 81;
  }else if (scelta == 3){
    numeriContati = 49;
  }
  
  numRandom(numeriContati);
  // ciclo con 100 ripetizioni
  for (let i = 1; i <= numeriContati; i++) {

    // richiamo la funzione che crea il quadrato
    const square = getSquare(i);

    if(scelta == 2){
      square.classList.add('medio');
    } else if (scelta == 3){
      square.classList.add('difficile');
    }

    // console.log(numRandom(numeriContati));

    // assegno square alla griglia
    gridContainer.append(square);
};
};



/**********FUNCTIONS **********/

// RESET
function reset() {
  gridContainer.innerHTML = '';
}

// CREAZIONE SQUARE
function getSquare(numero){
  // creo il DIV
  const sq = document.createElement('div');
  // associo la classe square
  sq.className = 'square';
  // creo una proprietà custom dell'elemento HTML, creo un suo ID
  sq._sqID = numero;
  // al click di sq restituisci numero
  sq.addEventListener('click', function(){

  // if (this.innerHTML === '') {
  //   this.innerHTML = this._sqID;
  // } else if (this.innerHTML = this._sqID) {
  //   this.innerHTML = '';
  // }

  // restituisco l'ID in console
  console.log(this._sqID);
  // aggiungo la classe clicked allo square
  this.classList.add('clicked');
  });
  

  return sq;
}

// CREAZIONE NUMERI RANDOM
function numRandom(parametro) {
  const bombe = [];
  let numeroBomba;
  
  for (let i = 1; i <= totBombe; i++) {
    numeroBomba = Math.floor(Math.random() * parametro ) + 1;
    bombe.push(numeroBomba);
  }

console.log(bombe);

}


