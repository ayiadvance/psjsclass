"use strict"; 
function runMove(accuracy) {
    return Math.floor(Math.random() * 100) < accuracy;
}

var x = 0;
while(runMove(70))
    x++;
console.log(`Focus Blast hits ${x} times before missing!`);