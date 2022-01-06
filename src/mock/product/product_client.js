class ProductClient {
    async fetchItems() {
        const response = await fetch('http://example.com/login/id+password');
        response.json();
    }
}

module.exports = ProductClient;