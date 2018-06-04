var expect = require('expect');

var {isRealString} = require('./validation');

describe('Check if its real string', () => {
    it('should reject non-string values', () => {

        var obj = {
            name: 'mimon',
            age: 28
        };

        expect(isRealString(obj)).toBeFalsy();
    });

    it('should reject string with only spaces', () => {

        var str = '   ';

        expect(isRealString(str)).toBeFalsy();
    });

    it('should reject string with only spaces', () => {

        var str = '   ';

        expect(isRealString(str)).toBeFalsy();
    });

    it('should allow string with non-space characters', () => {

        var str = '   Mimon   ';

        expect(isRealString(str)).toBeTruthy();
    });
});