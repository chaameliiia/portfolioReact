import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledIndex = styled.div`
  align-items: center;
  display: flex;
  font-size: 3em;
  height: 100vh;
  justify-content: center;
  left: 0;
  perspective: 900px;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: -10;

  .aboutBtn {
    font-size: inherit;
    font-weight: 600;
    padding-right: 1.5rem;
    text-transform: uppercase;
    transition: 0.5s;

    &:hover {
      animation: clockWise 0.3s linear 1 forwards;
    }
  }

  .worksBtn {
    font-size: inherit;
    font-weight: 600;
    padding-left: 1.5rem;
    text-transform: uppercase;
    transition: 0.5s;

    &:hover {
      animation: clockWise 0.3s linear 1 forwards;
    }
  }

  @keyframes clockWise {
    0% {
      transform: rotateX(0);
    }

    100% {
      transform: rotateX(360deg);
    }
  }
`;

const Index = () => {
  return (
    <StyledIndex>
      <Link to="/about" className="aboutBtn">
        chaemi's
      </Link>
      or
      <Link to="/works" className="worksBtn">
        works
      </Link>
    </StyledIndex>
  );
};

export default Index;
