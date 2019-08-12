"use strict"; 
for(i = 1; i <= 100; i++) {
    let string = "";
    if(i % 4 === 0)
        string += "ludi";
    if(i % 6 === 0)
        string += "colo";
    if(string === "")
        string += i;
    console.log(string);
}