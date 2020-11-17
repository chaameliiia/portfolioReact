import * as imgs from '../../assets/imgs/Imgs';

const projectsData = {
  whatToWear: {
    id: 1,
    title: 'What To Wear',
    mockUp: imgs.prjMockUp1,
    intro: '2020.04 ~ 2020.04/ 기획, 디자인, 구현/ HTML, CSS, JavaScript, Json',
    description:
      '학원에서 개별 평가를 위해 진행한 프로젝트입니다. 2020년 봄/여름에 유행할 패션을 주제로 하여 정보 전달을 목적으로 기획했습니다. 페이지 이동에 따른 혼란을 줄이기 위해 원페이지 웹사이트 형태로 제작하였으며 웹사이트 홍보 효과를 얻기 위해 댓글 이벤트를 기획했습니다.',
    projectUrl: '/',
    preview: [
      imgs.prj1preview1,
      imgs.prj1preview2,
      imgs.prj1preview3,
    ],
  },
  woofooClone: {
    id: 3,
    title: 'WooFoo (clone)',
    mockUp: imgs.prjMockUp2,
    intro: '2020.08 ~ 2020.04/ 기획, 디자인, 구현/ HTML, CSS, JavaScript, Json',
    description: '리액트로 제작한 첫 번째 프로젝트입니다. ',
    projectUrl: 'https://chaemilee9012.github.io/cloneWoofoo/',
    preview: [
      imgs.prj2preview1,
      imgs.prj2preview2,
      imgs.prj2preview3,
    ],
  },
  calcForTheWeb: {
    id: 4,
    title: 'Calculator for the Web',
    mockUp: imgs.prjMockUp3,
    intro:
      '2020.04 ~ 2020.04/ 기획, 디자인, 구현/ HTML, CSS, JavaScript, Json, php',
    description:
      '개별 평가를 위해 진행한 프로젝트입니다. 2020년 봄/여름에 유행할 패션을 주제로 하여 정보 전달을 목적으로 기획했습니다. 페이지 이동에 따른 혼란을 줄이기 위해 원페이지 웹사이트 형태로 제작하였으며 웹사이트 홍보 효과를 얻기 위해 댓글 이벤트를 기획했습니다. 댓글 등록 및 조회 기능은 MariaDB 데이터 서버를 이용해 구현했습니다.',
    projectUrl: '/',
    preview: [
      imgs.prj3preview1,
      imgs.prj3preview2,
    ],
  },
};

export default projectsData;
