const suspectInfo = {
    "James": ["Jacob", "Bill", "Lucas"],
    "Johny": ["David", "Kyle", "Lucas"],
    "Peter": ["Lucy", "Kyle"],
};

const deadPeople = ["Lucas", "Bill"];


function getKiller(suspectInfo, deadPeople){
    let count = 0;
    for (let value in suspectInfo) {
        for(let i = 0; i < suspectInfo[value].length; i++){          
           for(let j = 0; j < deadPeople.length; j++){
                if(suspectInfo[value][i] === deadPeople[j]){
                    count++;
                    if(count > 1 && count < 3){
                        console.log(value);
                    }

                }
            }
        }

        
    }
}

getKiller(suspectInfo, deadPeople);