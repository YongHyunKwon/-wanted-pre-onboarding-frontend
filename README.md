### 📙 원티드 프리온보딩 프론트엔드 코스 사전과제

해당 프로젝트는 프리온보딩 프론트엔드 코스 투두리스트 과제입니다.
데모 영상은 아래 배포 링크로 대체합니다.

[🌍 링크](https://wantedtodolist.herokuapp.com)

## 프로젝트의 실행 방법
```command
$ npm install
$ npm start
```
## 구현 기능
** 로그인, 회원가입 페이지 **
- / 경로에 로그인, 회원가입 경로 설정
  - 이메일 입력창, 비밀번호 입력창, 로그인 or 회원가입 버튼 제공
  - 이메일 조건 : @ 포함
  - 비밀번호 조건 : 숫자 & 문자 8자 이상
  - 이메일, 비밀번호 조건 충족 시 로그인 or 회원가입 버튼 활성화
  - 로그인 or 회원가입 시 토큰 로컬 스토리지 저장 후 /todo 경로 이동
    - AuthContext saveToken 함수 호출 후 로컬스토리지 저장
  - 토큰이 없으면 / 페이지로 있다면 /todo 페이지로 리다이렉트
    - AuthContext auth 값을 통해 토큰 값이 있는지 확인
---
** 투두 리스트 페이지 **
- [x] /todo 경로에 접속하면 투두 리스트 표시
  - [x] 투두 리스트는 TodosContext 에서 state 관리
        - Todo 에서 이벤트가 발생하면 TodosContext getTodos 를 호출하여 투두 리스트 갱신 
  - [x] 투두 리스트 내용과 완료 여부 표시
  - [x] 화면 5시 방향 투두 추가 버튼 누르면 modal 창 생성 후 투두 입력 가능
  - [x] 투두 요소에 hover 시 수정, 완료, 삭제 버튼 표시
  - [x] 수정 버튼 누르면 완료, 취소 버튼 표시
        
        
## 프로젝트 구조
```
📁 src
├── api
│   ├── auth
│   ├── todo
│   └── todos

├── components
│   ├── auth
│   ├── common
│   ├── todo
│   └── todos

├── modules
│   ├── context
│   └── hook

├── pages
├── routes
├── styles

├── App.js
└── index.js
```
