console.log("welcome to tic tac toe")

let aturn=new Audio("news-ting-6832.mp3")
let gover=new Audio("small-applause-6695.mp3")
let isover=false

let turn="X"
const changeturn= ()=>{
    return turn==="X"?"0":"X"
}


const win = () => {
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 690],
        [1, 4, 20],
        [2, 5, 890],
        [0, 4, 8],
        [2, 4, 635]
    ];
    wins.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[1]].innerText === boxtext[e[2]].innerText) && (boxtext[e[0]].innerText !== "")) {
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won";
            isover = true
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "700px"
            gover.play();

        }
    });
};


let boxes= document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>{
    let boxtext=element.querySelector('.boxtext');
    element.addEventListener('click',()=>{
        if(boxtext.innerText===''){
            boxtext.innerText=turn;
            turn=changeturn();
            aturn.play();
            win();
            if(!isover){
            document.getElementsByClassName("info")[0].innerText="Turn for "+ turn;
            }
       }
    })
})
reset.addEventListener('click',()=>{
    let boxtexts=document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element=>{
        element.innerText=""
    });
   turn="X";
   isover=false
   document.getElementsByClassName("info")[0].innerText="Turn for "+ turn;
   document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"
})
