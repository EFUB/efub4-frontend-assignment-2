# 오늘의 플리
<img src='https://github.com/user-attachments/assets/bc518afe-9880-4dcc-89e6-088961134a2b' width=200px />
<img src='https://github.com/user-attachments/assets/48edadc3-ecc3-41fe-85f4-be3f19647b16' width=200px />


## 🛸 소개

유튜브 영상 검색을 통해 간단한 플레이리스트를 만들 수 있습니다.

## 🛸 기능

### 검색 기능

- 키워드 검색을 통해 영상 목록을 가져옵니다.

### 영상 좋아요 저장 기능

- 영상 목록에서 좋아요를 누른 영상을 모아볼 수 있습니다.

### 저장된 플레이리스트 목록 리셋 기능

- 쓰레기통 버튼을 통해 저장한 모든 목록을 삭제할 수 있습니다.

## 🛸 Tech

### Recoil

- 검색한 영상 목록과 좋아요 누른 영상 목록 두 가지를 관리합니다.
- recoil-persist를 이용해 저장한 영상 목록의 경우 새로고침해도 삭제되지 않습니다.

### YouTube Data API v3

- 다음 API를 통해 유튜브 검색을 통해 정보를 가져옵니다.
- 사용한 주요 옵션은 다음과 같습니다.
```regionCode: "KR",
    relevanceLanguage: "ko",
    order: "viewCount",
    type: "video",
    maxResults: 10,
    videoEmbeddable: true,
```
- API 호출 일일 할당량을 초과하는 경우 저장해 놓은 mockData를 사용합니다.

### 반응형 고려
- 최대 너비는 고정되어 있으나 화면 크기를 줄여도 비율이 자연스럽습니다.

## 🛸 개선하면 좋을 부분
- 검색 시 10개의 결과만 보여줍니다. 후에 react-query를 사용해서 받아오는 방법을 바꿀 수 있을 것으로 예상합니다.
- 로딩 속도를 개선하면 좋을 것 같습니다.
- 검색창이 생긴 후 다른 곳을 클릭했을 때 검색창이 사라지도록 개선하면 좋을 것 같습니다.