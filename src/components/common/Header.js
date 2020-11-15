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

  .about {
    border: none;
    background: none;
    cursor: pointer;
    font-size: 1.1em;
    outline: none;
    padding: 0;
    text-transform: uppercase;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <h1 className="logo">
        <Link to="/" title="홈페이지 바로가기" className="logo__fullName">
          chaemi
          <br />
          <span className="logo__lastName">lee</span>
        </Link>
      </h1>
      <Link to="/about" title="about" className="about">
        about
      </Link>
    </StyledHeader>
  );
};

export default Header;
