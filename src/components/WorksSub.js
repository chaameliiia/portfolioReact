import React, { useContext } from 'react';
import styled from 'styled-components';
import projectsData from '../components/common/projectsData';
import { NavLink } from 'react-router-dom';
import { ArrowBackOutlined } from '@material-ui/icons';
import { Color } from 'contexts/Colors';

const StyledSection = styled.section`
  background: ${props => props.colors.background};
  height: 100vh;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;

  .worksSubWrapper {
    height: 100vh;
    margin: 0 auto;
    overflow-y: auto;
    padding: 5rem 0 3rem;
    width: 70%;

    .worksSubWrapper__visual {
      width: 100%;

      .title {
        display: flex;
        justify-content: space-between;

        h3 {
          font-size: 2em;
        }

        .title__goBack {
          align-items: center;
          cursor: pointer;
          display: flex;
        }
      }

      .mockUp {
        padding: 3rem;
        width: 100%;

        img {
          width: 100%;
        }
      }
    }

    .worksSubWrapper__description {
      padding: 3rem 0;
      text-align: center;
      width: 100%;

      h4 {
        font-size: 2em;
        font-weight: 600;
        padding-bottom: 3rem;
        text-transform: uppercase;
      }

      .intro {
        padding-bottom: 3rem;
        width: 100%;
        word-break: keep-all;
      }

      .description {
        padding: 0 10rem 3rem 10rem;
        word-break: keep-all;
      }

      .linkBtn {
        padding: 0.5rem 3rem;
        position: relative;

        span {
          color: ${props => props.colors.theme};
          font-size: 1.25em;
          position: relative;
          transition: 0.5s;
        }

        &::before {
          border-left: 1px solid ${props => props.colors.theme};
          border-right: 1px solid ${props => props.colors.theme};
          content: '';
          height: 100%;
          left: 0;
          position: absolute;
          top: 0;
          transform: skewX(-10deg);
          transition: 0.5s;
          width: 100%;
        }

        &:hover {
          span {
            color: ${props => props.colors.background};
          }
          &::before {
            background: ${props => props.colors.theme};
          }
        }
      }
    }

    .worksSubWrapper__preview {
      margin-bottom: 3rem;
      padding: 0 3rem;
      width: 100%;

      img {
        width: 100%;
      }
    }

    .worksSubWrapper__btn {
      align-items: center;
      cursor: pointer;
      display: flex;
      justify-content: center;
      padding: 2rem 0;
    }
  }
`;

const StyledWorking = styled.div`
  align-items: center;
  background: ${props => props.colors.background};
  display: flex;
  flex-direction: column;
  font-size: 1.5em;
  height: 100vh;
  justify-content: center;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
`;

const btnGoBackStyle = {
  alignItems: 'center',
  cursor: 'pointer',
  display: 'flex',
  paddingTop: '0.5rem',
};

const icGoBackStyle = {
  fontSize: '1.5em',
  marginRight: '0.2rem',
};

const WorksSub = ({ match }) => {
  const colors = useContext(Color);
  const { url } = match.params;
  const subPage = projectsData[url];
  if (!subPage) {
    return (
      <StyledWorking colors={colors} className="working">
        작업 중입니다.
        <NavLink
          to="/works"
          style={btnGoBackStyle}
          className="worksSubWrapper__btn"
        >
          <ArrowBackOutlined style={icGoBackStyle} />
          돌아가기
        </NavLink>
      </StyledWorking>
    );
  }
  return (
    <StyledSection colors={colors}>
      <div className="worksSubWrapper">
        <article className="worksSubWrapper__visual">
          <div className="title">
            <h3>{subPage.title}</h3>
            <NavLink to="/works" className="title__goBack">
              <ArrowBackOutlined style={icGoBackStyle} />
              돌아가기
            </NavLink>
          </div>
          <span className="mockUp">
            <img src={subPage.mockUp} alt="" />
          </span>
        </article>
        <article className="worksSubWrapper__description">
          <h4>overall</h4>
          <span className="intro">{subPage.intro}</span>
          <p className="description">{subPage.description}</p>
          <a
            href={subPage.projectUrl}
            title="프로젝트 바로가기"
            className="linkBtn"
          >
            <span>바로가기</span>
          </a>
        </article>
        <article className="worksSubWrapper__preview">
          {subPage.preview.map((v, i) => {
            return <img key={i} src={v} alt="" />;
          })}
        </article>
        <NavLink to="/works" className="worksSubWrapper__btn">
          <ArrowBackOutlined style={icGoBackStyle} />
          돌아가기
        </NavLink>
      </div>
    </StyledSection>
  );
};

export default WorksSub;
