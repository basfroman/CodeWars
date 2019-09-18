/* solved

 */


function formatMoney(amount){
    return '$'+parseFloat(amount).toFixed(2);
}


console.log(formatMoney(33.9));
console.log(formatMoney(3));
console.log(formatMoney(3.1));