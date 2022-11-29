const heroPlayer ={
    name: "Timbersaw",
    health: 100,
    heatEnemy(enemyPlayer){        
        console.log(enemyPlayer.health = enemyPlayer.health - 10);
    }
};


const enemyPlayer ={
    name: "Bane",
    health: 100,
    heatHero(heroPlayer){
        console.log(heroPlayer.health = heroPlayer.health - 10);
    }
}



//Function start game where the players will fight each other 
//if ti`ll be 0 then calls method "heatEnemy", if it`ll be 1 then calls method "heatHero"
function startGame(heroPlayer, enemyPlayer, getRandomNumberInRange){
 
    while (enemyPlayer.health >= 0 && heroPlayer.health >= 0){      
        let random = getRandomNumberInRange(0, 1);
        if(random === 0){
            heroPlayer.heatEnemy(enemyPlayer);           
            
        } else if(random === 1){
            enemyPlayer.heatHero(heroPlayer);
                    
        }

    }
    if(enemyPlayer.health > 0 ){
        alert(`${enemyPlayer.name} won, He had ${enemyPlayer.health} health points`);
    } else if(heroPlayer.health > 0){
        alert(`${heroPlayer.name} won, He had ${heroPlayer.health} health points`);
    }
    
    
}

//Function get random number for function startGame
function getRandomNumberInRange(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//let result = getRandomNumberInRange(0, 1);

startGame(heroPlayer, enemyPlayer, getRandomNumberInRange);
