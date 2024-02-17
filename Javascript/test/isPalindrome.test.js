const isPalindrome = require('../functions/isPalindrome');
test('Tacocat is a palindrome', () => {
    expect(isPalindrome('Tacocat')).toBe(true)
})
test('Harshit is not a palindrome', () => {
    expect(isPalindrome('Harshit')).toBe(false)
})