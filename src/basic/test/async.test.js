const fetchProduct = require('../async');

describe('async test', () => {
    it('async - done', done => {
        fetchProduct().then(data => {
            expect(data).toEqual({item: 'Milk', price: 2000});
        });
        done();
    })
    it('async - return', () => {
        return fetchProduct().then(data => {
            expect(data).toEqual({item: 'Milk', price: 2000});
        });
    })
    it('async - await', async () => {
        const product = await fetchProduct();
        expect(product).toEqual({item: 'Milk', price: 2000});
    })
    it('async - resolve', () => {
        return expect(fetchProduct()).resolves.toEqual({item: 'Milk', price: 2000});
    });
    it('async - reject', () => {
        return expect(fetchProduct('error')).rejects.toMatch('network error');
    })
})