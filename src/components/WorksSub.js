import React, { useContext } from 'react';
import styled from 'styled-components';
import projectsData from '../components/common/projectsData';
import { ArrowBackOutlined, ArrowUpward } from '@material-ui/icons';
import { Color } from 'contexts/Colors';

const StyledSection = styled.section`
  background: ${props => props.colors.background};
  border: 1px solid #f00;
  height: 100vh;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;

  .worksSubWrapper {
    border: 1px solid #00f;
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
      display: flex;
      justify-content: center;
      padding: 2rem 0;

      .topBtnWrapper {
        align-items: center;
        cursor: pointer;
        display: flex;

        .topBtn {
          font-size: 1.5em;
          text-transform: uppercase;
        }
      }
    }
  }
`;

const icGoBackStyle = {
  fontSize: '1.5em',
  marginRight: '0.2rem',
};

const icGoTopStyle = {
  fontSize: '1.5em',
  marginLeft: '0.2rem',
};

const WorksSub = ({ match }) => {
  const colors = useContext(Color);
  const { url } = match.params;
  const subPage = projectsData[url];
  const stopAnchoring = e => {
    e.preventDefault();
  };
  return (
    <StyledSection colors={colors} onClick={stopAnchoring}>
      <div className="worksSubWrapper">
        <article className="worksSubWrapper__visual">
          <div className="title">
            <h3>{subPage.title}</h3>
            <div className="title__goBack">
              <ArrowBackOutlined style={icGoBackStyle} />
              돌아가기
            </div>
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
        <div className="worksSubWrapper__btn">
          <p className="topBtnWrapper">
            <button type="button" className="topBtn">
              top
            </button>
            <ArrowUpward style={icGoTopStyle} />
          </p>
        </div>
      </div>
    </StyledSection>
  );
};

export default WorksSub;
