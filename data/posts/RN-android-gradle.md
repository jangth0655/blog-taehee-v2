---
title: RN Android 분석하기 (Gradle)
description: RN의 안드로이드 Gradle
date: 2023-07-28
category: react native
path: RN-android-gradle
featured: false
image:
---

## android/Build.gradle

안드로이드 앱 프로젝특 구성 및 빌드 관련 설정들을 정의하는 역할.  
이 파일은 안드로이드 프로젝트에 대한 전체적인 환경 설정과 Groovy를 사용하여 공통 저장소, 클래스 패스, 프로젝트 버전, SDK 버전 등 여러 중요한 항목들을 설정한다.

#

## android/app/Build.gradle

앱 레벨의 설정을 관리, 앱에 필요한 개별 의존성, 빌드 타입, 앱의 버전 및 버전 명, 앱 서명 설정, dependencies 의존성 및 라이브러리 등 앱 모듈에 관련된 설정들이 포함된다. 즉, 이 파일은 앱의 세부 사항과 구성 요소를 관리한다.

## gradle.properties

gradle 빌드 시스템의 환경변수 역할을 한다고 생각할 수 있다. 프로젝트 전체에 대한 전역 설정 및 속성을 정의할 수 있다.
gradle.properties는 build.gradle에서 참조되어 사용할 수 있다.
