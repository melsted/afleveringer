///////////////CANVAS//////////////
//Først definerer jeg mit lærred (canvas) ved hjælp af querySelector.
let canvas = document.querySelector("#canvas");
//Her definerer jeg indholdet af mit lærred - context.
let ctx = canvas.getContext('2d');

/////////////BANE GRID////////////////
let bane1 = [
    [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, -1, 1, 1, 1],
    [0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0],
    [0, 1, 0, 1, 3, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0],
    [0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 3, 0, 0, 0, 0, 0],
    [1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0, 0, 1, 1, 1, 1],
    [1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0],
    [1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1, 1, 0],
    [1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 1, 0, 0, 0],
    [1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 1],
    [0, 0, 1, 0, 0, 0, 1, 3, 1, 0, 1, 0, 1, 0, 0, 0],
    [0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0],
    [3, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 0, 0],
    [0, 1, 0, 1, 1, 1, 1, 3, 0, 0, 0, 1, 0, 1, 1, 1],
    [0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0],
    [0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 3, 1, 0],
    [0, 0, 2, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0]
]

//////////VARIABLER///////////
let player = 2;
let goal = -1;
let wall = 1;
let walk = 0;
let bomb = 3;
let tilesize = 32;
let playerposition;
//For at kunne loope mig frem til tallene i mine indre arrays, definere jeg to variable til hjælp.
let x = 0; //Inderste arrayindex er mit x.
let y = 0; //Yderste arrayindex er mit y.

//////////HENT AVATAR//////////////
let gaby = new Image();
gaby.src = 'img/gaby.png';
    


//////////CREATE MAZE//////////
//Yderste loop som danner rammen for banen. Banen er 16x16 tiles i størrelsen 512px x 512px med 32px x 32px tiles.
function maze(){
    //I nedenstående forholder funktionen sig til om sætningen  y < bane1.length er sand. 
    //Er den sand kører funktionen createmaze(y).
    for(y = 0; y < bane1.length; y++){
        createmaze(y);
    }
}
//Inderste loop bidrager til at spillet får sine felter, alt efter værdien.
function createmaze(y){
    //I nedensteånde forholder funktionen sig til om sætningen x < bane1[y].length er sand.
    //Er den sand kører funktionen createmaze1(x,y).
    for(x = 0; x < bane1[y].length; x++){
        createmaze1(y,x);
    }
}
//Funktionen createmaze1, forholder sig til banens felter. I dette tilfælde er der 256 felter.
//Funktionen styrer hvilken farve og størrelse der passer til feltets værdi.
function createmaze1(y,x){
    if(bane1[y][x] == player){
        //I nedenstående fortæller vi at værdien af y er y og værdien af x er x, altså y:y og x:x
        playerposition = {y:y,x:x};
        ctx.drawImage(gaby, x*tilesize, y*tilesize, tilesize, tilesize);
    }else if(bane1[y][x] == wall){
        ctx.fillStyle ="black";
        ctx.fillRect(x*tilesize, y*tilesize, tilesize, tilesize);
    }else if(bane1[y][x] == walk){
        ctx.fillStyle = "#C6F68D";
        ctx.fillRect(x*tilesize, y*tilesize, tilesize, tilesize);
    }else if(bane1[y][x] == goal){
        ctx.fillStyle = "orange";
        ctx.fillRect(x*tilesize, y*tilesize, tilesize, tilesize);
    }else if(bane1[y][x] == bomb){
        ctx.fillStyle = "#C6F68D";
        ctx.fillRect(x*tilesize, y*tilesize, tilesize, tilesize);
        
        //Tegn cirkel
        ctx.beginPath();
        ctx.arc(x*tilesize+16, y*tilesize+16, tilesize/2, 0, 360);
        ctx.strokeStyle = "red";
        ctx.stroke();
    }
}
maze();



/////////////INDHENT LYDE////////////////
function soundwalk(){
    let soundwalk = new Audio('sound/walk.wav');
    soundwalk.play();
}
function soundwall(){
    let soundwall = new Audio('sound/wall.wav');
    soundwall.play();
}
function gunshot(){
    let gunshot = new Audio('sound/gunshot.wav');
    gunshot.play();
}
function winningsound(){
    let winningsound = new Audio('sound/gunshot.wav');
    winningsound.play();
}

////////////FLYT SPILLEREN RUNDT///////////
function movePlayer(){
    //'keydown' er den funktion der lytter til om der bliver trykket på knapperne.
    window.addEventListener('keydown',function(event){
        switch(event.keyCode){
            case 38: //Op
                if(bane1[playerposition.y-1][playerposition.x] == 0){
                    //playerens nye position:
                    bane1[playerposition.y-1][playerposition.x] = 2;
                    //playerens gamle position:
                    bane1[playerposition.y][playerposition.x] = 0;
                    soundwalk();
                }else if(bane1[playerposition.y-1][playerposition.x] == goal){
                    winningsound();
                    alert("Tillykke du er nået i mål!");
                    location.reload(false);
                }else if(bane1[playerposition.y-1][playerposition.x] == wall){
                    soundwall();
                }else if(bane1[playerposition.y-1][playerposition.x] == bomb){
                    gunshot();
                    setTimeout(function(){
                        alert("GAME OVER - Du blev skudt!");
                        location.reload();
                    }, 1000);
                }
                maze();
                break;
            case 39: //Højre
                if(bane1[playerposition.y][playerposition.x+1] == 0){
                    bane1[playerposition.y][playerposition.x+1] = 2;
                    bane1[playerposition.y][playerposition.x] = 0;
                    //console.log("virker");
                    soundwalk();
                }else if(bane1[playerposition.y][playerposition.x+1] == goal){
                    winningsound();
                    alert("Tillykke du er nået i mål!");
                    location.reload(false);
                }else if(bane1[playerposition.y][playerposition.x+1] == wall){
                    soundwall();
                }else if(bane1[playerposition.y][playerposition.x+1] == bomb){
                    gunshot();
                    alert("GAME OVER - Du blev skudt!");
                    location.reload(false);
                }
                maze();
                break;
            case 40: //Ned
                if(bane1[playerposition.y+1][playerposition.x] == 0){
                    bane1[playerposition.y+1][playerposition.x] = 2;
                    bane1[playerposition.y][playerposition.x] = 0;
                    soundwalk();
                }else if(bane1[playerposition.y+1][playerposition.x] == goal){
                    winningsound();
                    alert("Tillykke du er nået i mål!");
                    location.reload(false);
                }else if(bane1[playerposition.y+1][playerposition.x] == wall){
                    soundwall();
                }else if(bane1[playerposition.y+1][playerposition.x] == bomb){
                    gunshot();
                    alert("GAME OVER - Du blev skudt!");
                    location.reload(false);
                }
                maze();
                break;
            case 37: //Venstre
                if(bane1[playerposition.y][playerposition.x-1] == 0){
                    bane1[playerposition.y][playerposition.x-1] = 2;
                    bane1[playerposition.y][playerposition.x] = 0;
                    soundwalk();
                }else if(bane1[playerposition.y][playerposition.x-1] == goal){
                    winningsound();
                    alert("Tillykke du er nået i mål!");
                    location.reload(false);
                }else if(bane1[playerposition.y][playerposition.x-1] == wall){
                    soundwall();
                }else if(bane1[playerposition.y][playerposition.x-1] == bomb){
                    gunshot();
                    alert("GAME OVER - Du blev skudt!");
                    location.reload(false);
                }
                maze();
                break;
        }
    })
}
movePlayer();

window.addEventListener("load", maze);


