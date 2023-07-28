---
title: RN Android 분석하기 2 (MainActivity)
description: RN의 안드로이드 MainActivity
date: 2023-07-28
category: react native
path: RN-android-MainActivity
featured: false
image:
---

## Activity라는 것을 무엇일까?

MainApplication이 앱 수준의 설정들을 세팅한다면, Activity는 사용자 인터페이스(UI)화면을 나타내는 스크린을 예로 들 수 있다. 이러한 Activity에는 여러 UI컴포넌트를 배치하는 등 관리하고, 다른 Activity로 전환하는 역할을 한다.

## MainActivity

react native 앱이 실행되면 MainApplication이 실행된 후, android의 MainActivity는 RN과 상호작용하여 **화면을 업데이트** 하는 핵심역할을 한다.

```java
package com.nativepractice;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint;
import com.facebook.react.defaults.DefaultReactActivityDelegate;

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "nativePractice";
  }

  /**
   * Returns the instance of the {@link ReactActivityDelegate}. Here we use a util class {@link
   * DefaultReactActivityDelegate} which allows you to easily enable Fabric and Concurrent React
   * (aka React 18) with two boolean flags.
   */
  @Override
  protected ReactActivityDelegate createReactActivityDelegate() {
    return new DefaultReactActivityDelegate(
        this,
        getMainComponentName(),
        // If you opted-in for the New Architecture, we enable the Fabric Renderer.
        DefaultNewArchitectureEntryPoint.getFabricEnabled(), // fabricEnabled
        // If you opted-in for the New Architecture, we enable Concurrent React (i.e. React 18).
        DefaultNewArchitectureEntryPoint.getConcurrentReactEnabled() // concurrentRootEnabled
        );
  }
}
```

## ReactActivity

MainActivity는 ReactActivity를 상속받아 필요한 메서드를 구현한다.

- ### getMainComponentName
  **앱의 이름을 초기화하는 메서드**로 react에서 사용할 메인 컴포넌트의 이름을 반환하고 등록하느 역할을 한다.
  따라서 getMainComponentName으로 반환된 앱 이름은 RN의 app.json에 초기화 되고, index.js파일에서 app.json의 등록된 앱 이름을 import한 후 App 컴포넌트의 이름으로 설정하게 되는 것이다.

<br />

- ### ReactActivityDelegate createReactActivityDelegate

DefaultReactActivityDelegate 인스턴스를 반환하는 것을 확인할 수 있는데, 인스턴스 매개변수로 아래의 코드를 전달한다.

this: MainActivity 인스턴스<br />
getMainComponentName : React native 앱이 시작될 때 진입점이 되는 앱 이름<br />
DefaultNewArchitectureEntryPoint.getFabricEnabled : Fabric Renderer 활성화 여부<br />
DefaultNewArchitectureEntryPoint.getConcurrentReactEnabled : 현재 React 버전 사용 여부

### 결론

MainApplication은 안드로이드의 애플리케이션 수준의 설정을 관리하고 MainActivity는 화면 전환, 화면 업데이트에 대한 부분을 담당하고 있다.
