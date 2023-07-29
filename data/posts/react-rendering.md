---
title: React 렌더링 흐름
description: 리액트 공식문서를 통해 렌더링 흐름에 대해 이해해보자!
date: 2023-07-29
category: react
path: react-rendering
featured: false
image:
---

리액트의 장점 중 하나는 리렌더링이 내부적으로 이뤄져서 쉽게 데이터 상태를 UI로 표현할 수 있다고 생각한다.
우선 리액트는 컴포넌트의 상태 변화를 추적하여 리렌더링을 수행하기 위해 가상돔(Virtual DOM)과 Reconciliation(재조정)을 활용한다는 것을 알아두자

리액트는 내부적으로 useState훅을 제공해주는데, **useState는 상태 변경을 알리고(관리) 필요한 경우 리렌더링을 트리거** 할 수 있다.

### Render and Commit

렌더링 방식에는 3 단계의 프로세스가 있다.

1. Trigger 단계

- 컴포넌트에서 발생한 상태 변화에 의해 리렌더링이 필요함을 의미.
- setState() 호출 또는 부모 컴포넌트에서 속성(Props) 업데이트되는 시점

2. Render 단계

- 속성 및 상태가 변경되면 컴포넌트의 렌더링 메서드가 호출되고 상태의 변경을 반영하여 새로운 가상 돔을 생성한다.

3. Commit

- 이전 가상돔과 현재 가상돔을 비교하여 실제 변경된 내용을 DOM에 반영하는 단계

### 3단계의 흐름

트리거가 되면, 대기열 큐에 있는 **상태를 일괄처리(배치 처리)**하고 이를 바탕으로 렌더링이 발생하고 **새로운 가상돔이 생성**된다. 이후 Commit 단계를 통해 **실제 DOM에 반영**되어 UI를 갱신하게 된다.

---

### State Snapshot

```javascript
export default function Counter() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>{number}</h1>
      <button
        onClick={() => {
          setNumber(number + 1);
          setNumber(number + 1);
          setNumber(number + 1);
        }}
      >
        +3
      </button>
    </>
  );
}
```

위 코드에서 렌더링이 트리거 될 때는 언제인지 살펴보아야 한다.  
<br />
button의 onClick 이벤트 헨들러(콜백함수)가 실행이 되면 내부에 작성된 setNumber가 실행된다. 이후 set함수에 의해 number 상태가 업데이트되고(렌더링 트리거) jsx를 반환한다. 이때 중요한 것은 이벤트 헨들러를 한번 호출하여 연속적으로 set함수가 3번 호출되는 것이 아니다.  
위 코드에서 setNumber에서 number는 **이전 스냅샷된 정보(상태)를 기준으로 number를 업데이트**를 한다. 즉 number는 연속적으로 계산되어 업데이트 되는 것이 아니라 이전에 업데이트되어 jsx에 반환되었던 상태 시점(스냅샷)을 가리키고 있을 뿐이다.  
(리액트에서 스냅샷이라고 하는 것은 실제 DOM에 반영되어 jsx에 반환되는 그 시점의 UI 상태를 말한다.)  
(즉, 스냅샷 = 이전 업데이트 되어 반환된 jsx에 반환된 상태값은 고정되어 있음. )

#

그럼 setNumber에서 number를 업데이트하고 연속적으로 업데이트된 number 값을 기준으로 업데이트 하려면 어떻게 해야할까?

```javascript
setNumber((n) => n + 1);
```

#

---

### 대기열 큐(Queue)

set함수가 실행되면 set함수에 의해 업데이트 된 상태의 정보가 대기열 큐에 추가된다.  
예를 들어 setNumber(10)을 호출하게 되면, 10으로 업데이트 하라는 정보가 대기열 큐에 추가되는 것이다. 이 정보를 토대로 리액트는 업데이트를 수행하고 새로운 가상돔을 생성하는 것이다.

#

```javascript
<button onClick={() => {
  setNumber(number + 5);
  setNumber(n => n + 1);
}}>
```

setNumber에 의해 number(이전 스냅샷 상태) + 5를 계산하여 업데이트 상태정보를 대기열 큐에 추가한다.  
("0+5로 교체"), 이후 setNumber(n => n+1)에서 n => n+1 함수가 대기열에 추가된다. 이 때 n은 바로 직전의 추가된 최신상태의 5를 가지고 계산하게된다.  
이벤트 헨들러가 종료된 후 상태가 업데이트 되어 UI에 반영되게 된다.

#

---

### Batch Update(일괄 처리)

렌더링 트리거가 발생하면 업데이트되는 상태의 정보가 대기열 큐에 추가되고 이를 **일괄처리 하는데 이를 배치 업데이트**라고 한다.  
일괄 처리를 하게되면 불필요한 리렌더링을 방지하고 이에 따라 DOM의 조작을 최소화 하여 성능을 향상 시킬 수 있다.
