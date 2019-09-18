/* solved
https://www.codewars.com/kata/the-office-iv-find-a-meeting-room/train/javascript
 */

function meeting(x){
    return x.indexOf('O')===-1?'None available!':x.indexOf('O');
}


console.log(meeting(['X', 'O', 'X']));
