const { succeed, fail, repair, get } = require('./enhancer.js');

// test suite

describe('enhancer.js', () => {

    describe('repair()', () => {

        test('restores the durability of an item to 100', () => {
            const item = {
                name: 'Lambda Shield',
                durability: 98,
                displayName: '[+3] Lambda Shield'
            };

            const expected = {
                name: 'Lambda Shield',
                durability: 100,
                displayName: '[+3] Lambda Shield'
            };

            expect(repair(item)).toEqual(expected);
            // expect(repair({ durability: 43 }).durability).toBe(100);
        });

        it('repair() should return null when arguments are not objects that have a durability key with number values', () => {
            expect(repair()).toBeNull(); // no argument passed 
            expect(repair('1')).toBeNull(); // string passed in
            expect(repair(undefined)).toBeNull(); // undefined passed in
            expect(repair(null)).toBeNull(); // null passed in
            expect(repair({})).toBeNull(); // empty object passed in
            expect(repair([])).toBeNull(); // empty array passed in
            expect(repair(NaN)).toBeNull(); // NaN passed in
        });
    });

    describe('succeed()', () => {});

    describe('fail()', () => {});

    describe('get()', () => {});
});
