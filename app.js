const express = require('express');
const bodyParser = require('body-parser');
const orderService = require('./orderService');

const app = express();
app.use(bodyParser.json());

app.post('/order', async (req, res) => {
    const orderData = req.body;
    try {
        const result = await orderService.processOrder(orderData);
        res.status(200).json({ message: '주문 완료', result });
    } catch (error) {
        res.status(500).json({ message: '주문 실패', error: error.message });
    }
});

app.listen(3000, () => {
    console.log('배달 앱 서버가 3000번 포트에서 실행 중...');
});
