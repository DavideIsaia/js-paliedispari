// **Palindroma**
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

const userText = prompt("inserisci una parola/frase e saprai se è palindroma");

let result = checkPalindroma(userText);

// stampo il risultato
console.log("la frase è palindroma?", result);
document.getElementById('message').innerHTML += `La frase/parola <br>${userText}<br> è palindroma? <br> ${result}`;


/**FUNCTIONS
 * 
 * Descrizione: la funzione riceve come input una parola e dà come output true se è palindroma e false se non lo è.
 * @param {any} stringa parola o frase con spazi (funziona anche con cifre).
 * @returns {any} true o false.
 */
function checkPalindroma (stringa) {

    // definisco la lunghezza della stringa, dividendola per 2
    let lunghezza = Math.floor(stringa.length / 2);

    // variabile di default per scrivere un solo return
    let palindroma = true;

    // ciclo in cui controllo ogni elemento della stringa
    for (let i = 0; i < lunghezza; i++) {

        // se il primo elemento della stringa è diverso dall'ultimo allora non è palindroma ed avrò false,
        // altrimenti ricomincio il ciclo e procedo confrontando il 2° elemento con il penultimo e così via
        if (stringa[i] !== stringa[stringa.length - i - 1]) {
            palindroma = false;
        }

    return palindroma;
    }
}

// TEST
// let giusta = checkPalindroma("i topi non avevano nipoti");
// console.log(giusta);
// let sbagliata = checkPalindroma ("frase non palindroma");
// console.log(sbagliata);