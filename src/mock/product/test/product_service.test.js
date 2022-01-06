const StubProductClient = require('./stub_product_client');
const ProductService = require('../product_service');

describe('ProductService - Stub', () => {
    let productService;
    beforeEach(() => {
        productService = new ProductService(new StubProductClient());
    });

    it('should filter out only available items', async() => {
        const items = await productService.fetchAvailableItems();
        expect(items).toEqual([{items: 'apple', available: true}]);
    })
});
