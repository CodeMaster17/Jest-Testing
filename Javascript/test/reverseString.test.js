const reverseString = require('../functions/reverseString');
test('reverseString function exists', () => {
    expect(reverseString('Dave')).toBe('evad');
});