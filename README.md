# react-shopping-cart

## 배포

[🖱️ 배포 페이지 바로 가기](https://badahertz52.github.io/react-shopping-cart/dist/)

## 구현

<img src="./readmeImage/cart_step1.gif" width="300px" alt="step1_구현" />

## build

```dash
npm run build
```

- 빌드 시, EnvironmentPlugin 로 인해 오류가 나서 빌드 시에는 EnvironmentPlugin 관련 주석 처리와 import.meta.env로 설정 하고 빌드 해야 합니다.

## test

```dash
npm run test
```

- 로컬에서 테스ㅌ시 EnvironmentPlugin 관련 설정을 활성화 하고 import.meta.env 가 아니 process.env를 사용해야 합니다.

## 기능 구현 목록

<details>
  <summary>step1</summary>
  <div markdown="1">
  
### 페이지 마크업 구현
#### Page
- OrderPage
- OrderConfirmPage
#### Common
- Checkbox
- DeleteButton
- PrimaryButton
- Divider

#### OrderPage 하위 컴포넌트

- CartItem
- CartList
- OrderPrice

### 장바구니 목록 구현

#### 장바구니 API

- Suspense
- ErrorBoundary

#### 장바구니 상태

1. 장바구니 목록

- atoms
  - cartItems(CartItem(name, image, price, isChecked, quantity)[])
  - quantity(number)

#### 장바구니가 없을 때 fallback ui

#### 새로고침 시 화면 유지 기능 구현

- 상품 체크, 상품 수량 관리

### 장바구니 상품 수량 변경

### 장바구니 상품 삭제

### 총 결제 기능 계산 구현

    1. 금액
    - selectors
      - selectedItems(cardItems에서 isChecked가 true인 item들)
      - totalPrice (orderPrice + shippingPrice)
        - orderPrice(각 cartItems의 price \* quantity)
        - shippingPrice(orderPrice)
          - 결제 금액이 10만원 이상일 경우에 무료

### 주문 확인 기능 구현

- 주문 확인 버튼을 눌렀을 때 주문 확인 페이지로 이동한다.
- 주문 확인 페이지에선 다음과 같은 데이터를 보여줄 수 있어야 한다.

  - 상품 종류
  - 상품 개수
  - 총 결제 금액

- 뒤로 가기 버튼을 누르면 다시 장바구니 목록 페이지로 이동해야한다.

  - 장바구니 목록 페이지는 이전 데이터를 유지할 수 있어야 한다.

    </div>
  </details>
