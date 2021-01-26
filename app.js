const p1 = {
    score: 0,
    but: document.querySelector('#p1But'),
    show: document.querySelector('#p1Show')
}
const p2 = {
    score: 0,
    but: document.querySelector('#p2But'),
    show: document.querySelector('#p2Show')
}
const resetBut = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#playto');
let winningScore = 7;
let isGameOver = false;

function updateScores(player, opponent){
    if(!isGameOver) {
        player.score +=1;
        if(player.score === winningScore){
            isGameOver = true;
            player.show.classList.add('winner');
            opponent.show.classList.add('loser');
            player.but.disabled = true;
            opponent.but.disabled = true;
        }
        player.show.textContent = player.score;
    }
}


p1.but.addEventListener('click', function(){
    updateScores(p1,p2)
})
p2.but.addEventListener('click', function(){
    updateScores(p2, p1)
})

winningScoreSelect.addEventListener('change', function (){
    winningScore = parseInt(this.value);         //parseInt It is take string and get a value in number. 
    reset();
})

resetBut.addEventListener('click', reset)

function reset() {
    isGameOver = false;
    for (let p of [p1,p2]){
        p.score=0;
        p.show.textContent = 0;
        p.show.classList.remove('winner','loser');
        p.but.disabled =false;
    }
}