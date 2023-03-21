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

setTimeout(hide, 10000)

    function hide(){

    printList.classList.add('hide');

}


// prendo l'elemento form e associo il bottone submit

let userNum = document.querySelector('form');

userNum.addEventListener('submit', checkStart);



// creo una funzione che prende i numeri inseriti dall'utente e li confronta con i numeri random dentro array

function checkStart(e){



    e.preventDefault();   
    
    let playerNumList = [];
    
    // creo ulteriore funzione che mi aggiunge per ogni input il suo valore dentro un array
    
    function arrayGen(){
        const userInput = document.getElementsByClassName("getvalue");
        for (let i = 0 ; i < userInput.length ; i++){
    
                playerNumList.push(userInput[i].value);
            }
     
        }
    
        arrayGen();

    // devo comparare i numeri dentro gli array creati secondo il loro indice


    for (let i = 0 ; i < playerNumList.length ; i++){

        if (parseInt(playerNumList[i]) ===  parseInt(rndmNumList[i])) {

            console.log('ok');

        } else {

            console.log('nope');
        }
    


    
    }
        
    
    
    
        console.log(playerNumList);
    }
    
   





}











    



   















// const userInput = document.getElementById('usernum');

// userInput.addEventListener('submit', )


































