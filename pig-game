/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores , roundScore, currentPlayer;

scores = [0,0];
roundScore = 0;
currentPlayer = 0;

document.querySelector('.dice').style.display = 'none';
// document.querySelector('.dice').style.width = '500px';

document.getElementById('score-0').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-1').textContent = '0';


document.querySelector('.btn-roll').addEventListener('click', function() {
    // 1. Need to get the random number
    // We don't need the public variable of dice any more because we have // inside the event so we will not use it in other situation
    var dice  = Math.floor(Math.random() * 6) + 1;
    
    // 2. Display the dice image and the result
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';

    // 3. Update the round score IF the rolled number is NOT a 1

    if (dice !== 1){
        roundScore += dice;
        document.querySelector('#current-' + currentPlayer).textContent = roundScore;
    }else{
        //Next player    
        nextPlayer();
    }

});

document.querySelector('.btn-hold').addEventListener('click', function() {

    // 1. Move the current score to the scores array
    scores[currentPlayer] += roundScore;

    // 2. Update the global score
    document.querySelector('#score-' + currentPlayer).textContent = scores[currentPlayer];

    // Check if one of players won the game
    if (scores[currentPlayer] >= 20){
        document.querySelector('#name-' + currentPlayer).textContent = 'Winner!'
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player-' + currentPlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + currentPlayer + '-panel').classList.remove('active');
    }else{
        //Next player
        nextPlayer();
    }   
});

document.querySelector('.btn-new').addEventListener('click', function() {

});

function nextPlayer(){
    
    roundScore = 0;
    document.querySelector('#current-' + currentPlayer).textContent = roundScore;
    currentPlayer === 0 ? currentPlayer = 1 : currentPlayer = 0;
    //Just to remember the code currentPlayer === 0 ? currentPlayer = 1 : currentPlayer = 0; is the code below if I deploy it
    
    // if (currentPlayer === 0){
    //     currentPlayer = 1;
    //     document.querySelector('.player-0-panel').classList.remove('active');
    //     document.querySelector('.player-1-panel').classList.add('active');
    // }else{
    //     currentPlayer = 0;
    //     document.querySelector('.player-1-panel').classList.remove('active');
    //     document.querySelector('.player-0-panel').classList.add('active');
    // }
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('.dice').style.display = 'none';

    /* In this code below this will not work the change for second player to first because we must write again the opposite code to do that, from player-1 to player-0 . Thus we uses the tolgle method */

    // document.querySelector('.player-0-panel').classList.remove('active');
    // document.querySelector('.player-1-panel').classList.add('active');
}

document.querySelector('btn-new').addEventListener('click', function(){
    
});

// document.querySelector('#current-' + currentPlayer).innerHTML = '<em>' + dice + '</em>';

// var x = document.querySelector('#score-0').textContent;

