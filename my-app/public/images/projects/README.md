# Project Images

이 폴더는 프로젝트 썸네일 이미지를 저장하는 곳입니다.

## 이미지 추가 방법

1. 이미지 파일을 이 폴더(`public/images/projects/`)에 추가합니다.
2. 권장 파일명 형식: `{project-name}_thumbnail.png`
3. 권장 이미지 크기: 320x256px (캐러셀 카드 크기)
4. 지원 형식: PNG, JPG, WEBP

## Cabi 프로젝트 이미지

Cabi 프로젝트의 썸네일 이미지를 추가하려면:
- 파일명: `cabi_thumbnail.png`
- 이 폴더에 파일을 업로드하면 자동으로 캐러셀에 표시됩니다.

## 우선순위

이미지 표시 우선순위:
1. `localImage` (로컬 파일) - 최우선
2. `imageUrl` (외부 URL)
3. 프로젝트 제목의 첫 글자 (기본값)