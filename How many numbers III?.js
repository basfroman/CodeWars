function findAll(n, k) {

    if (9 * k < n) return [];

    let start = Array(k).fill(1).map((el, ind) =>
        (10 * ind < n ? n - (9 * ind) - (k - ind) > 10 ? 9 : n - (9 * ind) - (k - ind - 1) : 1)).reverse().join('');
    let end = String((n - (n % k)) / k).repeat(k - (n % k)) + String((n - (n % k)) / k + 1).repeat((n % k));
    let out = [0, start, end];
    let count = start;
    let begin = [];
    let begin_str = '';

    for (let i = +start; i <= +end; i+=9) {

        begin_str = String(i);
        begin = begin_str.split('');

        if (begin.map(Number).reduce((x, y) => (x + y)) === n &&
            begin.sort().join('') === String(i)) {
            out[0] += 1;
            count = i;
        }
    }

    return out;
}

//console.log(findAll(35, 6)); // [123, '116999', '566666'])
//findAll(10, 3)
console.log(findAll(10, 3)); // [8, '118', '334']);
//console.log(findAll(27, 3)); // [1, '999', '999']);
//console.log(findAll(84, 4)); // []);


// for (let i = start; i <= end; i++) {
//
//     if (String(i).split('').map(Number).reduce((x,y) => (x+y)) === n &&
//         out[1] === -2 &&
//         String(i).split('').sort().join('') === String(i))
//     {
//         out[1] = String(i);
//     }
//
//     if (String(end - i + start).split('').map(Number).reduce((x,y)=>(x+y)) === n &&
//         out[2] === -3 &&
//         String(end - i + start).split('').sort().join('') === String(end - i + start))
//     {
//         out[2] = String(end - i + start);
//     }
// }
//
// for(let i = out[1]; i <= out[2]; i++){
//     out[0] += String(i).split('').map(Number).reduce((x,y) => (x+y)) === n &&
//     String(i).split('').sort().join('') === String(i)? 1 : 0;
// }
