function sameMark(alibaba,neighborhoods){

    let alb = 'AliBaba'.split('');

    let out = '';

    let count = 0;

    return neighborhoods.map(function (x) {

        out = '';
        count = 0;

        alibaba.split('').forEach(function (ch, ind) {

            if (alb[ind - count] === ch){

                out += x[ind - count];

            } else {

                out += alibaba[ind];
                count += 1;

            }
        });

        if (alb.length < x.length) {
            out += x.substring(alb.length);
        }
        return out;


    })

}


//sameMark("A*l#i@B!a%b&a",["JohnSmith","MichaelJackson","JamesBond"])
console.log(sameMark("A*l#i@B!a%b&a",["JohnSmith","MichaelJackson","JamesBond"]));
console.log(["J*o#h@n!S%m&ith","M*i#c@h!a%e&lJackson","J*a#m@e!s%B&ond"]);