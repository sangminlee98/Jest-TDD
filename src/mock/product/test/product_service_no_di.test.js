const ProductClient = require('../product_client');
const ProductServiceND = require('../product_service_no_di');
jest.mock('../product_client');

describe('product service test', () => {
    const fetchItems = jest.fn(async() => [
        {items: 'apple', available: true},
        {items: 'banana', available: false},
    ]);
    
    ProductClient.mockImplementation(() => {
        return {
            fetchItems,
        };
    });
    let productServiceND;
    beforeEach(() => {
        productService = new ProductServiceND();
    });

    it('should filter out only available items', async() => {
        const items = await productService.fetchAvailableItems();
        expect(items).toEqual([{items: 'apple', available: true}]);
    })
})