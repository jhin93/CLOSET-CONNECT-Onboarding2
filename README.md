# CLOSET-CONNECT-Onboarding2

CONNECT Creator page clone coding

아래 주어진 기술스택으로 진행해주세요 (~8/25 기한)

Environment
Nextjs (v12 사용해주세요)
Webpack
Babel
Typescript
Prettier

Framework/middleware
React (v17 사용해주세요)
Redux
ReduxToolkit
Redux-saga
Axios

Styling
Emotionjs
Facepaint
Classnames (필요시)
CONNECT design system 사용
closet-design-system/core-connect@0.13.0
closet-design-system/theme-connect@0.2.0
storybook: https://design-system.clo-set.com/index.html?path=/story/introduction--page


API Document
creator list https://clo.atlassian.net/wiki/spaces/NX/pages/877559809/Creators (request/params 정도만 참조하시고, 실제 호출 url은 https://test-connect.api.clo-set.com/api/creators 으로 호출해주세요)
follow/following list https://clo.atlassian.net/wiki/spaces/NX/pages/2237071471/Follow+Like#7.-Get-Follower-List(%EA%B8%B0%ED%9A%8D%EC%84%9C%EB%A7%81%ED%81%AC)
https://clo.atlassian.net/wiki/spaces/NX/pages/2237071471/Follow+Like#8.-Get-Following-List(%EA%B8%B0%ED%9A%8D%EC%84%9C%EB%A7%81%ED%81%AC)
** National code 참조 https://github.com/clovirtualfashion/closet-public-web/blob/master/packages/web/src/constants/nationalCode.ts





Figma(Design)

반응형 breakpoint는 width 1200px (m) 입니다

desktop https://www.figma.com/file/zJ2qM7uLpFbQm32wsVq93u/Creator-Page?type=design&node-id=74%3A8556&mode=design&t=99Xe57uPLDp4o8VV-1
tablet https://www.figma.com/file/zJ2qM7uLpFbQm32wsVq93u/Creator-Page?type=design&node-id=74%3A10011&mode=design&t=99Xe57uPLDp4o8VV-1


Description

Setup
container/presentational design pattern 사용
prettier 설정값
{
"printWidth": 100,
"tabWidth": 2,
"singleQuote": true,
"trailingComma": "all",
"bracketSpacing": true,
"semi": true,
"useTabs": false,
"arrowParens": "avoid",
"endOfLine": "auto"
}

Features
TAB은 Recent만 구현

24개 단위로 infinite scroll 적용
아이템에 carousel 적용
follow/following 버튼은 UI만 구현
사람 아이콘 옆 숫자 클릭시 modal 노출 (follow/following list)
 
