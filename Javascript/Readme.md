# Testing Javascript using JEST

1. Create new folder
2. Write a basic addition function

```
function sum(a, b) {
    return a + b
}
module.exports = sum
```

3. Initialize the folder with `npm init -y`
4. Install JEST as Dev Dependency using `npm install -D jest`
5. Add a test script in `package.json` file

```
test: "jest"
```

6. Create a test file with the same name as the file to be tested with `.test.js` extension
7. Write a test case

```
const sum = require('./sum')
test('adds 1 + 2 to equal to 3', () => {
    expect(sum(1, 2)).toBe(3)
})
```

8. Run the test using `npm test` or `npm run jest`
9. What is unit test?

- A unit test is a way of testing a unit - the smallest piece of code that can be logically isolated in a system. In most programming languages, that is a function, a subroutine, a method or property.

10. 