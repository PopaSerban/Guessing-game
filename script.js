'use strict';

let secretNumber = generateNumber();
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener(
    'click', () =>{
        const guess = Number(document.querySelector('.guess').value);
        console.log(guess, typeof guess);
        //When there is no input value
        if(!guess){
            displayMessage('⛔️ No Number');
        }else if(guess === secretNumber) {
            displayMessage('🎉 Correct Number');
            numberGuessed(secretNumber);
            if(score > highscore) {
                updateHighScore(score);
            }

            //When guess is too low;
        }else if (guess !== secretNumber){
            if(score >= 1){
                displayMessage(guess < secretNumber ? '📉 Too Low!' : '📈 Too High!');
                updateScore();
            }else{
                displayMessage('💥 You lost the game!');
            }
        }
    });

document.querySelector('.again').addEventListener('click',
()=>{
    resetGame();
});


function displayMessage(message){
    document.querySelector('.message').textContent = message;
}

function numberGuessed(secretNumber){
    document.querySelector('body').style.backgroundColor = '#60b347';
            document.querySelector('.number').style.width = '30rem';
            document.querySelector('.number').textContent = secretNumber;
}

function updateHighScore(score){
    highscore = score;
    document.querySelector('.highscore').textContent = highscore;
}
function updateScore(){
    score--;
    document.querySelector('.score').textContent = score;
}

function resetGame(){
    document.querySelector('body').style.backgroundColor = '#333';
    score = 20;
    secretNumber = generateNumber();
    displayMessage('Start guessing...');
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
}

function generateNumber(){
    return Math.trunc(Math.random()*20)+1;
}