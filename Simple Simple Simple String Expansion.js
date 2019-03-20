/*
https://www.codewars.com/kata/simple-simple-simple-string-expansion/train/javascript
 */

function stringExpansion(s) {
    let strNew = '';
    let n = 1;
    for (let i = 0; i < s.length; i++) {
        if (s[i] == +s[i]) {
            n = +s[i];
        } else {
            strNew += s[i].repeat(n)
        }
    }
    return strNew;
}


console.log(stringExpansion('3abc'));
console.log(stringExpansion('3n332sf2a'));
console.log(stringExpansion('3D2a5d2f'));