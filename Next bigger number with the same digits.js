function nextBigger(n){
    //console.log(n);
    let out = '';
    let new_out = '';
    let new_n = String(n);
    for (let i = new_n.length - 1; i>=0; i--){
        if (new_n[i] > new_n[i-1]){
            let find_sec = new_n.substring(i-1);
            //console.log(+new_n.substring(i-1), nextBigger2(+find_sec));
            out = nextBigger2(+find_sec)[0] + new_n.substring(1, nextBigger2(find_sec)[1]) + new_n[0] + find_sec.substring(nextBigger2(+find_sec)[1]+1);
            new_out = getReplaseMaxMin (out);
            break
        }
    }

    return new_n.substring(0, new_n.length-new_out.length) + new_out;


    function nextBigger2(n) {
        let str_n = String(n);
        let sort_n = [... new Set(str_n.split('').map(Number).sort((x,y)=>(x-y)))].indexOf(+String(n)[0])+1;
        return [[... new Set(str_n.split('').map(Number).sort((x,y)=>(x-y)))][sort_n], sort_n];

    }

    function getReplaseMaxMin(n) {
        console.log(n);
        let out = String(n).split('').map(Number).sort((x,y)=>(x-y));
        let numMin = out[0];
        let numMax = out[out.length-1];

        out = String(n).split('').map(Number);

        console.log('minmax  = ', out.join(''), numMin, numMax);
        for (let i = 0; i < out.length; i++){
            console.log('loop1=',out[i]);
            if (out[i] === numMax) {
                out[i] = numMin;
                break;
            }
        }

        for (let i = out.length - 1; i > 0; i--){
            console.log('loop2=',out[i]);
            if (out[i] === numMin) {
                out[i] = numMax;
                break;
            }
        }

        return out.join('');
    }
}

//console.log(nextBigger(20188));
//console.log(nextBigger(201720111));
console.log(nextBigger(59884848459853));
console.log(59884848483559);