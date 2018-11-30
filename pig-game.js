/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores , roundScore, currentPlayer, gameStatus = true, tempDice1, tempDice2, getTheNewScore, NameOfPlayerOne, NameOfPlayerTwo;

initialGame();

document.querySelector('.btn-roll').addEventListener('click', function() {
    if (gameStatus){
        var dice1  = Math.floor(Math.random() * 6) + 1;
        var dice2  = Math.floor(Math.random() * 6) + 1;
        // 2. Display the dice image and the result
        var dice1DOM = document.getElementById('dice-1');
        var dice2DOM = document.getElementById('dice-2');
        dice1DOM.style.display = 'block';
        dice1DOM.src = 'dice-' + dice1 + '.png';
        dice2DOM.style.display = 'block';
        dice2DOM.src = 'dice-' + dice2 + '.png';
        
        if (dice1 === 6 && tempDice1 === 6 || dice2 === 6 && tempDice2 === 6){
            //Player looses all its score
            scores[currentPlayer] = 0;
            // Update the score in the player
            document.querySelector('#score-' + currentPlayer).textContent = scores[currentPlayer];
            // Finally go to next player
            nextPlayer();
        }else if (dice1 !== 1 || dice2 !== 1){ // 3. Update the round score IF the rolled number is NOT a 1
                roundScore += dice1 + dice2;
                document.querySelector('#current-' + currentPlayer).textContent = roundScore;
                
            }else{
                //Next player    
                nextPlayer();
                // 1. Need to get the random number
        // We don't need the public variable of dice any more because we have // inside the event so we will not use it in other situation
            }        
        tempDice1 = dice1;
        tempDice2 = dice2;
    }
});

document.querySelector('.btn-hold').addEventListener('click', function() {
    if (gameStatus){
        // 1. Move the current score to the scores array
        scores[currentPlayer] += roundScore;

        // 2. Update the global score
        document.querySelector('#score-' + currentPlayer).textContent = scores[currentPlayer];

        // Check if one of players won the game
        if (scores[currentPlayer] >= 20){
            document.querySelector('#name-' + currentPlayer).textContent = 'Winner!'
            document.querySelector('#dice-1').style.display = 'none';
            document.querySelector('#dice-2').style.display = 'none';
            document.querySelector('.player-' + currentPlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + currentPlayer + '-panel').classList.remove('active');
            gameStatus = false;
        }else if(scores[currentPlayer] >= getTheNewScore && getTheNewScore !== ''){
            document.querySelector('#name-' + currentPlayer).textContent = 'Winner!'
            document.querySelector('#dice-1').style.display = 'none';
            document.querySelector('#dice-2').style.display = 'none';
            document.querySelector('.player-' + currentPlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + currentPlayer + '-panel').classList.remove('active');
            gameStatus = false;
        }
        else{
            //Next player
            nextPlayer();
        }  
    }     
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
    document.querySelector('#dice-1').style.display = 'none';
    document.querySelector('#dice-2').style.display = 'none';

    /* In this code below this will not work the change for second player to first because we must write again the opposite code to do that, from player-1 to player-0 . Thus we uses the tolgle method */

    // document.querySelector('.player-0-panel').classList.remove('active');
    // document.querySelector('.player-1-panel').classList.add('active');
}

document.querySelector('.btn-new').addEventListener('click', initialGame);

function initialGame(){
    scores = [0,0];
    roundScore = 0;
    currentPlayer = 0;
    gameStatus = true;
    document.querySelector('.final-score').value = '';
    document.querySelector('#dice-1').style.display = 'none';
    document.querySelector('#dice-2').style.display = 'none';
    document.getElementById('score-0').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    // NameOfPlayerOne = prompt('Player One Give Us Your Name: ');
    // NameOfPlayerTwo = prompt('Player Two Give Us Your Name: ');

    // if (NameOfPlayerOne === null || NameOfPlayerOne === ''){
    //     document.getElementById('name-0').textContent = 'Player 1';
    // }else if (NameOfPlayerTwo === null || NameOfPlayerTwo === ''){
    //     document.getElementById('name-1').textContent = 'Player 2';
    // }else{
    //     document.getElementById('name-0').textContent = NameOfPlayerOne;
    //     document.getElementById('name-1').textContent = NameOfPlayerTwo;
    // }
    // // alert(NameOfPlayerOne,NameOfPlayerTwo);
    // console.log(NameOfPlayerOne);
    // console.log(NameOfPlayerTwo);
    

}

document.querySelector('.final-score').addEventListener('blur', function() {
    getTheNewScore = document.querySelector('.final-score').value
    console.log(getTheNewScore);
});

// document.querySelector('#current-' + currentPlayer).innerHTML = '<em>' + dice + '</em>';

// var x = document.querySelector('#score-0').textContent;

