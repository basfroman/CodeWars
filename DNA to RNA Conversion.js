/* solved

 */

function DNAtoRNA(dna){
    return dna.replace(/T/g, 'U');
}


console.log(DNAtoRNA('TTTTT'));
console.log(DNAtoRNA('UGTU'));