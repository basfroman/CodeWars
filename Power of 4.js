/* solved
https://www.codewars.com/kata/power-of-4/train/javascript
 */

function powerOf4(n) {
    return typeof(n) === 'number' && n % 4 === 0 && n > 0;
}


console.log(powerOf4(4));
console.log(powerOf4(16));
console.log(powerOf4(1));
console.log(powerOf4(3.1415));
console.log(powerOf4("4"));
console.log(powerOf4(null));
console.log(powerOf4(undefined));
console.log(powerOf4(function() {}));
