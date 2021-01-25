const p1But = document.querySelector('#p1But');
const p2But = document.querySelector('#p2But');
const p1Show = document.querySelector ('#p1Show');
const p2Show = document.querySelector ('#p2Show');

let p1Score = 0;
let p2Score = 0;
let winningScore = 5;
let isGameOver = false;

p1But.addEventListener('click', function(){
    if(p1Score !== winningScore){    
    p1Score += 1;
    p1Show.textContent = p1Score;
    }
})

p2But.addEventListener('click', function(){
    if(p2Score !== winningScore){    
    p2Score += 1;
    p2Show.textContent = p2Score;
    }
})