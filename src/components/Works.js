import React, { useContext, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { DetailList } from 'contexts/DetailsList';
import { Link, Route } from 'react-router-dom';
import WorksSub from './WorksSub';

const StyledWorks = styled.main`
  height: 100vh;
  overflow: hidden;
  padding: 0 15%;
  position: relative;
  width: 100%;

  ul {
    height: 100vh;
    left: 15%;
    position: fixed;
    top: 0;
    width: 70%;

    li {
      left: 0;
      position: absolute;
      text-transform: uppercase;
      top: 0;
      width: 100%;

      &:nth-of-type(1) {
        top: 50%;
        transform: translateY(-50%);

        h3 {
          font-size: 8rem;
        }
      }

      &:nth-of-type(2) {
        top: calc(50% + 42%);
      }

      &:nth-of-type(3) {
        top: calc(50% + (42% * 3));
      }

      &:last-of-type {
        top: -10%;

        img {
          display: none;
        }
      }

      a {
        transition: 0.5s;
        width: 100%;

        h3 {
          background-clip: #345389;
          background: -webkit-linear-gradient(
            270deg,
            rgba(2, 0, 36, 1) 0%,
            rgba(52, 83, 137, 1) 56%,
            rgba(68, 94, 137, 1) 100%
          );
          filter: grayscale(1);
          font-size: 6.5rem;
          font-weight: bold;
          line-height: 1.1;
          opacity: 0.7;
          transition: 0.5s;
          word-break: keep-all;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        img {
          filter: grayscale(1);
          position: absolute;
          right: 0;
          top: 0;
          transition: 0.5s;
          width: 450px;
          z-index: -10;
        }

        &:hover {
          h3 {
            transform: scale(1.1);
          }

          img {
            filter: grayscale(0);
            transform: scale(1.2) translateY(10%);
          }
        }
      }

      &.active {
        a {
          h3 {
            opacity: 1;
          }

          &:hover {
            h3 {
              filter: grayscale(0);
            }
          }
        }
      }
    }

    &.hidden {
      visibility: hidden;
    }
  }
`;

const Works = () => {
  const worksList = useContext(DetailList);
  const list = useRef(null);
  let bln = true;

  useEffect(() => {
    list.current.children[0].classList.add('active');
  }, []);

  const wheelEvent = e => {
    const worksWrapper = document.querySelector('.worksWrapper');

    if (bln) {
      bln = false;

      if (e.deltaY > 0) {
        // 아래로
        worksWrapper.append(worksWrapper.firstChild);

        for (let i = 0; i < worksWrapper.length; i++) {
          worksWrapper.children[i].classList.remove('active');
        }

        worksWrapper.firstChild.classList.add('active');
      } else {
        // 위로
        worksWrapper.prepend(worksWrapper.lastChild);

        for (let i = 0; i < worksWrapper.length; i++) {
          worksWrapper.children[i].classList.remove('active');
        }

        worksWrapper.firstChild.classList.add('active');
      }

      setTimeout(() => {
        bln = true;
      }, 500);
    }
  };

  return (
    <>
      <StyledWorks onWheel={wheelEvent}>
        <h2 className="hidden">works list</h2>
        <ul ref={list} className="worksWrapper">
          {worksList.map(v => {
            return (
              <li key={v.id}>
                <Link to={`/works/${v.url}`}>
                  <h3 className="subTitle">{v.title}</h3>
                  <img src={v.src} alt="" />
                </Link>
              </li>
            );
          })}
        </ul>
      </StyledWorks>
      <Route path="/works/:url" component={WorksSub} />
    </>
  );
};

export default Works;
