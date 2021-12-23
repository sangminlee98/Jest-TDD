const Calculator = require('../calculator');

describe('calculator test', () => {
    let cal;
    beforeEach(() => {
        cal = new Calculator();
    })

    it('init test', () => {
        expect(cal.value).toBe(0);
    })

    it('setting test', () => {
        cal.set(1);
        expect(cal.value).toBe(1);
    })
    
    it('clear test', () => {
        cal.set(9);
        cal.clear();
        expect(cal.value).toBe(0);
    })
    
    it('add test', () => {
        cal.set(2);
        cal.add(2);
        expect(cal.value).toBe(4);
    })
    
    it('subtract test', () => {
        cal.set(2);
        cal.subtract(1);
        expect(cal.value).toBe(1);
    })
    
    it('multiply test', () => {
        cal.set(2);
        cal.multiply(3)
        expect(cal.value).toBe(6);
    })
    
    describe('divide test', () => {
        it('0 / 0 === NaN ', () => {
            cal.divide(0);
            expect(cal.value).toBe(NaN);
        });
        it('1 / 0 === Infinity', () => {
            cal.set(1);
            cal.divide(0);
            expect(cal.value).toBe(Infinity);
        });
        it('4 / 2 === 2', () => {
            cal.set(4);
            cal.divide(2);
            expect(cal.value).toBe(2);
        })
    })
})

