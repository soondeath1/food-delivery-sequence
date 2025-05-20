const restaurant = require('./restaurantMock');

async function processOrder(orderData) {
    // 주문 데이터 유효성 검사
    if (!orderData.menu || !orderData.address || !orderData.payment) {
        throw new Error("주문 정보가 불완전합니다.");
    }

    // 주문을 식당에 전달
    const confirmation = await restaurant.receiveOrder(orderData);

    return confirmation;
}

module.exports = { processOrder };
