const suspectInfo = {
    "James": ["Jacob", "Bill", "Lucas"],
    "Johny": ["David", "Kyle", "Lucas"],
    "Peter": ["Lucy", "Kyle"],
};

const deadPeople = ["Lucas", "Bill"];

function getKiller(suspectInfo, deadPeople){
    
    for (let name of Object.keys(suspectInfo)) {
        
        console.log(name);
    }
}

getKiller(suspectInfo, deadPeople);