const shallowObjClone = require('../functions/shallowObjClone')

test('create a clone of the object parameter', () => {
    const myObj = { person: "A", number: 42 }
    // expect(shallowObjClone(myObj)).toBe(myObj) --> ye ni rhega

    expect(shallowObjClone(myObj)).toStrictEqual(myObj)
})