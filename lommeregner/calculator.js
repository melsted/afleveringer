//Definere min lommeregner skærm, hvorpå tallene går ind (den til venstre):
let input = document.querySelector("#input");       ///GLOBAL SCOPE///

//Definere min lommeregner skærm, hvorpå alle resultater kommer ud (den til højre):
let answer = document.querySelector("#answer");     ///GLOBAL SCOPE///

//Definerer alle knapper med classen number:
let number = document.querySelectorAll(".number");      ///GLOBAL SCOPE///


/*Jeg tjekker at min variabel number virker - Da den virker 
efter hensigten er variablen henstillet i kommentarerne.
console.log(number); */


///////////////FEJLEN LIGGER HER!//////////////////
//Giv knapperne en funktion:
number.addEventListener("click", numbers);          ///GLOBAL SCOPE///

//Switch 0-9:
function numbers(num){                      ///LOCAL SCOPE/// Da vi er inde for curly brackets {}.
    switch(num){                            ///LOCAL SCOPE/// Da vi er inde for curly brackets {}.
        case 1:                             ///LOCAL SCOPE/// Da vi er inde for curly brackets {}.
                input.value += '1';         ///LOCAL SCOPE/// Da vi er inde for curly brackets {}.
                break;                      ///LOCAL SCOPE/// Da vi er inde for curly brackets {}.
            case 2:                         
                input.value += '2';
                break; 
            case 3:
                input.value += '3';
                break; 
            case 4:
                input.value += '4';
                break; 
            case 5:
                input.value += '5';
                break; 
            case 6:
                input.value += '6';
                break; 
            case 7:
                input.value += '7';
                break; 
            case 8:
                input.value += '8';
                break; 
            case 9:
                input.value += '9';
                break; 
            case 0:
                input.value += '0';
                break;
    }
}   ///LOCAL SCOPE ER SLUT/// da vi igen er uden for curlybrackets {}.



//Definere operatorer knapperne:
let operators = document.querySelectorAll(".operator");                 ///GLOBAL SCOPE/// da vi er uden for {}.

/*Jeg tjekker at min variabel number virker - Da den virker 
efter hensigten er variablen henstillet i kommentarerne.
console.log(operator); */

/////////////////SAMME FEJL HER SOM LINJE 16////////////////
//Definere alle knapper med classen operator:
operators.addEventListener("click", operate);                           ///GLOBAL SCOPE/// da vi er uden for {}.

//Switch operatorer:
function operate(oper){                                 ///LOCAL SCOPE/// da vi er inde for curlybrackets {}.
    switch(oper){
        case '+':
            input.value += '+';
        break;
        case '-':
            input.value += '-';
        break;
        case 'x':
            input.value += '*';
        break;
        case '/':
            input.value += '/';
        break;
        case '+/-':
            input.value += '-' + input.value;
    }
}       ///LOCAL SCOPE SLUT/// da vi igen er ude for curly brackets {}.



//Definere cleearscreen knap:
let clearscreen = document.querySelector(".clearscreen");               ///GLOBAL SCOPE/// da vi er uden for {}.

//Giver knappen en funktion:
clearscreen.addEventListener("click", cs);                              ///GLOBAL SCOPE/// da vi er uden for {}.

//Definere hvad knappens funktion er:
function cs(){
    input.value = "";
    answer.value = "";
}



//Definere erase knap:
let erase = document.querySelector(".erase");                   ///GLOBAL SCOPE/// da vi er uden for {}.

//Giver knappen en funktion:
erase.addEventListener("click", erased);                        ///GLOBAL SCOPE/// da vi er uden for {}.

//Definere hvad knappens funktion er:
function erased() {                                         ///LOCAL SCOPE/// da vi er inde for curlybrackets {}.
        var x = input.value;
        if(x.length > 0){ //for alle inputs, hvor karakterlængden er længere end 0.
            x = x.substring(0, x.length-1); /*substring() er en return funktion, som angiver karakterene mellem 
            to indexnumre. I dette tilfælde 0 og det antal der står i skærmen minus 1. Normalt tæller den det 
            første indexnummer med, men ikke det sidste. I dette tilfælde er sidste indexnummer en variabel og 
            derfor er vi selv nødt til at tilføje minus 1.*/
            input.value = x; //Den nye input karakterlængde er nu x.
        }
}           ///LOCAL SCOPE SLUT/// da vi igen er ude for curly brackets {}.



//Definere equals knap:
let equals = document.querySelector(".equals");                     ///GLOBAL SCOPE/// da vi er uden for {}.

//Giver knappen en funktion:
equals.addEventListener("click", equal);                            ///GLOBAL SCOPE/// da vi er uden for {}.

//Definere, hvad knappens funktion er:
function equal(){                                           ///LOCAL SCOPE/// da vi er inde for curlybrackets {}.
    answer = Math.floor(+eval(input.value)); //Math.floor betyder vi afrunder til nærmeste heltal.
    /*Eval = evaluate/execute an argument. Dette har jeg ikke 
    selv regnet ud, det er noget jeg har lånt fra en youtube video.*/
    answer.input = '=' + answer;
}           ///LOCAL SCOPE SLUT/// da vi igen er ude for curly brackets {}.



//Definere brackets knappen:
let brackets = document.querySelector(".brackets");                 ///GLOBAL SCOPE/// da vi er uden for {}.

//Giver knappen en funktion:
brackets.addEventListener("click", bracket);                        ///GLOBAL SCOPE/// da vi er uden for {}.

function bracket(){                                     ///LOCAL SCOPE/// da vi er inde for curlybrackets {}.
    let i = 0;
    if (i == 0){ //Hvis der tilføjes én til 0 - dvs. hvis der trykkes én gang på knappen.
        input.value += '(';
        i = 1; //Betyder at knappen er aktiveret første gang.
    }else if(i == 1){
        input.value += ')';
        i = 0; //Betyder at knappen er aktiveret anden gang og dermed nulstilles.
    }
}          ///LOCAL SCOPE SLUT/// da vi igen er ude for curly brackets {}.