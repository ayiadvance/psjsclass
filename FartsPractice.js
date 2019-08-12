"use strict";
var pokemon = ["Marshadow", "Pikachu", "Lucario", "Flareon"];

//practice 1 
for(var x of pokemon)
    console.log(x);

//practice 2
var count = 0;
while(count < pokemon.length) {
    if(pokemon[count] === "Lucario")
        break;
    count++;
}
if(count === pokemon.length)
    console.log("Lucario is not in the array.");
else 
    console.log(`Lucario is at index ${count}.`);

//practice 3
for(var x of pokemon) {
    console.log(x);
    if(x === "Pikachu")
        break;
}

//practice 4
var hasSnorlax = false;
for(var x of pokemon)
    if(x === "Snorlax")
        hasSnorlax = true;

//practice 5
var hasFlareon = false;
for(var x of pokemon)
    if(x === "Flareon")
        hasSnorlax = true;