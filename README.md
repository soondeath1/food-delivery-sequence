# 배달 앱 주문 시나리오

## ✅ 시퀀스 다이어그램
Mermaid 사용 (파일: `sequenceDiagram.mmd`)

## ✅ 샘플 코드 구성
- app.js: 서버 구동
- orderService.js: 주문 처리 로직
- restaurantMock.js: 식당 모듈 (mock)

## ✅ 모듈 평가
- 응집도: 모듈 단일 책임 원칙에 부합 (높음)
- 결합도: 외부 의존성 낮고, 변경 용이 (낮음)

## 실행 방법
```bash
npm install express body-parser
node app.js

