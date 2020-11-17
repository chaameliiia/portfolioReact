import React, { useContext } from 'react';
import styled from 'styled-components';
import * as imgs from 'assets/imgs/Imgs';
import { Color } from 'contexts/Colors';

const StyledAbout = styled.section`
  background: ${props => props.colors.background};
  height: 100vh;
  left: 0;
  overflow-y: auto;
  padding: 0 15%;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: -10;

  &::-webkit-scrollbar {
    display: none;
  }

  article {
    margin-bottom: 2.5rem;
  }

  h3 {
    font-size: 1.75rem;
    padding: 1rem;
    text-transform: uppercase;
    width: 100%;
  }

  .aboutWrapper__profile {
    position: relative;

    .myNameIs {
      font-size: 3.5em;
      letter-spacing: 0.2em;
      padding: 150px 0;
      text-align: center;
      text-transform: uppercase;
    }

    .wantToBeA {
      bottom: 0;
      font-size: 1.5em;
      position: absolute;
      right: 230px;
      text-transform: capitalize;
    }

    .thisIsMe {
      bottom: 0;
      position: absolute;
      right: 0;
      width: 250px;
      z-index: -10;
    }
  }

  .aboutWrapper__intro {
    .introduction {
      p {
        font-size: 1.1em;
        word-break: keep-all;
      }
    }
  }

  .aboutWrapper__stacks {
    width: 100%;
    
    .stack__details {
      align-items: center;
      display: flex;
      padding-top: 0.5rem;

      img {
        border: 2px solid ${props => props.colors.theme};
        border-radius: 5px;
        margin-right: 0.5rem;
        width: 60px;

        &.ai,
        &.ps {
          padding: 0.5rem;
        }

        &:last-of-type {
          border: none;
          padding-left: 0.5rem;
          width: 40px;
        }
      }
    }
  }

  .aboutWrapper__skils {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    > div {
      margin-bottom: 1rem;
      width: 48%;
      word-break: keep-all;

      strong {
        font-size: 1.25rem;
        margin: 0.5rem;
        width: 100%;
      }
    }

    .skil__reactJs {
      strong {
        background: url(${imgs.lowest}) 98% 50%/110px no-repeat;
      }
    }

    .skil__htmlCss {
      strong {
        background: url(${imgs.highest}) 98% 50%/110px no-repeat;
      }
    }

    .skil__javaScript {
      strong {
        background: url(${imgs.middle}) 98% 50%/110px no-repeat;
      }
    }

    .skil__jQuery {
      strong {
        background: url(${imgs.middle}) 98% 50%/110px no-repeat;
      }
    }

    .skil__photoshop {
      strong {
        background: url(${imgs.lowest}) 98% 50%/110px no-repeat;
      }
    }

    .skil__illust {
      strong {
        background: url(${imgs.lowest}) 98% 50%/110px no-repeat;
      }
    }

    .skil__msOffice {
      strong {
        background: url(${imgs.highest}) 98% 50%/110px no-repeat;
      }
    }
  }


  .aboutWrapper__education {
    margin-bottom: 6rem;
    .edu__details {
      display: flex;
      justify-content: space-between;

      strong {
        font-size: 1.1em;
        width: 180px;
      }
    }
  }
`;

const About = () => {
  const color = useContext(Color);
  return (
    <StyledAbout colors={color} className="aboutWrapper">
      <h2 className="hidden">about</h2>
      <article className="aboutWrapper__profile">
        <h3 className="myNameIs">chaemi lee</h3>
        <span className="wantToBeA">
          future
          <br />
          frontend
          <br />
          developer
        </span>
        <img src={imgs.profile} alt="" className="thisIsMe" />
      </article>
      <div className="aboutWrapper__intro">
        <article className="introduction">
          <h3 className="hidden">introduction</h3>
          <p>
            어제와 같은 오늘을 살면서
            <br />
            오늘과 다른 내일을 꿈꾸지 않겠습니다.
            <br />
            하루하루 더 나아지기 위한 노력을 게을리 하지 않고
            <br />
            조금씩 발전하는 프론트엔드 개발자가 되겠습니다.
          </p>
        </article>
      </div>
      <article className="aboutWrapper__stacks">
        <h3>stacks</h3>
        <p className="stack__details">
          <img src={imgs.ai} alt="" className="ai" />
          <img src={imgs.css} alt="" />
          <img src={imgs.es6} alt="" />
          <img src={imgs.github} alt="" />
          <img src={imgs.html} alt="" />
          <img src={imgs.jquery} alt="" />
          <img src={imgs.js} alt="" />
          <img src={imgs.php} alt="" />
          <img src={imgs.ps} alt="" className="ps" />
          <img src={imgs.react} alt="" />
          <img src={imgs.sass} alt="" />
          <img src={imgs.styled} alt="" />
          <img src={imgs.more} alt="" />
        </p>
      </article>
      <article className="aboutWrapper__skils">
        <h3>skills</h3>
        <div className="skil__reactJs">
          <strong>ReactJs</strong>
          <p>
            컴포넌트를 이용하여 싱글페이지어플리케이션을 제작할 수 있으며 필요한
            Hook을 설치하거나 만들어서 활용할 수 있습니다.
          </p>
        </div>
        <div className="skil__htmlCss">
          <strong>HTML&CSS</strong>
          <p>
            기본적이고 필수적인 태그의 기능과 속성을 정확히 알고 웹표준 및
            웹접근성에 맞게 사용할 수 있습니다. Sass를 이용하여 CSS 작업을 할 수
            있습니다.
          </p>
        </div>
        <div className="skil__javaScript">
          <strong>JavaScript</strong>
          <p>
            탭 메뉴, 슬라이드 배너, 모달 팝업창, 화면 이동 버튼 등 동적 페이지
            제작을 위해 필요한 로직을 설계하고 이에 따라 페이지를 구현할 수
            있습니다.
          </p>
        </div>
        <div className="skil__jQuery">
          <strong>jQuery</strong>
          <p>jQuery 라이브러리를 사용하여 동적 화면을 구현할 수 있습니다.</p>
        </div>
        <div className="skil__photoshop">
          <strong>Photoshop</strong>
          <p>
            이미지를 규격에 맞게 편집하고, 색을 보정하는 등의 새 이미지 파일을
            만들 수 있습니다.
          </p>
        </div>
        <div className="skil__illust">
          <strong>Illust</strong>
          <p>
            패스파인더 및 각종 툴을 이용하여 로고 및 타이포그래피를 제작할 수
            있습니다.
          </p>
        </div>
        <div className="skil__msOffice">
          <strong>MS Office</strong>
          <p>업무를 위해 필요한 서류를 작성하고 편집할 수 있습니다.</p>
        </div>
      </article>
      <article className="aboutWrapper__education">
        <h3>education</h3>
        <p className="edu__details">
          <span>
            <strong>그린컴퓨터아카데미</strong>
            디지털컨버전스 웹퍼블리셔/ 프론트엔드 취업과정
          </span>
          <time>2019.12 - 2020.06</time>
        </p>
        <p className="edu__details">
          <span>
            <strong>경북대학교</strong>
            영어영문학 학사 / 신문방송학 학사
          </span>
          <time>2009.03 - 2015.08</time>
        </p>
      </article>
    </StyledAbout>
  );
};

export default About;
