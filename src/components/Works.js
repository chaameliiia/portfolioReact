import React from 'react';
import styled from 'styled-components';

const StyledWorks = styled.main`
  border: 1px solid #f00;
  height: 100vh;
  margin: 0 auto;
  width: 70%;

  ul {
    border: 1px solid #00f;
    height: 100%;
    position: relative;
    width: 100%;

    li {
      left: 0;
      position: absolute;
      text-transform: uppercase;
      top: 0;
      width: 100%;

      &:nth-of-type(1) {
        top: 50%;
        transform: translateY(-50%);
      }

      &:nth-of-type(2) {
        top: calc(50% + 38%);
      }

      &:nth-of-type(3) {
        top: calc(50% + (38% * 3))
      }

      &:last-of-type {
        top: -13%;
        img {
          display: none
        }
      }

      a {
        width: 100%;
     
        h2 {
          background-clip: #345389;
          background: -webkit-linear-gradient(
            270deg,
            rgba(2,0,36,1) 0%,
            rgba(52,83,137,1) 56%,
            rgba(68,94,137,1) 100%
          );
          font-size: 9rem;
          font-weight: bold;
          line-height: 1.1;
          word-break: keep-all;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        img {
          border: 1px solid #090;
          height: 250px;
          position: absolute;
          right: 0;
          top: 0;
          width: 450px;
          z-index: -10;
        }

      }

    }
  }
`;

const worksList = [
  {
    id: 1,
    title: 'What To Wear',
    src: '/',
  },
  {
    id: 2,
    title: 'WooFoo (clone)',
    src: '/',
  },
  {
    id: 3,
    title: 'Clac. for the web',
    src: '/',
  },
  {
    id: 4,
    title: 'working...',
    src: '/'
  },
];

const Works = () => {
  return (
    <StyledWorks>
      <ul className="">
        {worksList.map(v => {
          return (
            <li key={v.id}>
              <a href="/" title="">
                <h2>{v.title}</h2>
                <img src={v.src} alt="" />
              </a>
            </li>
          )
        })}
      </ul>
    </StyledWorks>
  );
};

export default Works;