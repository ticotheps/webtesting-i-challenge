const { succeed, fail, repair, get } = require('./enhancer.js');

// test suite

describe('enhancer.js', () => {

    describe('repair()', () => {

        test('restores the durability of an item to 100', () => {
            const item = {
                name: 'Lambda Shield',
                durability: 98,
                enhancement: 2,
                displayName: '[+3] Lambda Shield'
            };

            const expected = {
                name: 'Lambda Shield',
                durability: 100,
                enhancement: 2,
                displayName: '[+3] Lambda Shield'
            };

            expect(repair(item)).toEqual(expected);
            // expect(repair({ durability: 43 }).durability).toBe(100);
        });

        it('repair() should return null when the argument is not an object that has a durability key containing a number value', () => {
            expect(repair()).toBeNull(); // no argument passed 
            expect(repair('1')).toBeNull(); // string passed in
            expect(repair(undefined)).toBeNull(); // undefined passed in
            expect(repair(null)).toBeNull(); // null passed in
            expect(repair({})).toBeNull(); // empty object passed in
            expect(repair([])).toBeNull(); // empty array passed in
            expect(repair(NaN)).toBeNull(); // NaN passed in
        });
    });

    describe('succeed()', () => {

        test("increases item's enhancement by 1", () => {
            const item = {
                name: 'Lambda Shield',
                durability: 98,
                enhancement: 2,
                displayName: '[+3] Lambda Shield'
            };

            const expected = {
                name: 'Lambda Shield',
                durability: 98,
                enhancement: 3,
                displayName: '[+3] Lambda Shield'
            };

            expect(succeed(item)).toEqual(expected);
            // expect(succeed({ enhancement: 2 }).enhancement).toBe(3);
        });

        it('succeed() should return null when the argument is not an object that has an enhancement key and a durability key containing number values', () => {
            expect(succeed()).toBeNull(); // no argument passed 
            expect(succeed('1')).toBeNull(); // string passed in
            expect(succeed(undefined)).toBeNull(); // undefined passed in
            expect(succeed(null)).toBeNull(); // null passed in
            expect(succeed({})).toBeNull(); // empty object passed in
            expect(succeed([])).toBeNull(); // empty array passed in
            expect(succeed(NaN)).toBeNull(); // NaN passed in
        });
    });

    describe('fail()', () => {
        // If the item's enhancement is less than 15, the durability of the item is decreased by 5.
        test("decreases item's durability by 5 if item's enhancement is less than 15", () => {
            const item = {
                name: 'Lambda Shield',
                durability: 98,
                enhancement: 10,
                displayName: '[+3] Lambda Shield'
            };

            const expected = {
                name: 'Lambda Shield',
                durability: 93,
                enhancement: 10,
                displayName: '[+3] Lambda Shield'
            };

            expect(fail(item)).toEqual(expected);
        });

        // -----------------------------------------------------------------------------------------
        // If the item's enhancement is 15 or more, the durability of the item is decreased by 10.
        test("decreases item's durability by 10 if item's enhancement is 15 or greater", () => {
            const item = {
                name: 'Lambda Shield',
                durability: 98,
                enhancement: 15,
                displayName: '[+3] Lambda Shield'
            };

            const expected = {
                name: 'Lambda Shield',
                durability: 88,
                enhancement: 15,
                displayName: '[+3] Lambda Shield'
            };

            expect(fail(item)).toEqual(expected);
        });

        // -----------------------------------------------------------------------------------------
        // If the item's enhancement level is greater than 16, the enhancement level decreases by 1.
        test("decreases item's durability by 10 AND decreases its enhancement by 1, if item's enhancement is greater than 16", () => {
            const item = {
                name: 'Lambda Shield',
                durability: 98,
                enhancement: 17,
                displayName: '[+3] Lambda Shield'
            };

            const expected = {
                name: 'Lambda Shield',
                durability: 88,
                enhancement: 16,
                displayName: '[+3] Lambda Shield'
            };

            expect(fail(item)).toEqual(expected);
        });

        it('fail() should return null when the argument is not an object that has an enhancement key and a durability key containing number values', () => {
            expect(fail()).toBeNull(); // no argument passed 
            expect(fail('1')).toBeNull(); // string passed in
            expect(fail(undefined)).toBeNull(); // undefined passed in
            expect(fail(null)).toBeNull(); // null passed in
            expect(fail({})).toBeNull(); // empty object passed in
            expect(fail([])).toBeNull(); // empty array passed in
            expect(fail(NaN)).toBeNull(); // NaN passed in
        });

    });

    describe('get()', () => {
        // if the enhancement level is 0, then the displayName is not modified.
        test("makes no changes to the displayName if enhancement is equal to 0", () => {
            const item = {
                name: 'Lambda Shield',
                durability: 98,
                enhancement: 0,
                displayName: 'Lambda Shield'
            };

            const expected = {
                name: 'Lambda Shield',
                durability: 98,
                enhancement: 0,
                displayName: 'Lambda Shield'
            };

            expect(get(item)).toEqual(expected);
        });

        // -----------------------------------------------------------------------------------------
        // if the enhancement level is greater than 0, change the name to include the enhancement
        // level, preceded by a plus sign ( + ), between square brackets before the item's name. 
        // Example: the name of a "Iron Sword" enhanced to 7 would be "[+7] Iron Sword".
        test("changes the displayName to include: a plus sign, square brackets, and the enhancement level, IF enhancement is greater than 0", () => {
            const item = {
                name: 'Lambda Shield',
                durability: 98,
                enhancement: 3,
                displayName: 'Lambda Shield'
            };

            const expected = {
                name: 'Lambda Shield',
                durability: 98,
                enhancement: 3,
                displayName: '[+3] Lambda Shield'
            };

            expect(get(item)).toEqual(expected);
        });

        it('get() should return null when the argument is not an object that has an enhancement key and a durability key containing number values', () => {
            expect(get()).toBeNull(); // no argument passed 
            expect(get('1')).toBeNull(); // string passed in
            expect(get(undefined)).toBeNull(); // undefined passed in
            expect(get(null)).toBeNull(); // null passed in
            expect(get({})).toBeNull(); // empty object passed in
            expect(get([])).toBeNull(); // empty array passed in
            expect(get(NaN)).toBeNull(); // NaN passed in
        });
    });
});
