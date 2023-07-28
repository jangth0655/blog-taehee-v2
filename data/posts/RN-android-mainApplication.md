---
title: RN Android 분석하기 1 (MainApplication)
description: RN의 안드로이드 MainApplication
date: 2023-07-23
category: react native
path: RN-android-mainApplication
featured: false
image:
---

# MainApplication

MainApplication는 애플리케이션 수준의 설정을 담당한다. 이 설정에는 네트워크, 데이터베이스 연결, 공유 리소스 접근 등이 포함된다. 또한 앱의 초기 설정, 모듈 등록, 네이티브 모듈 초기화, 패키지 관리, 앱 전반의 생명주기 및 상태관리 등 관련된 작업을 처리한다.

```java
package com.nativepractice;

import android.app.Application;
import com.facebook.react.PackageList;
import com.facebook.react.ReactApplication;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint;
import com.facebook.react.defaults.DefaultReactNativeHost;
import com.facebook.soloader.SoLoader;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost =
      new DefaultReactNativeHost(this) {
        @Override
        public boolean getUseDeveloperSupport() {
          return BuildConfig.DEBUG;
        }

        @Override
        protected List<ReactPackage> getPackages() {
          @SuppressWarnings("UnnecessaryLocalVariable")
          List<ReactPackage> packages = new PackageList(this).getPackages();
          // Packages that cannot be autolinked yet can be added manually here, for example:
          // packages.add(new MyReactNativePackage());
          return packages;
        }

        @Override
        protected String getJSMainModuleName() {
          return "index";
        }

        @Override
        protected boolean isNewArchEnabled() {
          return BuildConfig.IS_NEW_ARCHITECTURE_ENABLED;
        }

        @Override
        protected Boolean isHermesEnabled() {
          return BuildConfig.IS_HERMES_ENABLED;
        }
      };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
    if (BuildConfig.IS_NEW_ARCHITECTURE_ENABLED) {
      // If you opted-in for the New Architecture, we load the native entry point for this app.
      DefaultNewArchitectureEntryPoint.load();
    }
    ReactNativeFlipper.initializeFlipper(this, getReactNativeHost().getReactInstanceManager());
  }
}
```

### Application

안드로이드 애플리케이션의 전역 상태와 동작을 관리하는 클래스로 앱 시작과 동시에 생성 되며 앱 전역에서 유지되는 단일 인스턴스
이 Application 클래스를 상속하여 리소스 로딩, 앱 상태관리, 모듈 등록 등을 수행할 수 있다.

### ReactApplication

앱이 시작될 때 React Native와의 연동을 도와주는 역할을 한다. 즉 안드로이드와 RN 간의 연결 및 통신 설정하는데 도움을 준다. 이를 통해 RN 프레임 워크가 자바스크립트와 통신할 수 있다.

### mReactNativeHost

React Native Host 클래스의 인스턴스를 참조하는 맴버 변수

- React Native Host

  - RN 인스턴스 생성하는 주요 진입점, ReactInstanceSettings를 이용하여 ReactInstanceManager를 초기화 하고 생성된 RN 인스턴스를 제어한다. (React native의 실행환경을 제어한다.)

- **DefaultReactNativeHost**

  - RN 앱이 동작하는데 필요한 실행환경을 설정하고 관리하는 역할을 한다.
  - 자바스크립트 런타임 환경과 브릿지 초기화 및 설정, React Package 등록 등 처리를 한다.

- get Package

  - React Package의 목록을 자동으로 수집하고 반환한다.
  - React Package : RN의 모듈을 제공하기 위한 라이브러리 또는 모듈의 모음 (RN에 이미 설정되어 있다.)

- getJSMainModuleName
  - React의 진업점(index.js) 번들 파일의 경로를 반환

### OnCreate

앱의 초기 설정을 수행하고, 필요한 라이브러리와 도구를 초기화하며, 앱의 아키텍처를 설정한다.

```Java
@Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
    if (BuildConfig.IS_NEW_ARCHITECTURE_ENABLED) {
      // If you opted-in for the New Architecture, we load the native entry point for this app.
      DefaultNewArchitectureEntryPoint.load();
    }
    ReactNativeFlipper.initializeFlipper(this, getReactNativeHost().getReactInstanceManager());
  }
```

- SoLoader.init
  RN이 네이티브 모듈을 로드하고 관리할 수 있게된다.
- DefaultNewArchitectureEntryPoint.load();
  새로운 아키텍처를 로드하는 부분
