"use strict";

let route = {
    name: `Route 50`,
    grass: {
        Bounsweet: [20, 24],
        Swablu: [14, 18],
        Torchic: [12, 16]
    },
    water: {
        Dratini: [30, 35],
        Magikarp: [5, 10]
    },
    step(terrain) {
        if(Math.random() <= .1) this.encounter(terrain);
    },
    encounter(terrain) {
        this.encounters++;
        let isShiny = false;
        let wildmon = Object.keys(this[terrain])[Math.floor(Math.random()*Object.keys(this[terrain]).length)];
        let level = this[terrain][wildmon][0] + Math.floor(Math.random()*(this[terrain][wildmon][1]-this[terrain][wildmon][0]+1));
        console.log(`A level ${level} wild ${wildmon} appeared in the ${terrain}! You throw a PokeBall!`);
        if(Math.random() < (1/8092)) {
            console.log(`Wow! It's a shiny Pokemon!`);
            isShiny = true;
            this.shinyencounters++;
        }
        if(this.catchMon()) {
            console.log(`The PokeBall clicks! You caught ${wildmon}!`);
            this.catches++;
            if(isShiny) this.shinycatches++;
        } 
        else console.log(`The PokeBall breaks open, and ${wildmon} flees.`);
    },
    catchMon() {
        return Math.random() < .4;
    },

    encounters: 0,
    catches: 0,
    shinyencounters: 0,
    shinycatches: 0
};

console.log(`You are entering ${route.name}.`);
let area = "grass";
for(let i = 1; i <= 500; i++) {
    route.step(area);
    if(i === 250) area = "water";
    if(i === 300) area = "grass";
}
console.log(`You are leaving ${route.name}.`);
console.log(`You encountered ${route.encounters} Pokemon, and caught ${route.catches} of them.`);
console.log(`You encountered ${route.shinyencounters} shiny Pokemon, and caught ${route.shinycatches} of them.`);
