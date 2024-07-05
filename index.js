function computerMove(){
    let comChoice = '';

    const randNum = Math.random();

    if (randNum > 0 && randNum < 1/3){
        comChoice = 'Rock';
    }else if (randNum >= 1/3 && randNum < 2/3){
        comChoice = 'Paper';
    }else{
        comChoice = 'Scissors';
    }
    return comChoice;
}

function playGame(playerMove){
    const pickcomputerMove = computerMove();
    let result = 'hello';
    if (playerMove === 'Scissors'){
        if (pickcomputerMove === 'Rock'){
            result = 'You lose';
        }else if (pickcomputerMove === 'Paper'){
            result = 'You win';
        }else {
            result = 'Tie';
        }
    }

    if (playerMove === 'Rock'){
        if (pickcomputerMove === 'Rock'){
            result = 'Tie';
        }else if (pickcomputerMove === 'Paper'){
            result = 'You lose';
        }else {
            result = 'You win';
        }
    }

    if (playerMove === 'Paper'){
        if (pickcomputerMove === 'Rock'){
            result = 'You win';
        }else if (pickcomputerMove === 'Paper'){
            result = 'Tie';
        }else {
            result = 'You lose';
        }
    }

    alert(`You choose ${playerMove}, computer choose ${pickcomputerMove}. ${result}`)
}