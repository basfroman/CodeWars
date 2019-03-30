function findAll(n, k) {

    if (9 * k < n) return [];

    let start = 10 ** (k-1);
    let end = 10 ** k - 1;
    let out = [0, -2, -3];

    for (let i = start; i <= end; i++) {

        //console.log(i, end-i + start);

        if (String(i).split('').map(Number).reduce((x,y) => (x+y)) === n &&
            out[1] === -2 &&
            String(i).split('').sort().join('') === String(i))
        {
            out[1] = String(i);
        }

        if (String(end - i + start).split('').map(Number).reduce((x,y)=>(x+y)) === n &&
            out[2] === -3 &&
            String(end - i + start).split('').sort().join('') === String(end - i + start))
        {
            out[2] = String(end - i + start);
        }

    }

    for(let i = out[1]; i <= out[2]; i++){
        out[0] += String(i).split('').map(Number).reduce((x,y) => (x+y)) === n &&
        String(i).split('').sort().join('') === String(i)? 1 : 0;
    }

    return out;
}


//findAll(10, 3)
console.log(findAll(10, 3)); // [8, '118', '334']);
// console.log(findAll(27, 3)); // [1, '999', '999']);
// console.log(findAll(84, 4)); // []);
// console.log(findAll(35, 6)); // [123, '116999', '566666'])