console.log("Welcome to Tic Tac Toe");
let music = new Audio ("music.mp3");
let audioTurn = new Audio ("ting.mp3");
let gameOver = new Audio ("gameover.mp3");
let gameover = false;

let Turn = "X";
// function to change the turn 
const changeTurn = () => {
    return Turn === "X"?"0":"X";
}
// function to check for a win
const checkWin = () =>{
    let boxtext = document.getElementsByClassName('boxtext'); 
    let win = [
        [0,1,2,5,5,0],
        [3,4,5,5,15,0],
        [6,7,8,5,25,0],
        [0,3,6,-5,15,90],
        [1,4,7,5,15,90],
        [2,5,8,15,15,90],
        [0,4,8,5,15,45],
        [2,4,6,5,15,135],
    ]
    win.forEach(e => {
        if ((boxtext[e[0]].innerText == boxtext[e[1]].innerText) && (boxtext[e[2]].innerText == boxtext[e[1]].innerText) && boxtext[e[0]].innerText !==""){
           document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won";
           gameover = true;
           document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
           document.querySelector(".line").style.width = "20vw";
           document.querySelector(".line").style.transform = `translate(${e[3]}vw , ${e[4]}vw) rotate(${e[5]}deg)`
        }
    })

}


music.play();
// Game logic

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        if (boxtext.innerText === ''){
            boxtext.innerText = Turn;
            Turn = changeTurn();
            audioTurn.play();
            checkWin();
            if (!gameover) {
                document.getElementsByClassName("info")[0].innerText = " Turn for "+ Turn;
            }

        };
    });
});

// Add onclick listener to reset button
reset.addEventListener('click', ()=> {
    reset.addEventListener('click' , () =>{
        let boxtexts = document.querySelectorAll('.boxtext');
        Array.from(boxtexts).forEach(element => {
            element.innerText = "";
        })
        Turn= "X";
        let gameover = false;
        document.querySelector(".line").style.width = "0";
        document.getElementsByClassName("info")[0].innerText = " Turn for "+ Turn;
        document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px";
        
    })
})