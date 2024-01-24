
## Ai-Chat

<img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white">  

<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white"> <img src="https://img.shields.io/badge/styled components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"> <img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=Axios&logoColor=white">
<img src="https://img.shields.io/badge/OpenAI-412991?style=for-the-badge&logo=OpenAI&logoColor=white">

<img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white"> <img src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=Express&logoColor=white"> 

<img src="https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=Netlify&logoColor=white"> <img src="https://img.shields.io/badge/cloudType-000000?style=for-the-badge&logo=Netlify&logoColor=white">








## 주소
* <https://singular-trifle-93bd7b.netlify.app/>

## 사용된 라이브러리
* 공통
  * typescript - 4.9.3 / 타입스크립트

* client
  * axios - 0.26.1 / 서버 통신
  * http-proxy-middleware - 2.0.4 / cors 관련 오류 방지 proxy설정
  * react - 18.2.0 / 사용자 인터페이스
  * react-transition-group - 4.4.5 / 컴포넌트에 transition 적용
  * styled-components 5.3.5 / 스타일 컴포넌트
  * openai 3.1.0 / 학습 데이터
  
  
  
* server
  * concurrently - 7.6.0 / 서버, 클라이언트 동시 실행
  * express - 4.17.14 / nodejs 서버
  * fs - 0.0.1-security / 파일시스템 접근
  * jsonwebtoken - 8.5.1 / 로그인시 사용될 토큰 생성
  * mongoose - 6.2.9 / mongoDB
  * multer - 1.4.5-lts.1 / 파일 업로드
  * nodemon - 2.0.15 / 서버 변경사항 실시간 


## 주요 기능
  * 언어 선택
<img src="https://user-images.githubusercontent.com/86645532/208301301-b7d3f059-f8c1-4c95-9428-5c2a27cb666a.png">


     영어 선택시 영어 대화 전송 >영어 답변 순서로 진행됩니다.
     
     한국어 선택시 한글 입력 > 영어로 번역후 전송 > 영어 답변 > 한국어로 번역 순서로 진행됩니다.
     학습 데이터가 한국어 사용시 다소 어색하여 대화를 좀더 매끄럽게 하고자 중간과정으로 번역을 추가하였습니다.
     번역은 서버에서 이루어지며 네이버 파파고api를 사용하였습니다.

     
  * 대화
 <img src="https://user-images.githubusercontent.com/86645532/208302104-1215a4a4-c979-4abf-a8a5-4534af95ae7d.gif" width="250px"> 
 
     실제 메신저와 유사하게 구성하였습니다.
     
     enter나 전송 버튼을 클릭하여 전송이 가능하며 메세지 전송 혹은 새 메세지가 도착했을 경우 스크롤이 최하단으로 이동합니다.
     과도한 전송을 방지하기 위해 한번 전송후 답변이 오기까지 재전송이 불가능합니다.

     
