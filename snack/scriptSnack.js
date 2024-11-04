"use strict";
console.clean;


// SNACK 5

// crea un array vuoto. chiedi per 6 volte all'utente di inserire un numero, se e' dispari inseriscilo nell'array

// const dispari = [];

// for(let i = 0 ; i < 6 ; i++ ){
//     const number = parseInt(prompt("inserisci numero"));
//     if(number % 2 === 1){
//         dispari.push(number)
//     }
//     console.log(dispari)
// }
// console.log(`L'array definito e' ${dispari}` );


// SNACK 6

// stampa il cubo dei primi N numeri, dove N e' un numero indicato dall'utente

// const N = parseInt(prompt("inserire un numero"))
// for(let i = 0 ; i <= N ; i++){
//     const cubo = i*i*i;
//     console.log(`il cubo di ${i} e' ${cubo}`);
// }

// SNACK 7

// stampa le potenze di 2 fino a 1000

// let result = 0
// let count = 0
// let potenza = 1
// while (potenza < 1000 && count < 50 ){
//         console.log(`la potenza di 2 elevato a ${count} e' ${potenza}`);
//     potenza = 2*potenza;
//     count++;
// }

//  SNACK 9

//calcola la somma e la media dei primi 10 numeri

let somma = 0
let media = 1
for(let i = 1 ; i <= 10 ; i++){
    somma = somma + i;
    console.log(somma);
    media = somma / i;
    console.log(media)
}