import * as imgs from '../../assets/imgs/Imgs';

const projectsData = {
  whatToWear: {
    id: 1,
    title: 'What To Wear',
    mockUp: imgs.prjMockUp1,
    intro: '2020.04 ~ 2020.04/ 기획, 디자인, 구현/ HTML, CSS, JavaScript, Json',
    description:
      '학원에서 개별 평가를 위해 진행한 프로젝트입니다. 2020년 봄/여름에 유행할 패션을 주제로 하여 정보 전달을 목적으로 기획했습니다. 페이지 이동에 따른 혼란을 줄이기 위해 원페이지 웹사이트 형태로 제작했습니다.',
    projectUrl: 'http://cmlee9012.dothome.co.kr/',
    preview: [imgs.prj1preview1, imgs.prj1preview2, imgs.prj1preview3],
  },
  portfolioJquery: {
    id: 2,
    title: 'Portfolio Landing Page(jQeury ver.)',
    mockUp: imgs.prjMockUp2,
    intro: '2020.04 ~ 2020.04/ 기획, 디자인, 구현/ HTML, CSS, jQuery, php, DB',
    description:
      '국비지원과정 최종 과제로 제작한 포트폴리오 랜딩 페이지입니다. jQuery 라이브러리를 이용한 기능 구현을 중심으로 제작했으며 깔끔하고 감각적인 느낌을 받을 수 있도록 디자인했습니다. php를 이용하여 MariaDB와 연동해서 페이지를 관리할 수 있도록 했습니다.',
    projectUrl: 'chaemilee9012.dothome.co.kr',
    preview: [imgs.prj2preview1, imgs.prj2preview2, imgs.prj2preview3],
  },
  woofooClone: {
    id: 2,
    title: 'WooFoo (clone)',
    mockUp: imgs.prjMockUp3,
    intro:
      '2020.08 ~ 진행 중/ 기획, 디자인, 구현/ HTML, SCSS, JavaScript, ReactJs, styled-component',
    description:
      "리액트로 제작한 첫 번째 프로젝트입니다. 펫시팅 서비스를 제공하는 '우푸'라는 서비스 웹사이트를 클론 코딩했습니다. 라우터를 이용하여 페이지를 이동하는 것처럼 보이게 했으며 페이지 개발 진행 중입니다. (서비스 중단으로 인하여 10월 31일 부로 원본 페이지 확인이 불가능해졌습니다.)",
    projectUrl: 'https://chaemilee9012.github.io/cloneWoofoo/',
    preview: [imgs.prj3preview1, imgs.prj3preview2, imgs.prj3preview3],
  },
  calcForTheWeb: {
    id: 3,
    title: 'Calculator for the Web',
    mockUp: imgs.prjMockUp4,
    intro:
      '2020.10 ~ 진행 중/ 기획, 디자인, 구현/ HTML, JavaScript, ReactJs, styled-component',
    description:
      'mozilla 재단의 eval() 함수 사용금지 안내에 따라 switch문을 활용하여 사칙연산 기능을 구현하는 것을 중점으로 두고 진행한 프로젝트입니다. 리덕스를 통한 API 통신 및 키다운 이벤트 구현 등을 위해 현재도 개발 진행 중입니다.',
    projectUrl: 'https://chaemilee9012.github.io/toyCalculator/',
    preview: [imgs.prj4preview1, imgs.prj4preview2],
  },
  portfolioReact: {
    id: 4,
    title: 'Portfolio Landing Page(React ver.)',
    mockUp: imgs.prjMockUp5,
    intro:
      '2020.10 ~ 진행 중/ 기획, 디자인, 구현/ HTML, JavaScript, ReactJs, styled-component',
    description:
      '리액트 프레임워크를 이용하여 기존 포트폴리오 랜딩 페이지를 리뉴얼했습니다. 데스크탑 및 랩탑 전용 페이지로 제작했습니다.',
    projectUrl: 'https://chaemilee9012.github.io/portfolioReact/',
    preview: [imgs.prj5preview1, imgs.prj5preview2, imgs.prj5preview3],
  },
};

export default projectsData;
