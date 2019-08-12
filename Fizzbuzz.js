"use strict";
for (let i = 1; i <= 100; i++) {
    let string = "";
    if (i % 3 === 0)
        string += "fizz";
    if (i % 5 === 0)
        string += "buzz";
    if (string === "")
        string += i;
    console.log(string);
    string = "";
}
