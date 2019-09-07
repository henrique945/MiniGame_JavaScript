var life, heal, doubleDamage, dice, activePlayer, gamePlaying = true;

life = [40,40];
doubleDamage = [0,0];
heal = [0,0];
activePlayer = 0;


document.querySelector('.dice').style.display = 'none';

document.querySelector('.btn-atk').addEventListener('click', function(){
    var currentDice;

    if(gamePlaying){
        currentDice = rollDice();
        
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('active');
        
        life[activePlayer] -= currentDice;
        document.querySelector('#score-' + activePlayer).textContent = life[activePlayer];
    
        dead();
    }
})

document.querySelector('.btn-two').addEventListener('click', function(){
    var currentDice;
    
    if(gamePlaying){
        if(doubleDamage[activePlayer] === 0){
            currentDice = rollDice();
            currentDice *= 2;
            doubleDamage[activePlayer] ++;
            
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('active');
            
            life[activePlayer] -= currentDice;
            document.querySelector('#score-' + activePlayer).textContent = life[activePlayer];
        }
        else{
            alert('Double Damage already used');
        }
    
        dead();
    }
})

document.querySelector('.btn-heal').addEventListener('click', function(){
    var currentDice;
    
    if(gamePlaying){
        if(heal[activePlayer] === 0){
            currentDice = rollDice();
            life[activePlayer] += currentDice;
            
            document.querySelector('#score-' + activePlayer).textContent = life[activePlayer];
            heal[activePlayer] ++;
            
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('active');
            
        }
        else{
            alert('Can\'t heal anymore');
        }
    }
})

function rollDice(){
    dice = Math.floor(Math.random() * 6) + 1;
    document.querySelector('.dice').style.display = 'block';
    document.querySelector('.dice').src = 'dice-' + dice + '.png';
    return dice;
}

function dead(){
    if(life[activePlayer] < 1){
        document.querySelector('#name-' + activePlayer).textContent = 'Loser!';
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        document.querySelector('#name-' + activePlayer).textContent = 'Winner!';

        gamePlaying = false;
    }

}

