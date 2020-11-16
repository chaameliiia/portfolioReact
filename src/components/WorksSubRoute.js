import React, { useContext } from 'react';
import styled from 'styled-components';
import { DetailList } from 'contexts/DetailsList';
import WorksList from './WorksList';
import { Link, Route } from 'react-router-dom';
import WorksDetails from './common/WorksDetails';

const StyledWorks = styled.main`
  height: 100vh;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
  width: 70%;

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
      }

      &:nth-of-type(2) {
        top: calc(50% + 38%);
      }

      &:nth-of-type(3) {
        top: calc(50% + (38% * 3));
      }

      &:last-of-type {
        top: -13%;

        img {
          display: none;
        }
      }
    }
  }
`;

const StyledLink = styled(Link)`
    transition: 0.5s;
    width: 100%;

    h2 {
      background-clip: #345389;
      background: -webkit-linear-gradient(
        270deg,
        rgba(2, 0, 36, 1) 0%,
        rgba(52, 83, 137, 1) 56%,
        rgba(68, 94, 137, 1) 100%
      );
      filter: grayscale(1);
      font-size: 9rem;
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
      h2 {
        transform: scale(1.1);
      }

      img {
        filter: grayscale(0);
        transform: scale(1.2) translateY(10%);
      }
    }
  

  &.active {
    h2 {
      opacity: 1;
    }

    &:hover {
      h2 {
        filter: grayscale(0);
      }
    }
  }
`;

const WorksSubRoute = ({ className }) => {
  const worksList = useContext(DetailList);
  return (
    <>
      <StyledWorks className={className}>
        <h2 className="hidden">works list</h2>
        <ul className="listWrapper">
          <li>
            <StyledLink to="whatTowear">
              <h2>What To Wear</h2>
              <img src={require('../assets/imgs/thum/img_prj1.jpg')} alt="" />
            </StyledLink>
          </li>
          <li>
            <StyledLink to="WoofooClone">
              <h2>Woofoo (clone)</h2>
              <img src={require('../assets/imgs/thum/img_prj1.jpg')} alt="" />
            </StyledLink>
          </li>
          <li>
            <StyledLink to="calcForTheWeb">
              <h2>Calc. for the Web</h2>
              <img src={require('../assets/imgs/thum/img_prj1.jpg')} alt="" />
            </StyledLink>
          </li>
          <li>
            <StyledLink to="working">
              <h2>working..</h2>
              <img src={require('../assets/imgs/thum/img_prj1.jpg')} alt="" />
            </StyledLink>
          </li>
          {/* {worksList.map(v => {
            return (
              <li key={v.id} className={v.active}>
                <Link to={`${match.url}/${v.url}`}>
                  <h2>{v.title}</h2>
                  <img src={v.src} alt="" />
                </Link>
              </li>
            );
          })} */}
        </ul>
      </StyledWorks>
      {/* <Route path={`${match.path}/:title`} component={WorksDetails} /> */}
    </>
  );
};

export default WorksSubRoute;
