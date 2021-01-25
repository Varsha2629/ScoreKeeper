const p1But = document.querySelector('#p1But');
const p2But = document.querySelector('#p2But');
const resetButton =document.querySelector('#reset');
const p1Show = document.querySelector ('#p1Show');
const p2Show = document.querySelector ('#p2Show');
const winningScoreSelect = document.querySelector('#playto');

let p1Score = 0;
let p2Score = 0;
let winningScore = 7;
let isGameOver = false;

p1But.addEventListener('click', function(){
    if(!isGameOver){    
        p1Score += 1;
        if(p1Score === winningScore){
            isGameOver = true;
            p1Show.classList.add('winner');
            p2Show.classList.add('loser');
        }
        p1Show.textContent = p1Score;
        }
})

p2But.addEventListener('click', function(){
    if(!isGameOver){    
        p2Score += 1;
        if(p2Score === winningScore){
            isGameOver = true;
            p2Show.classList.add('winner'); // winner & loser class curently in the DOM.
            p1Show.classList.add('loser');
        }
        p2Show.textContent = p2Score;
        }
})

winningScoreSelect.addEventListener('change', function (){
    winningScore = parseInt(this.value);         //parseInt It is take string and get a value in number. 
    reset();
})

resetButton.addEventListener('click', reset)

function reset() {
    isGameOver = false;
    p1Score = 0;
    p2Score = 0;
    p1Show.textContent = 0;
    p2Show.textContent = 0;
    p1Show.classList.remove('winner','loser');
    p2Show.classList.add('winner','loser');

}