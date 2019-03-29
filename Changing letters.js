/*
kata https://www.codewars.com/kata/changing-letters/train/javascript
 */

function swap(st){
    return st.replace(/[aeiou]/g, v => v.toUpperCase() )
}


console.log(swap("HelloWorld!")); //"HEllOWOrld!")