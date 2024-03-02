const gridContainer = document.getElementById('grid-container');
const play = document.getElementById('play');
const difficulty = document.getElementById('select');

const bombe = [];
const totBombe = 16;

let output = document.getElementById('output');
let score = 0;
let numeriCliccati = 0;
let numeriContati;

reset();

gridContainer.innerHTML = '<h1>Comincia la partita!</h1>';
play.addEventListener('click', start);


/**********FUNCTIONS **********/

// START
function start() {
  reset();
  const difficultyLevel = parseInt(difficulty.value);
  let numeriContati = 100;
  if (difficultyLevel == 2) {
    numeriContati = 81;
  } else if (difficultyLevel == 3) {
    numeriContati = 49;
  }

  // push dei numeri random
  numRandom(numeriContati);


  // ciclo con 100/81/49 ripetizioni
  for (let i = 1; i <= numeriContati; i++) {

    // richiamo la funzione che crea il quadrato
    const square = createSquareElement(i);

    if (difficultyLevel == 2) {
      square.classList.add('medio');
    } else if (difficultyLevel == 3) {
      square.classList.add('difficile');
    }

    // assegno square alla griglia
    gridContainer.append(square);
  };
};

// RESET
function reset() {
  gridContainer.innerHTML = '';
  bombe.length = 0;
  score = 0;
  output.innerHTML = '';
}

// CREAZIONE SQUARE
/**
 * creo il DIV
 * associo la classe square
 * creo una proprietà custom dell'elemento HTML, creo un suo ID
 * al click di sq restituisci numero
 * restituisco l'ID in console
 */
function createSquareElement(numero) {
  const sq = document.createElement('div');
  sq.className = 'square';
  sq._sqID = numero;
  sq.addEventListener('click', handleSquareClick);
  return sq;
}

// CLICK DELLO SQUARE
function handleSquareClick(event) {
  const sqID = event.target._sqID;
  console.log(sqID);

  if (bombe.includes(sqID)) {
    event.target.classList.add('redbomb');
    output.innerHTML = `Hai trovato una bomba!<br>Il tuo punteggio è: ${score} `;
  } else {
    score++;
    console.log('il contatore e:', score);
    if (score === (numeriContati-bombe)) {
      output.innerHTML = `Complimenti, hai vinto! Il tuo punteggio è: ${score}`;
    }
  }
  event.target.classList.add('clicked');
}

// CREAZIONE NUMERI RANDOM
function numRandom(parametro) {
  let numeroBomba;

  while (bombe.length < totBombe) {
    numeroBomba = Math.floor(Math.random() * parametro) + 1;

    if (!bombe.includes(numeroBomba)) {
      bombe.push(numeroBomba);
    }
  }

  console.log(bombe);
  return bombe;
}


// FUNZIONE STOP
