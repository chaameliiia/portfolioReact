import React from 'react';
import styled from 'styled-components';

const StyledAbout = styled.section`
  border: 1px solid #333;
`;

const About = () => {
  return (
    <StyledAbout className="main__about">
      <h2 className="hidden">about</h2>
      <article className="main__about_profile container">
        <h3 className="active">chaemi lee</h3>
        <span>
          future
          <br />
          frontend
          <br />
          developer
        </span>
        <img src="assets/img/img_profile.jpg" alt="" />
      </article>
      <div className="main__about_contacts container">
        <article>
          <h3>contact</h3>
          <a href="/">chaemilee9012@gmail.com</a>
          <a href="/">shorturl.at/dfkqQ</a>
          <a href="/">LinkedIn</a>
        </article>
        <article>
          <h3 className="hidden">introduction</h3>
          <p>
            어제와 같은 오늘을 살면서 오늘과 다른 내일을 꿈꾸지 말라고 합니다.
            하루하루 더 나아지기 위한 노력을 게을리 하지 않고
            항상 발전하는 프론트엔드 개발자가 되겠습니다.
          </p>
        </article>
      </div>
      <article className="main__about_education container">
        <h3>education</h3>
        <p>
          <strong>그린컴퓨터아카데미</strong>
          <span>디지털컨버전스(Frontend) 웹퍼블리셔/ 프론트엔드 취업과정</span>
          <time>2019.12 - 2020.06</time>
        </p>
        <p>
          <strong>경북대학교</strong>
          <span>영어영문학 학사 / 신문방송학 학사</span>
          <time>2009.03 - 2015.08</time>
        </p>
      </article>
      <article className="main__about_skills container">
        <h3>skills</h3>
        <div>
          <strong>HTML&CSS</strong>
          <img src="assets/img/detail/ic/ic_level1.png" alt="" />
          <p>
            기본적이고 필수적인 태그의 기능과 속성을 정확히 알고 웹표준 및 웹접근성에 맞게 사용할 수 있습니다.
          </p>
        </div>
        <div>
          <strong>JavaScript</strong>
          <img src="assets/img/detail/ic/ic_level2.png" alt="" />
          <p>
            탭 메뉴, 슬라이드 배너, 모달 팝업창, 화면 이동 버튼 등 동적 페이지 제작을 위해 필요한 로직을 설계하고 이에 따라 페이지를 구현할 수 있습니다.
          </p>
        </div>
        <div>
          <strong>jQuery</strong>
          <img src="assets/img/detail/ic/ic_level2.png" alt="" />
          <p>
            jQuery 라이브러리를 사용하여 동적 화면을 구현할 수 있습니다.
          </p>
        </div>
        <div>
          <strong>Photoshop</strong>
          <img src="assets/img/detail/ic/ic_level3.png" alt="" />
          <p>
            이미지를 규격에 맞게 편집하고, 색을 보정하는 등의 새 이미지 파일을 만들 수 있습니다.
          </p>
        </div>
        <div>
          <strong>Illust</strong>
          <img src="assets/img/detail/ic/ic_level3.png" alt="" />
          <p>
            패스파인더 및 각종 툴을 이용하여 로고 및 타이포그래피를 제작할 수 있습니다.
          </p>
        </div>
        <div>
          <strong>MS Office</strong>
          <img src="assets/img/detail/ic/ic_level1.png" alt="" />
          <p>
            업무를 위해 필요한 서류를 작성하고 편집할 수 있습니다.
          </p>
        </div>
      </article>
      <article className="main__about_personality container">
        <h3>personality</h3>
        <div>
          <strong>저는</strong>
          <span>책임감 강한</span>
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