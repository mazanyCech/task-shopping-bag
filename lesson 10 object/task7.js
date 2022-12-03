//Description
// Imagine that a police station is under investigation. There have been
// several crimes have been committed. The police have other higher priority tasks,
// so they've asked you to write a program that will calculate the perpetrator from
// already known data.

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