/*
Kata https://www.codewars.com/kata/character-frequency-2
*/

function charFreq(message) {
    let out = {};
    let newMessage = message.toLowerCase().replace(/ /g, '').split('').sort();
    console.log(newMessage);
    return out;
}


console.log(charFreq('I like cats'));
