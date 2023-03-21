/* Descrizione:
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, i numeri che ha visto precedentemente.
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati. */



// devo generare 5 numeri casuali con una funzione.(vedi utility.js)
// creo bottone start che mi genera i 5 numeri casuali al click

let startBtn = document.getElementById('generatenums');


startBtn.addEventListener('click', startGame);





// creo una funzione che racchiude la generazione dei numeri


function startGame() {




// prendo l'elemento dove voglio che la mia lista di numeri random appaia

const printList = document.getElementById('newnums')  ;

// aggiungo il reset della classe hide

printList.classList.remove('hide');


// creo una costante con il numero massimo di numeri random che ho bisogno
const maxNum = 5;


// creo variabile richiamando la funzione

let rndmNumList = randomListGen(maxNum, 99);




// creo un ciclo per inserire in html ad uno ad uno i numero del mio array

for (i = 0; i <= rndmNumList.length; i++){



    printList.innerText = `${rndmNumList}`;


}

// adesso ho bisogno di nascondere i numeri appena apparsi in automatico dopo tot secondi

setTimeout(hide, 5000)

    function hide(){

    printList.classList.add('hide');

    let formShow = document.querySelector('.formwrapper');

    formShow.classList.remove('d-none');




}


// prendo l'elemento form e associo il bottone submit

let userNum = document.querySelector('form');

userNum.addEventListener('submit', checkStart);



// creo una funzione che prende i numeri inseriti dall'utente e li confronta con i numeri random dentro array

    function checkStart(e){



        e.preventDefault();



        // creo ulteriore funzione che mi aggiunge per ogni input il suo valore dentro un array
        // spostata in utility 

        let playerNumList = arrayGen();

        // devo comparare i numeri dentro gli array creati


        let matchNumber = [];

        const rightGuess = document.getElementById('right');
        const numbFound = document.getElementById('numfound');


        // creo un ciclo che per ogni elemento dell'array playerNUmList incluso nell 'array rndNumList lo inserisce dentro il nuovo array
        for (let num of playerNumList){
            console.log(num);
            if(rndmNumList.includes(num)){

                matchNumber.push(num);
            }

        }
        // printo il risultato del mio array in html
        rightGuess.innerText = `you got right ${matchNumber.length} out of 5 `;
        numbFound.innerText = `your numbers : ${matchNumber}`
        console.log(matchNumber);
        console.log(matchNumber.length);



    }




}









































// const userInput = document.getElementById('usernum');

// userInput.addEventListener('submit', )


































