// **Pari e Dispari**
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

const userChoice = prompt("Scegli pari o dispari");
console.log("hai scelto", userChoice);

const userNumber = parseInt(prompt("Scegli un numero da 1 a 5"));
console.log("il tuo numero è", userNumber);

const pcNumber = randomNumber1to5();
console.log("il numero del PC è", pcNumber);

// sommo il numero inserito dall'utente e il numero generato casualmente
// e dico se il risultato è pari o dispari.
const sommaPariDispari = pariDispari (userNumber, pcNumber);
console.log("la somma del tuo numero con quello del PC è", sommaPariDispari);

if (sommaPariDispari === userChoice) {
    console.log("Hai vinto!");
} else {
    console.log("Ha vinto il PC.");
}

// FUNCTIONS

/**
 * Descrizione: la funzione genera un numero da 1 a 5 e lo dà come output.
 * @returns {number} numero da 1 a 5.
 */
function randomNumber1to5 () {
    const randomGenerated = Math.floor(Math.random() *5) +1;
    return randomGenerated;
}

/** 
 * Descrizione: la funzione somma 2 numeri e ci dice se il risultato è pari o dispari.
 * @param {number} num1 1° numero da sommare.
 * @param {number} num2 2° numero da sommare.
 * @returns {number} oddOrEven pari o dispari.
 */
function pariDispari (num1, num2) {
    const somma = num1 + num2;
    let oddOrEven;

    if (somma % 2 === 0) {
        oddOrEven = "pari";        
    } else {
        oddOrEven = "dispari";
    }

    return oddOrEven;
}

// TEST
// const testRandom = randomNumber1to5 ();
// console.log(testRandom);

// const testPari = pariDispari (1,1);
// console.log(testPari);

// const testDispari = pariDispari (1,2);
// console.log(testDispari);