
// 테스트용 ProductClient 클래스 생성
class StubProductClient {
    async fetchItems() {
        return [
        {items: 'apple', available: true},
        {items: 'banana', available: false},
        ];
    }
}

module.exports = StubProductClient;