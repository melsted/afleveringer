
//Definition af knappen med navnet btn-cal
    let btn = document.querySelector(".btn-cal");           ///GLOBAL SCOPE///

//Tilføjer en funktion til knappen med variablen btn.
    btn.addEventListener("click", calculate);               ///GLOBAL SCOPE///

    function calculate(){                                                   ///LOCAL SCOPE START!///
        //Definition af variabler
            let name = document.querySelector("#name").value;
            let lastName = document.querySelector("#lastName").value;
            let salary = document.querySelector("#salary").value;
            let region = document.querySelector("#region").value;
            let skat = 0;
            let betal = 0;
            let brutto = 0;
            let message = document.querySelector(".message");

            /*Test af variable - VIRKER
            console.log(name);
            console.log(lastName);
            console.log(salary);
            console.log(region);
            */
            
            /*Test af knapens funktion - VIRKER.
            console.log("knap virker");
            */

        switch (region) {
            case "København":
                skat = "39%";
                betal = (salary/100)*39;
                brutto = salary - betal;
                break;
            case "Sjælland":
                skat = "38%";
                betal = (salary/100)*38;
                brutto = salary - betal;
                break;
            case "Syd Danmark":
                skat = "40%";
                betal = (salary/100)*40;
                brutto = salary - betal;
                break;
            case "Midtjylland":
                skat = "41%"
                betal = (salary/100)*41;
                brutto = salary - betal;
                break;
            case "Nordjylland":
                skat = "42%"
                betal = (salary/100)*42;
                brutto = salary - betal;
                break;
            default: "Ukendt";
                break;
        }
        message.innerHTML = "Hej " + name + " " + lastName + ". Da du bor i København, skal du betale " + skat + 
                " i skatteprocent. Da din månedsløn er " + salary + " skal du betale " + betal +
                " kr. i skat. Det giver dig " + brutto + " kr. til forbrug.";
    
    }       ///LOCAL SCOPE SLUT!///