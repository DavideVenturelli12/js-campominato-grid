//debug
console.log('JS OK!');

/*
CONSEGNA:

- creare una griglia di gioco quadrata, in cui ogni cella contiene un numero tra 
quelli compresi in un range compreso tra 1 e 100

- Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.
*/

let difficoltà;
//creo il cilco in cui verifico che il valore inserito sia un numero che sia tra 1 e 3
while (isNaN(difficoltà) || difficoltà > 3 || difficoltà < 1) {
    difficoltà = parseInt(prompt('scegli il livello di difficoltà, da 1 a 3'));
}

// Creare una griglia 10*10. 
const griglia = document.getElementById('griglia');

const colonne = 10;
const righe = 10;

// calcolo il totale delle celle da generare
const celleTotali = colonne * righe;

for (let i = 1; i <= celleTotali; i++) {

    // creo la cella
    const cella = creaCella();
    //inserisco i numeri nelle celle
    cella.innerText = i;

    // se clicco su un quadrato questo si colora di azzurro e viceversa
    cella.addEventListener('click', function (event) {
        cella.classList.toggle('bg-lightblue')
    })

    // aggiungo la cella nella griglia
    griglia.appendChild(cella);

}
// creo una cella
function creaCella() {
    const cella = document.createElement('div');
    cella.classList.add('cella');
    return cella;
}