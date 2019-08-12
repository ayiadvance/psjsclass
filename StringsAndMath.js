"use strict"; 
const x = "The solution for "
const y = " is: "

console.log(x + "two plus seven" + y + (2 + 7));
console.log(x + "eight times eleven" + y + (8*11));
console.log(x + "five minus fourteen" + y + (5-14));
console.log(x + "eighty divided by nine" + y + (80/9));
console.log(x + "four times six plus eighteen" + y + (4*6+18));
console.log(x + "the quantity twelve minus two divided by five" + y + ((12-2/5)));
console.log(x + "fifteen plus four divided by six minus forty-two" + y + (15+4/6-42));
console.log(x + "the quantity fifteen plus four divided by the quantity six minus forty-two" + y + ((15+4)/(6-42)));
console.log();

let i = 0;
while (i < 3) {
    console.log("X equals " + i);
    console.log(x + "x plus seven" + y + (i + 7));
    console.log(x + "the quantity x minus seventy-eight times nine" + y + ((i-78)*9));
    console.log(x + "x times one hundred and one divided by four" + y + (i*101/4));
    i = i + 1;
}