/* solved
https://www.codewars.com/kata/fix-string-case/train/javascript
 */


function solve(s){
    let count = 0;
    for(let i = 0; i < s.length; i++){
        if (s[i].toUpperCase() === s[i]){
            count += 1;
        }
    }
    if ((s.length/2) >= count) {
        return s.toLowerCase();
    } else {
        return s.toUpperCase();
    }
}


console.log(solve("code"));
console.log(solve("CODe"));
console.log(solve("COde"));
console.log(solve("Code"));
