/*
solved
 */


function calculator(a,b,sign){
    if (isNaN(a) || isNaN(b)) {
        return "unknown value";
    }
    if (sign === '+') {
        return a + b;
    }
    if (sign === '-') {
        return a - b;
    }
    if (sign === '/') {
        return a / b;
    }
    if (sign === '*') {
        return a * b;
    }
    return "unknown value";
}

function calculator2(a, b, sign) {
    try
    { return eval(a+sign+b); }
    catch(e)
    { return "unknown value"; }
}