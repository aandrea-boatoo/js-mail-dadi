// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// OBBIETTIVO: AVERE DUE NUMERI CASUALI E VERIFICARE IL MAGGIORE

// let randomNumPc = Math.floor(Math.random()* (6 -1 +1 )) + 1;
// console.log(`IL pc ha fatto ${randomNumPc}`);

// let randomNumUser = Math.floor(Math.random()* (6 -1 +1 )) + 1;
// const throwing = prompt("premi Enter per lanciare il dado")

// if(randomNumPc > randomNumUser){
//     console.log("Hai perso, sara' per la prossima :(")
// } else if (randomNumPc < randomNumUser){
//     console.log("Congratulazioni hai vinto!!!")
// } else{
//     console.log("Pareggio! Bravi tutti!!")
// }
// console.log(`infatti il tuo dado ha fatto ${randomNumUser}}`);

const numeroMassimo = 6;
const numeroMinimo = 1;
const randomNumPc = 0;
const randomNumUser = 0;

generaNumeroRandom(1, 100);

/**
 * 
 * @param {*} min numero minimo estraibile dal randomize
 * @param {*} max numero massimo estraibile dal randomize
 */
function generaNumeroRandom(min, max){
   const numeroRandom =  Math.floor(Math.random() * (max - min + 1 )) + min ;
    // console.log(numeroRandom)
    return numeroRandom;
}