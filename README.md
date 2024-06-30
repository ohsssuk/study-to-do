# 실행 방법

```bash
npm install next
# next 설치

npm run dev
# dev 실행

npm run buld
# 빌드

npm run start
# prod 실행
```

## 환경
[http://localhost:3000](http://localhost:3000)

## 목적
- next.js 기반 To-Do 일정관리 기능 개발

---

# 프로젝트 구조 및 역할 설명


## 페이지 (app/pages)
- 라우팅 기능
- 메타데이터 정보
- 하나 또는 여러 개의 Container를 조합하여 구성

## 컨테이너 (containers)
- 독립적인 기능을 수행하는 페이지 모듈 단위
- 재사용성 낮음
- 비즈니스 로직이 위치
- SSR, CSR 방식 분류하여 SEO 대응
- 의미상의 기능 단위
- 상태에 따라 바뀌는 화면 단위

## 컴포넌트 (components)
- ui : 재사용성이 높은 UI 단위 기본 요소(버튼, 체크박스, 인풋, 텍스트, 아이콘버튼, 로딩 등)
- part : 재사용성이 낮아도 반복되거나 의미상 분리되는 경우에 사용(PageContent, PageTitle, ToDoItem 등)

## 스토어 (stores)
- 전역 상태관리 모음

## 스타일 (styles)
- 전역 적용되는 스타일 모음

## 유틸 (utils)
- 스크립트 비지니스 로직 모음

---

# 기능 관련 설명

## 주간 날씨 표시 (WeekWeather)

**구성**
- 독립적인 기능을 수행하는 단위로 판단하여 컨테이너로 분리
- mock데이터를 API로 가져온다고 가정하고 이중 utils의 비지니스 로직으로 이번주의 일정으로 필터
- 오늘 날짜에 맞는 데이터를 검사하여 스크롤 이동

## 일정 관리 (ToDo)

**구성**
- 편집(edit) 부분과 리스트 표시 부분을 목적에 따라 별개의 컨테이너로 분리
- 데이터 관리와 로컬 보존을 위해 전역 상태관리 사용(zustand, persist) : todo-store.ts
- 관리 이원화 방지를 위해 생성과 수정은 edit 컨테이너 하나에서 index 유무에 따라 분기하여 실행


