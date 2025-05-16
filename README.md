# food-delivery-sequence
# 음식 배달 시퀀스 다이어그램 기반 샘플 코드

## ⓐ 시퀀스 다이어그램
일상 생활 속 '배달 앱 음식 주문' 사례를 모델링했습니다.  
다이어그램은 [Mermaid.live](https://mermaid.live/)를 활용하여 시각화했습니다.  
파일: `sequenceDiagram.mmd`

## ⓑ 샘플 코드
Node.js 기반 시뮬레이션으로, 사용자가 앱을 통해 메뉴를 보고 음식을 주문한 뒤 배달되는 과정을 구현했습니다.  
파일: `foodDeliveryApp.js`

## ⓒ 모듈 평가

- **응집도**: 각 클래스는 단일 책임 원칙을 잘 따르고 있습니다 (높음).
- **결합도**: App 클래스는 의존성을 가지나, 각 모듈은 독립적으로 유지보수 가능 (낮음).

## 실행 방법

```bash
node foodDeliveryApp.js
