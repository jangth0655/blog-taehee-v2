---
title: RN Android 분석하기 3 (AndroidManifest)
description: RN의 안드로이드 AndroidManifest
date: 2023-07-28
category: react native
path: RN-android-Manifest
featured: false
image:
---

## AndroidManifest.xml 무엇일까?

AndroidManifest.xml은 Android 애플리케이션의 **중요한 메타데이터를 정의**하고 관리하는 역할을 한다.
따라서 android 시스템에 애플리케이션이 어떻게 동작하고 어떤 구성 요소를 포함하는지에 대한 정보를 담고 전달 하는 역할을 한다. 그리고 이 정보를 사용하여 Android 시스템은 애플리케이션의 실행 및 관리를 적절하게 처리한다.

```xml
<manifest xmlns:android="http://schemas.android.com/apk/res/android">

    <uses-permission android:name="android.permission.INTERNET" />
    <uses-permission android:name="android.permission.CAMERA" />

    <application
      android:name=".MainApplication"
      android:label="@string/app_name"
      android:icon="@mipmap/ic_launcher"
      android:roundIcon="@mipmap/ic_launcher_round"
      android:allowBackup="false"
      android:theme="@style/AppTheme">
      <activity
        android:name=".MainActivity"
        android:label="@string/app_name"
        android:configChanges="keyboard|keyboardHidden|orientation|screenLayout|screenSize|smallestScreenSize|uiMode"
        android:launchMode="singleTask"
        android:windowSoftInputMode="adjustResize"
        android:exported="true">
        <intent-filter>
            <action android:name="android.intent.action.MAIN" />
            <category android:name="android.intent.category.LAUNCHER" />
        </intent-filter>
      </activity>
    </application>
</manifest>
```

- xmlns:android="http://schemas.android.com/apk/res/android"
  XML 네임스페이스를 정의하는데 사용된다.
  'android'접두사를 사용하여 안드로이드 특정 요소와 속성을 참조할 수 있도록 한다.
  이와 같이 정의하면 'android'로 시작한느 속성들을 AndroidManifest.xml 파일에서 사용할 수 있게된다.

- intent<br />
  android 애플리케이션 내의 구성 요소들이 서로 통신하는데 사용되는 메시지 전달하는 방법이다.
  - 일종의 메시지로 애플리케이션 간 데이터를 전달하고 시스템 서비스를 호출 할 수 있다.
  - 액티비티간 전환(데이터 전송)
  - 서비스 시작 : 백그라운드에서 동작하는 서비스를 시작 (음악 재생 서비스, 데이터 동기화)
  - 기타 메시지 송수신 : 베터리 부족 경고, 네트워크 연결 변경 등의 작업
