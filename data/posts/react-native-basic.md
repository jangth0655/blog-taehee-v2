---
title: React Native 자바스크립트 흐름 및 실행 환경
description: RN 기본 개념 부터 이해해보기
date: 2023-07-07
category: react native
path: react-native-basic
featured: false
image:
---

### 실행 Flow

우선 먼저 큰틀을 확인해 보자

1. 자바스크립트 번들링
2. 번들링된 자바스크립트 실행 (Hermes, JavascriptCore)
3. Virtual DOM 생성
4. 자바스크립트로 정의된 컴포넌트 Fabric UI 엔진으로 전달
5. 전달 받은 요소를 네이티브 UI 컴포넌트로 변환하고 렌더링

### 네이티브와 자바스크립트

RN으로 구현된 모바일 앱은 UI는 리액트(자바스크립트), 내부 기능은 네이티브 코드(자바, 코틀린, objective-c, swift)로 이뤄진다.
이처럼 자바스크립트에서 UI컴포넌트를 정의하거나, 네이티브 기능을 사용하고 발생된 이벤트를 전달받아 처리 하고 처리한 이벤트 및 기능을 다시 네이티브로 전달한다. 이와 같이 자바스크립트와 네티이브 간 상호작용(통신)을 해주는 것이 브릿지라고 한다.

### 자바스크립트 실행 환경

RN에서 자바스크립트 엔진은 크게 2가지로 볼 수 있다. Hermes와 JavscriptCore이다.

- Hermes
  오픈소스인 Hermes는 Facebook에서 개발한 경량화된 자바스크립트 엔진으로 앱 시작 속도와 메모리 사용량을 줄이는데 중점을 둔다.
  Hermes는 컴파일러(AOT - Ahead of Time)를 사용하여 자바스크립트 코드를 네이티브 기계 코드로 변환하고 변환된 코드는 앱이 실행될 때 자바스크립트 엔진을 거치지 않고 직접 실행된다.

  Hermes는 0.6버전 이상부터 android, ios에서 기본적으로 사용된다. 이하 버전에서는 javascriptCore엔진을 사용한 것으로 알고 있다.

- JavascriptCore
  오픈 소스인 javascriptCore는 Apple에서 제공하며 ios에서 기본적으로 사용되는 엔진이다. javascriptCore는 JIT(Just in Time) 컴파일러를 사용하여 실행 시간에 자바스크립트 코드를 동적으로 컴파일하여 기계 코드로 변환되고 실행한다.

  위 방식은 인터프리터와 컴파일러의 차이점을 생각하게 만드는데, 인터프리터 경우 앱이 시작될 때 한 줄씩 해석하며 코드를 실행하지만 JIT 같은 경우 앱이 실행될 떄 동적으로 컴파일한 후 다시 시작할 경우에도 미리 컴파일된 코드를 재사용하게된다.

![js](https://res.cloudinary.com/practicaldev/image/fetch/s--4BoQvPVu--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/i/yy7z4lnp33tfov8s7wmu.jpg)
