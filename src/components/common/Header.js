import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  left: 5%;
  padding-top: 1.5rem;
  position: fixed;
  top: 0;
  width: 90%;
  z-index: 10;

  .logo {
    text-transform: uppercase;

    .logo__fullName {
      font-size: 1.3em;
      line-height: 1.15;

      .logo__lastName {
        font-size: inherit;
        letter-spacing: 0.9em;
      }
    }
  }

  .works {
    border: none;
    background: none;
    cursor: pointer;
    font-size: 1.3em;
    outline: none;
    padding: 0;
    text-transform: uppercase;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <h1 className="logo">
        <Link
          to="/portfolioReact"
          title="홈페이지 바로가기"
          className="logo__fullName"
        >
          chaemi
          <br />
          <span className="logo__lastName">lee</span>
        </Link>
      </h1>
      <Link to="/works" title="프로젝트 목록 바로가기" className="works">
        works
      </Link>
    </StyledHeader>
  );
};

export default Header;
