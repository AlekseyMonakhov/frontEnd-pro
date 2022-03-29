const movies = [
    {id: 1, name: "Fast and Furious", cost: 5.99},
    {id: 2, name: "Fast and Furious 2", cost: 3.99},
    {id: 3, name: "Fast and Furious 4", cost: 4.99},
    {id: 4, name: "Shrek", cost: 12.99},
];

const cart = [];

function addToCart(id) {
    let getId = movies.find(movies => id === movies.id);
    if (!getId){
        alert("wrong id");
        return;
    }
    return cart.push(getId);
}

function printCheck() {
    for(let i = 0; i < cart.length; i++) {
        console.log(`№ ${i+1} ${cart[i].name} ${cart[i].cost}$.`);
    }
}

addToCart(2);
addToCart(4);
printCheck();
