import React, { useContext } from 'react';
import styled from 'styled-components';
import { Color } from 'contexts/Colors';
import { msgOff, msgOn, profile } from '../../assets/imgs/Imgs';

const StyledAside = styled.aside`
  &.active {
    height: 100vh;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 10;
  }

  .btnContact {
    background: transparent url(${msgOff}) center/30px no-repeat;
    border: none;
    bottom: 1.5rem;
    cursor: pointer;
    height: 45px;
    outline-style: none;
    position: fixed;
    right: 5%;
    width: 45px;

    &.active {
      background: transparent url(${msgOn}) center/30px no-repeat;
    }
  }

  .contactWrapper {
    background: ${props => props.colors.background};
    border: 1px solid ${props => props.colors.theme};
    border-radius: 10px;
    bottom: 1.5rem;
    display: none;
    height: 400px;
    margin: 0 3rem 2rem 0;
    right: 5%;
    position: fixed;
    width: 600px;

    &.active {
      display: flex;
    }

    .contactWrapper__title {
      border: none;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      overflow: hidden;
      padding: 2rem 1.5rem 2rem 2rem;
      position: relative;
      width: 225px;

      &::before {
        background: ${props => props.colors.theme};
        content: '';
        height: 350px;
        left: 30px;
        position: absolute;
        top: 75px;
        transform: rotate(75deg);
        width: 150px;
      }

      .contact__title {
        bottom: 2rem;
        cursor: default;
        font-size: 3em;
        font-weight: 600;
        line-height: 1;
        mix-blend-mode: multiply;
        position: absolute;
        right: 1.5rem;
        text-align: right;
        text-transform: uppercase;
        width: 100%;
        z-index: 10;
      }
    }

    .contactInfo {
      border-left: 1px solid ${props => props.colors.theme};
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      padding: 2rem 2rem 2rem 1.5rem;
      position: relative;
      width: 375px;

      .stamp {
        font-size: 6em;
        position: absolute;
        right: 1.5rem;
        top: 1rem;
      }

      .thisIsMe {
        position: absolute;
        right: 1.5rem;
        top: 1.5rem;
        width: 175px;
      }

      .myNameIs {
        font-size: 2em;
        font-weight: 600;
        padding-bottom: 1.5rem;
      }

      .cellPhone {
        padding-bottom: 0.5rem;
        position: relative;
      }

      .emailAddress {
        padding-bottom: 0.5rem;
        position: relative;
      }

      .gitHub {
        padding-bottom: 0.5rem;
        position: relative;
      }

      .greeting {
        height: 100px;
        position: relative;
      }

      .text {
        position: absolute;
        left: 1.5rem;
        top: 0;
      }
    }
  }
`;

const Aside = () => {
  const color = useContext(Color);
  const leaveMassage = e => {
    const asideWrapper = document.querySelector('.asideWrapper');
    const btnContact = asideWrapper.querySelector('.btnContact');
    const contactWrapper = asideWrapper.querySelector('.contactWrapper');
    if (!btnContact.classList.contains('active')) {
      e.target.classList.add('active');
      contactWrapper.classList.add('active');
      asideWrapper.classList.add('active');
    } else {
      e.target.classList.remove('active');
      contactWrapper.classList.remove('active');
      asideWrapper.classList.remove('active');
    }
  };

  return (
    <StyledAside colors={color} className="asideWrapper">
      <button
        type="button"
        colors={color}
        onClick={leaveMassage}
        className="btnContact"
      />
      <article className="contactWrapper">
        <h3 className="hidden">get in touch</h3>
        <div className="contactWrapper__title">
          <p className="contact__title">
            get
            <br />
            in
            <br />
            touch
          </p>
        </div>
        <div className="contactInfo">
          <p className="stamp">👩‍💻</p>
          <div className="myNameIs">이채미</div>
          <div className="cellPhone">
            📱 <span className="text">010-6272-9032</span>
          </div>
          <div className="emailAddress">
            📧 <span className="text">chaemilee9012@gmail.com</span>
          </div>
          <div className="gitHub">
            🏠 <span className="text">https://github.com/chaemilee9012</span>
          </div>
          <div className="greeting">
            🔉
            <p className="text">
              '척'하지 않고 어떤 일에도
              <br />
              진심을 다하겠습니다.
              <br />
              언제든지 편하게 연락해주세요.
              <br />
              기다리고 있겠습니다.
            </p>
          </div>
        </div>
      </article>
    </StyledAside>
  );
};

export default Aside;
