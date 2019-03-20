/* solved
https://www.codewars.com/kata/the-office-iv-find-a-meeting-room/train/javascript
 */

function meeting(x){
    return x.indexOf('O')===-1?'None available!':x.indexOf('O');
}


Test.describe("Example tests",_=>{
    Test.assertEquals(meeting(['X', 'O', 'X']), 1);
    Test.assertEquals(meeting(['O','X','X','X','X']), 0);
    Test.assertEquals(meeting(['X','X','X','X','X']), 'None available!');
});