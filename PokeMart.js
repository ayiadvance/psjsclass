"use strict";

var pokemart = {
    "Pokeball": 10,
    "Great Ball": 20,
    "Hyper Ball": 40,
    "Luxury Ball": 30,
    "Net Ball": 25,
    "Beast Ball": 50,
    "Quick Ball": 20,
    "Potion": 15,
    "Super Potion": 25,
    "Hyper Potion": 30
}

var cart = {};
var money = 1000; 

function addToCart(item, amount) {
    if(pokemart[item] === undefined)
        console.log(`You tried to add ${item}s to your cart, but ${item}s are not sold at this PokeMart.`);
    else if (!Number.isInteger(amount) || amount <= 0)
        console.log(`You did not make the amount of ${item}s to be added a positive integer, so it could not be added to your cart.`);
    else {
        if(cart[item] === undefined)
            cart[item] = 0;
        cart[item] += amount;
        if(amount === 1)
            console.log(`You added 1 ${item} to your cart.`);
        else
            console.log(`You added ${amount} ${items} to your cart.`);
    }
}

function removeFromCart(item, amount) {
    if(cart[item] === undefined)
        console.log(`You tried to remove ${item}s from your cart, but there are no ${item}s in your cart.`);
    else if (!Number.isInteger(amount) || amount <= 0)
        console.log(`You did not make the amount of ${item}s to be removed a positive integer, so they could not be removed from your cart.`);
    else if ((cart[item] - amount) < 0) {
        cart[item] = 0;
        console.log(`You tried to remove more ${item}s than you have in your cart, so all of them were removed.`);
    }
    else {
        cart[item] -= amount;
        if(amount === 1)
            console.log(`You removed 1 ${item} from your cart.`);
        else
            console.log(`You removed ${amount} ${items} from your cart.`);
    }
}

function checkout() {
    let cost = 0;
    console.log();
    console.log(`You want to buy:`);

    //cycles through each item in the cart
    for(x in cart) {
        if(cart[x] != 0) {
            cost += cart[x] * pokemart[x];
            if(cart[x] === 1)
                console.log(`A ${x} for ${pokemart[x]} PokeDollars.`);
            else
                console.log(`${cart[x]} ${x}s for ${pokemart[x]} PokeDollars each.`);
        }
    }

    //states the results of the checkout
    console.log();
    console.log(`This purchase costs ${cost} PokeDollars.`);
    if(cost > money)
        console.log("You do not have enough money for this purchase. Please remove some items.");
    else {
        console.log("You have successfully bought what was in your cart.");
        console.log(`You now have ${money - cost} PokeDollars remaining.`);
        money -= cost;
        if(cart["Pokeball"] >= 10)
            console.log("Wait! For buying so many PokeBalls, we will also give you this Premier Ball for free!");
        cart = {};
        console.log();
    }
}

console.log(`You have ${money} PokeDollars.`);
console.log();
addToCart("Pokeball", 10);
addToCart("Great Ball", "tree");
addToCart("Love Ball", 10);
addToCart("Hyper Potion", 5);
addToCart("Quick Ball", 5);
checkout();

addToCart("Hyper Ball", 3);
removeFromCart("Hyper Ball", 2);
checkout();
