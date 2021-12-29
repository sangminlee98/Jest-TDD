const add = require("../add.js");

test('add',() => {
    expect(add(1,2)).toBe(3);
});

test('object assignment', () => {
    const data = {one: 1};
    data['two'] = 2;
    expect(data).toEqual({one: 1, two: 2});
    
});

test('adding floating point numbers', () => {
    const value = 0.1 + 0.2;
    expect(value).toBeCloseTo(0.3);
});

test('there is no I in team', () => {
    expect('team').not.toMatch('i');
});

test('but there is a "stop" in Christoph', () => {
    expect('Christoph').toMatch('stop');
});