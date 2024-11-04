// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.
// Non è necessario provvedere alla validazione delle email

// OBBIETTIVO: VERIFICA MAIL

const mailData = [
    "roberto.bolle@gmail.com",
    "prima.vera@gmail.com",
    "andrea.boato@gmail.com",
    "rodolfoalfonso@gmail.com",
    "prezzemolo34@gmail.com",
    "cristanoronaldo7@gmail.com",
    "therock22@gmail.com",
    "amazon.info@gmail.com",
    "complain.prez@gmail.com",
    "2131241@gmail.com",
    "avelo.zucchero@gmail.com",
    "ottone.erminio@gmail.com",
    "facciada.leva@gmail.com",
    "prestigiacomo.giacomo@gmail.com",
    "lorenzorossi@gmail.com"
]

const search = prompt("inserire indirizzo email");

if (mailData.includes(search)){
    for(i = 0 ; i < mailData.length ; i++){
        if (mailData[i] === search){
            const column = mailData.indexOf(search)
            console.log(`email valida, accesso consentito (col ${column})`)
            
        }
    }
} else {
    console.log("email non presente nel database, accesso negato")
}