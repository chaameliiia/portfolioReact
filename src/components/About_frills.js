import React, { useContext } from 'react';
import styled from 'styled-components';
import * as imgs from 'components/common/Imgs';
import { Color } from 'contexts/Colors';

const StyledAbout = styled.section`
  border: 1px solid #f00;
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
    margin-bottom: 2rem;
  }

  .aboutWrapper__profile {
    .myNameIs {
      font-size: 3.5em;
      font-weight: 600;
      letter-spacing: 0.3em;
      padding: 150px 0;
      text-align: center;
      text-transform: uppercase;
    }

    .wantToBeA {
      text-transform: capitalize;
    }
  }

  .aboutWrapper__intro {
    display: flex;
    justify-content: space-between;

    .contacts {
      align-items: flex-start;
      display: flex;
      flex-direction: column;

      button {
        border: none;
        background: none;
        margin-bottom: 0.5rem;
        outline-style: none;
        padding-left: 2rem;

        &:nth-of-type(1) {
          background: transparent url(${imgs.email}) left/contain no-repeat;
        }

        &:nth-of-type(2) {
          background: transparent url(${imgs.ic_github}) left/contain no-repeat;
        }

        &:nth-of-type(3) {
          background: transparent url(${imgs.linkedIn}) left/contain no-repeat;
        }
      }
    }

    .introduction {
      align-items: flex-end;
      display: flex;
      justify-content: flex-end;
      width: 450px;

      p {
        font-size: 1.1em;
        text-align: right;
        word-break: keep-all;
      }
    }
  }

  .aboutWrapper__education {
    .edu__details {
      display: flex;
      justify-content: space-between;

      strong {
        font-size: 1.1em;
        width: 180px;
      }
    }
  }

  .aboutWrapper__skils {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    > div {
      margin-bottom: 1rem;
      width: 435px;
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

  .aboutWrapper__stacks {
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

  /* 장식 효과 수정 필요 */
  .button {
    background: #333;
    border-radius: 5px;
    color: white;
    cursor: pointer;
    font-family: Roboto;
    font-size: 1.2rem;
    height: 65px;
    letter-spacing: 0.2px;
    line-height: 65px;
    text-align: center;
    text-transform: uppercase;
    user-select: none;
    width: 150px;
    &:active {
      box-shadow: inset 0px 2px 8px -1px #333;
    }
  }
  .fancy-button {
    margin: auto;
    position: relative;
  }
  .frills,
  .frills::after,
  .frills::before {
    position: absolute;
    background: #333;
    border-radius: calc(8px / 2);
    height: 8px;
  }
  .frills::after,
  .frills::before {
    content: '';
    display: block;
  }
  .frills::before {
    bottom: 45px;
  }
  .frills::after {
    top: 45px;
  }
  .left-frills {
    right: 150px + 14px;
    top: calc(65px / 2)- calc(8px / 2);
    &.active {
      animation: move-left 0.38s ease-out, width-to-zero 0.38s ease-out;
      &::before,
      &::after {
        left: 15px;
      }
      &::before {
        animation: width-to-zero 0.38s ease-out, move-up 0.38s ease-out;
      }
      &::after {
        animation: width-to-zero 0.38s ease-out, move-down 0.38s ease-out;
      }
    }
  }
  .right-frills {
    left: 150px + 14px;
    top: calc(65px / 2) - calc(8px / 2);
    &.active {
      animation: move-right 0.38s ease-out, width-to-zero 0.38s ease-out;
      &::before,
      &::after {
        right: 15px;
      }
      &::before {
        animation: width-to-zero 0.38s ease-out, move-up 0.38s ease-out;
      }
      &::after {
        animation: width-to-zero 0.38s ease-out, move-down 0.38s ease-out;
      }
    }
  }

  .left-frills::before,
  .right-frills::after {
    transform: rotate(34deg);
  }

  .left-frills::after,
  .right-frills::before {
    transform: rotate(-34deg);
  }

  @keyframes move-left {
    0% {
      transform: none;
    }
    65% {
      transform: translateX(-1 * 80px);
    }
    100% {
      transform: translateX(-1 * 80px);
    }
  }
  @keyframes move-right {
    0% {
      transform: none;
    }
    65% {
      transform: translateX(80px);
    }
    100% {
      transform: translateX(80px);
    }
  }
  @keyframes width-to-zero {
    0% {
      width: 38px;
    }
    100% {
      width: 8px;
    }
  }
  @keyframes move-up {
    0% {
    }
    100% {
      bottom: 45px * 1.55;
    }
  }
  @keyframes move-down {
    0% {
    }
    100% {
      top: 45px * 1.55;
    }
  }
  /* 장식 효과 수정 필요 */
`;

const About = () => {
  const color = useContext(Color);
  const tada = () => {
    const fancyButton = document.querySelector('.fancy-button');
    const frills = document.querySelectorAll('.frills');
    fancyButton.classList.add('active');
    for (let i = 0; i < frills.length; i++) {
      frills[i].classList.add('active');
    }
  };

  const undoTada = () => {
    const fancyButton = document.querySelector('.fancy-button');
    const frills = document.querySelectorAll('.frills');
    fancyButton.classList.remove('active');
    for (let i = 0; i < frills.length; i++) {
      frills[i].classList.remove('active');
    }
  };
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
        <img src="assets/img/img_profile.jpg" alt="" />
      </article>
      <div className="aboutWrapper__intro">
        <article className="contacts">
          <h3>contact</h3>
          <button type="button">chaemilee9012@gmail.com</button>
          <button type="button">shorturl.at/dfkqQ</button>
          <button type="button">LinkedIn</button>
        </article>
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
      <article className="aboutWrapper__personality">
        <h3>personality</h3>
        <div>
          <strong>저는</strong>
          <div
            className="fancy-button"
            onMouseEnter={tada}
            onMouseLeave={undoTada}
          >
            <div class="left-frills frills"></div>
            <span className="button">책임감 강한</span>
            <div class="right-frills frills"></div>
          </div>
          <span>지적호기심 가득한</span>
          <span>목표지향적인</span>
          <span>배려심이 많은</span>
          <span>빨리 배우는</span>
          <span>쉽게 적응하는</span>
        </div>
      </article>
    </StyledAbout>
  );
};

export default About;
