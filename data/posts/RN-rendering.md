---
title: React Native 렌더링
description: 웹이랑 다른 RN 렌더링은 어떻게 될까?
date: 2023-07-08
category: react native
path: RN-rendering
featured: false
image:
---

## Glossary

#### ﹒ Host View Tree

Host View Tree는 네이티브 UI 컴포넌트를 나타내는 계층 구조이다. Host View는 Host View Tree에서 네이티브 UI 컴포넌트를 나타내는 개별 요소이다.

각 host view의 크기와 위치는 Yoga를 사용하여 계산된 LayoutMetrics에 기반하고 스타일과 콘텐츠는 React Shadow Tree 정보에 기반한다.

</br>

#### ﹒ Javascript Interface(JSI)

C++ 앱에서 javascript 엔진을 내장하기 위한 가벼운 API로 Fabric은 이를 사용하여 C++ 코어와 React간 통신을 한다.
즉 Fabric(C++)에서 JSI를 이용하여 React와 상호작용하는 인터페이스이다.

</br>

#### ﹒ React Shadow Tree (and React Shadow Node)

React Shadow Node는 자바스크립트로 정의된 UI 컴포넌트를 나타내는 객체이며, 레이아웃 정보, 스타일, Props 등을 포함한 정보를 갖고 있다.

앱이 시작되면 Fabric은 내부적으로 자바스크립트러 정의된 UI 컴포넌트를 기반으로 React Shadow Node 객체를 생성하고 이를 통해 React Shadow Tree를 구성한다. 이후 네티이브로 전달하여 네이티브에서 Host View를 생성하여 Host View Tree를 구성한다. 이렇게 생성된 Host View Tree는 실제 화면에 반영한다.

</br>

#### ﹒ Yoga Tree(and Yoga Node)

Yoga Tree는 Yoga가 React Shadow Tree의 레이아웃 정보를 계산하는데 사용하는 트리다.
각각의 React shadow node는 일반적으로 Yoga Node를 생성하여 Yoga Tree에 포함시키며 이를 통해 Flexbox 기반의 레이아웃 계산이 가능해진다.

따라서 React Shadow Tree와 Yoga Tree는 서로 맵핑되어 있으며, React Shadow Node와 Yoga Node 간의 연결을 통해 UI 컴포넌트의 구조와 레이아웃 계산이 이루어진다.

</br>

![fabric](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FHO9k7%2FbtrCjEHoWnF%2Fbom5tT9CYpabKE3VwFrHk0%2Fimg.png)

## Fabric

#### ﹒ 기존 렌더링 방식

기존 렌더링 방식, 아키텍처의 문제점은 React Native로 렌더링된 뷰를 호스트 뷰에 포함시킬 때 UI의 레이아웃 변화가 비동기적으로 처리되어 뷰가 화면에 나타나기 전 예상치 못한 레이아웃 변경이 발생하는 "점프" 문제가 발생한다. 이러한 점프 문제로 인해 UI가 부드럽지 않거나 레이아웃 변화에 따른 깜박임이 발생할 수 있다.

뿐만 아니라 React shadow Tree를 자바스크립트 측에서 생성하고 구성하였으며 이를 브릿지를 통해 host view tree를 업데이트 했다. 이로 인해 렌더링 속도가 느려지고, 복잡한 UI 구조에서는 성능 저하의 원인이되는 단점이 있다.

#### ﹒ 새로운 렌더링 방식

Fabric 렌더링 시스템은 C++로 작성되었으며, Fabric 내부적으로 Shadow Tree를 생성하여 프로세스를 신속하게 처리하고 렌더링하는 필요하는 단계수를 줄여준다. 동기적으로 처리함으로서 이러한 비동기적인 레이아웃 계산을 개선하였다.
