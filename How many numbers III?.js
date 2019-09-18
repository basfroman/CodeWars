function findAll(n, k) {

    if (9 * k < n) return [];

    let start = Array(k).fill(1).map((el, ind) =>
        (10 * ind < n ? n - (9 * ind) - (k - ind) > 10 ? 9 : n - (9 * ind) - (k - ind - 1) : 1)).reverse().join('');

    let end = String((n - (n % k)) / k).repeat(k - (n % k)) + String((n - (n % k)) / k + 1).repeat((n % k));

    let out = [0, start, end];
    let begin = [];
    let begin_str = '';
    let bnm = start;

    for (let i = +start; i <= +end; i ++) {

        begin_str = String(i);
        begin = begin_str.split('');

        if (begin.map(Number).reduce((x, y) => (x + y)) === n &&
            begin.sort().join('') === String(i)) {
            out[0] += 1;
            console.log(i, i - bnm, (i - bnm)/9);
            bnm = i;
        }
    }

    return out;
}

console.log(findAll(35, 6)); // [123, '116999', '566666'])
console.log(findAll(10, 3)); // [8, '118', '334']);
console.log(findAll(27, 3)); // [1, '999', '999']);
console.log(findAll(84, 4)); // []);

