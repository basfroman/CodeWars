function tickToward(start,end){

    let counter_x = 1, counter_y = 1;

    if (start[0] === end[0] && start[1] === end[1]) {
        return [start];
    }

    if (start[0] > end[0]) {
        counter_x = -1;
    }
    if (start[1] > end[1]) {
        counter_y = -1;
    }

    let out = [start];
    let x = start[0], y = start[1];

    while (x !== end[0] || y !== end[1]){

        x !== end[0] ? x += counter_x : x;

        y !== end[1] ? y += counter_y: y;

        out.push([x, y]);
    }
    return out;
}


console.log(tickToward([3, 3],[3, 3])); //[3,2],[4,3],[4,4],[4,5]
console.log(tickToward([3, 2],[4, 5])); //[3,2],[4,3],[4,4],[4,5]
console.log(tickToward([5, 1],[5, -2])); // [[5,1],[5,0],[5,-1],[5,-2]]