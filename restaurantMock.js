async function receiveOrder(orderData) {
    // 실제 API가 아니라 가상 응답
    console.log('식당에 주문 전달됨:', orderData);
    return {
        status: '주문 접수됨',
        estimatedTime: '40분'
    };
}

module.exports = { receiveOrder };
