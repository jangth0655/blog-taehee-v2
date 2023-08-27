---
title: CORS와 마주하기
description: nextjs에서 CORS 회피와 rewrite 알아보기
date: 2023-08-27
category: react
path: nextjs-cors
featured: false
image:
---

토이 프로젝트를 진행 하던 중 역시나 CORS 관련 이슈를 마주하게 되었다. 그리고 해결하기 위해 공부하고 이해한 바를 기록해보려고 한다.

### 먼저 CORS란 무엇인가??

CORS (Cross Origin Resource Sharing, 교차 출처 리소스 공유), 즉 "서로 다른(cross) 출처(origin)의 리소스를 공유"한다 라는 뜻이다.

서버와 통신하면서 발생하는 CORS 이슈는 사실 "CORS 허용하라!"로 이해하면 될 것 같다.

### 그럼 CORS 허용 해야하는 이슈가 발생한느 이유는??

동일 출처 정책(SOP - Same Origin Policy) 브라우저는 보안상의 이유로 같은 출처 간에 통신만 허용하는 정책을 가지고 있다. **즉 브라우저는 서로 다른 출처의 리소스를 주고 받을 수 없다.**  
예륻 를어, myapp:3000 웹 서버로부터 리액트 앱을 다운 받고 실행하는 브라우저는 myapp:8080(외부 출처)와 통신을 하지 못한다.

(\* 웹서버는 애플리케이션을 클라이언트에게 전달하고 클라이언트(브라우저)는 해당 앱을 다운로드 받고 실행한다.)

### 그럼 어떻게 허용 해야하는데??

쉡게 생각하면 myapp:3000은 myapp:8080에게
**'나(myapp:3000)는 너(myapp:8080)와 다른 서버야 그러니 너(myapp:8080)가 나(myapp:3000)를 허용해야만 CORS을 할 수 있어!'**

서버에서 CORS 설정으로 myapp:3000의 출처를 추가해주면 브라우저는 실시간으로 이를 인지하여 myapp:8080의 출처와 통신이 허용되었다고 인식한다.

### nextjs를 사용하여 플젝을 진행할 때 어떻게 해결하였는데??

상황은 nextjs 프론트와 java spring 백엔드 간에 통신을 통해 웹사이트를 개발 중 이였는데, 서버단에서 CORS를 설정 했음에도 불구하고 CORS 허용 하라는 이슈가 계속 발생하였다. (이유는 잘모르겠지만…)

그래서 nextjs의 rewrite 함수를 사용하여 해결하였다.

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/v1/:path*',
        destination: `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;
```

nextjs는 node 서버를 내장 하고 있다. (정말 많은 작업을 할 수 있다고 하는데, 차차 적용하고 기록할 예정이다.)

위 코드에서 rewrite 역시 nextjs 서버에서 동작하는데 애 살펴 보면 아래와 같다.

- source : 브라우저 경로 → ‘/api/v1’ 경로로 들어오는 모든 주소
- destination : 도착 경로 → “서버주소/api/v1” 서버가 처리하는 api 주소
- 이때 :path\*는 변수라고 생각하면 이해하기 쉽다.

즉 만약 ‘/api/v1/auth/user’라고 요청을 보내면 source의 ':path\*'는 “auth/user”를 뜻하고 destination에서는 “서버주소/api/v1/auth/user”로 되며 이 경로로 요청을 보낼 것이다.

### 위 코드의 rewrite를 사용하여 cors 이슈를 해결한 것을 정리를 해보자면,

실질적으로 브라우저(웹 애플리케이션)는 자신과 같은 웹 서버 주소로 요청을 보내는 것처럼 인식한다.  
(브라우저의 네트워크 검사창을 보면 "localhost:3000/~~~" 으로 통신하는 것이 보임)

하지만 rewrite는 nextjs 서버에서 작동하며 내부적으로 원본 요청 경로를 서버 주소로 변경하여 통신을 하게 된다.

따라서 정확히 말하자면 CORS를 허용하여 해결 했다기 보단, **웹 애플리케이션은 자신과 같은 출처와 리소스를 공유하 한다고 인식하기 때문에 SOP 정책을 따른다고 볼 수 있다.**
