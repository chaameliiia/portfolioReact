import React from 'react';
import styled from 'styled-components';
import { thumPrj1 } from 'components/common/Imgs';

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
        transition: .5s;
        width: 100%;
     
        h2 {
          background-clip: #345389;
          background: -webkit-linear-gradient(
            270deg,
            rgba(2,0,36,1) 0%,
            rgba(52,83,137,1) 56%,
            rgba(68,94,137,1) 100%
          );
          filter: grayscale(1);
          font-size: 9rem;
          font-weight: bold;
          line-height: 1.1;
          opacity: .7;
          transition: .5s;
          word-break: keep-all;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        img {
          filter: grayscale(1);
          position: absolute;
          right: 0;
          top: 0;
          transition: .5s;
          width: 450px;
          z-index: -10;
        }

        &:hover {
          h2 {
            transform: scale(1.1);
          }

          img {
            filter: grayscale(0);
            transform: scale(1.2) translateY(10%);
          }
        }
      }

      &.active {
        a{
          h2 {
            opacity: 1;
          }

          &:hover {
            h2 {
              filter: grayscale(0);
            }
          }
        }
      }
    }
  }
`;

const worksList = [
  {
    id: 1,
    active: 'active',
    title: 'What To Wear',
    src: `${thumPrj1}`,
  },
  {
    id: 2,
    active: '',
    title: 'WooFoo (clone)',
    src: '/',
  },
  {
    id: 3,
    active: '',
    title: 'Clac. for the web',
    src: '/',
  },
  {
    id: 4,
    active: '',
    title: 'working...',
    src: '/'
  },
];

const Works = ({ stopAnchor }) => {
  return (
    <StyledWorks>
      <ul className="">
        {worksList.map(v => {
          return (
            <li
              key={v.id}
              className={v.active}
            >
              <a
                href="/"
                title=""
                onClick={stopAnchor}
              >
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