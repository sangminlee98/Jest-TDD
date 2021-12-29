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
    
    it('add should throw an error if value is greater than 100', () => {
        expect(()=> {
            cal.add(101);
        }).toThrow('Value can not be greater than 100');
    }) // 에러를 테스트 할 때는 expect에 콜백함수로 에러를 던지는 코드를 작성 후 toThrow 메소드 사용

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

