const score = {
    win: 0,
    lose: 0,
    ties: 0
};

displayScore();

function computerMove(){
    let comChoice = '';

    const randNum = Math.random();

    if (randNum > 0 && randNum < 1/3){
        comChoice = 'rock';
    }else if (randNum >= 1/3 && randNum < 2/3){
        comChoice = 'paper';
    }else{
        comChoice = 'scissors';
    }
    return comChoice;
}

function playGame(playerMove){
    const pickcomputerMove = computerMove();
    let result = '';
    if (playerMove === 'scissors'){
        if (pickcomputerMove === 'rock'){
            result = 'You lose';
        }else if (pickcomputerMove === 'paper'){
            result = 'You win';
        }else {
            result = 'Tie';
        }
    }

    if (playerMove === 'rock'){
        if (pickcomputerMove === 'rock'){
            result = 'Tie';
        }else if (pickcomputerMove === 'paper'){
            result = 'You lose';
        }else {
            result = 'You win';
        }
    }

    if (playerMove === 'paper'){
        if (pickcomputerMove === 'rock'){
            result = 'You win';
        }else if (pickcomputerMove === 'paper'){
            result = 'Tie';
        }else {
            result = 'You lose';
        }
    }

    document.querySelector('.result').innerHTML = result;

    document.querySelector('.choice').innerHTML = `You <img src="images/${playerMove}-emoji.png" alt="" class="move-icon"> and <img src="images/${pickcomputerMove}-emoji.png" alt="" class="move-icon"> computer`

    if (result === 'You win'){
        score.win += 1;
    }else if (result === 'You lose'){
        score.lose += 1;
    }else{
        score.ties += 1;
    }

    displayScore();
}

function displayScore(){
    document.querySelector('.displayScore').innerHTML = ` Wins: ${score.win}, Loses: ${score.lose}, Ties: ${score.ties}`
}