function isPalindrome(word) {
    word = word.toLowerCase()
    return word === word.split('').reverse().join('').replaceAll(",", "");
}
module.exports = isPalindrome