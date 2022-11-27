const groceries = {
    "Juice": {
        price: 5,
        discount: 0,
    } ,
    "Chocolate": {
        price: 12,
        discount: 1.2,
    },
    "Vine": {
        price: 35,
        discount: 0.5,
    },
    "Cheese": {
        price: 21,
        discount: 0.2,
    }
}


const shoppingBag = [
    
    {product: 'Chocolate', quantity: 3},
    {product: 'Cheese', quantity: 8},
    {product: 'Vine', quantity: 5},
]


let totalSum = 0;

//function
function getTotalPriceOfShoppingBag(shoppingBag){
    for(let i = 0; i < shoppingBag.length; i++){       
        for(let name in groceries){
            if(shoppingBag[i].product == name){
                let discount = groceries[name].price * groceries[name].discount / 100;
                let sumPosition =((groceries[name].price  - discount) * shoppingBag[i].quantity);
                totalSum += sumPosition;
                
                
            }
        }
        
    }
    
    return totalSum;
    
}

const total = getTotalPriceOfShoppingBag(shoppingBag);
console.log(total.toFixed(1));