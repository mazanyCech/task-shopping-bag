const heroPlayer ={
    name: "Timbersaw",
    health: 100,
    heatEnemy(enemyPlayer){
        let decreaseHealthEnemy = enemyPlayer.health - 10;
        //console.log(decreaseHealthEnemy);
        
    }
};


const enemyPlayer ={
    name: "Bane",
    health: 100,
    heatHero(heroPlayer){
        heroPlayer.heatEnemy(this.health); 
        heroPlayer.health - 10;
         
    }
    
}


//Function start game where the players will fight each other 
//if ti`ll be 0 then calls method "heatEnemy", if it`ll be 1 then calls method "heatHero"
function startGame(heroPlayer, enemyPlayer, resultRandomNumber){
    heroPlayer.heatEnemy(enemyPlayer);
    enemyPlayer.heatHero(heroPlayer);

    
    
    while (heroPlayer.heatEnemy(enemyPlayer) >= 0 ){
        if(resultRandomNumber == 0){
            heroPlayer.heatEnemy(enemyPlayer);
            //console.log(heroPlayer.heatEnemy(enemyPlayer));
            console.log(enemyPlayer);
        } 
    }
    
}

//Function get random number for function startGame
function getRandomNumberInRange(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



let resultRandomNumber = getRandomNumberInRange(0 , 1);

startGame(heroPlayer, enemyPlayer, resultRandomNumber);
