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
    });

    describe('succeed()', () => {});

    describe('fail()', () => {});

    describe('get()', () => {});
});
