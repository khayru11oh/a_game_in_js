var activePlayer, scores, gameIs, roundScore;

function init() {
    activePlayer = 0;
    scores = [0, 0];
    gameIs = true;
    roundScore = 0;
    document.querySelector('#name-1').textContent = 'Player 1';
    document.querySelector('#name-2').textContent = 'Player 2';
    document.querySelector('#score-1').textContent = 0;
    document.querySelector('#score-2').textContent = 0;
    document.querySelector('#current1').textContent = 0;
    document.querySelector('#current2').textContent = 0;
    document.querySelector('.player1').classList.remove('active');
    document.querySelector('.player2').classList.remove('active');
    document.querySelector('.player1').classList.add('active');
    document.querySelector('.dice').style.display = 'none';
}

init();

document.querySelector('.btn-roll').addEventListener('click', () => {
    let randomDice = Math.floor(Math.random() * 6) + 1;
    document.querySelector('.dice').src = 'img/dice_' + randomDice + '_icon.svg';
    document.querySelector('.dice').style.display = 'block';
    
    if(randomDice !== 1) {
        roundScore += randomDice;
        document.querySelector('#current' + (activePlayer + 1)).textContent = roundScore;
    } else {
        document.querySelector('#current' + (activePlayer + 1)).textContent = '0';
        switchPlayer();
    }
});

document.querySelector('.btn-new').addEventListener('click', () => {
    init();
});

document.querySelector('.btn-hold').addEventListener('click', () => {
    scores[activePlayer] += roundScore;
    document.querySelector('#score-' + (activePlayer + 1)).textContent = scores[activePlayer];
    if(scores[activePlayer] > 30) {
        document.querySelector('.player' + (activePlayer + 1)).classList.remove('active');
        document.querySelector('.player' + (activePlayer + 1)).classList.add('winner');
        document.querySelector('#name-' + (activePlayer + 1)).textContent = 'WINNER!';
    }
    switchPlayer();
});

function switchPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    document.querySelector('.player1').classList.toggle('active');
    document.querySelector('.player2').classList.toggle('active');
    roundScore = 0;
}