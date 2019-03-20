/* solved
https://www.codewars.com/kata/power-of-4/train/javascript
 */

function powerOf4(n) {
    return typeof(n) === 'number' && n % 4 === 0 && n > 0;
}


Test.expect(powerOf4(4));
Test.expect(powerOf4(16));
Test.expect(powerOf4(1) === false);
Test.expect(powerOf4(3.1415) === false);
Test.expect(powerOf4("4") === false);
Test.expect(powerOf4(null) === false);
Test.expect(powerOf4(undefined) === false);
Test.expect(powerOf4(function() {}) === false);