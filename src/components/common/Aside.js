import { Color } from 'contexts/Colors';
import React, { useContext } from 'react';
import styled from 'styled-components';
import { msgOff, msgOn } from '../common/Imgs';

const StyledAside = styled.aside`
  &.active {
    height: 100vh;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 10;
  }

  .btnMsg {
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

  .msgWrapper {
    background: ${props => props.colors.background};
    border: 1px solid ${props => props.colors.theme};
    border-radius: 10px;
    bottom: 1.5rem;
    display: none;
    margin: 0 3rem 2rem 0;
    position: fixed;
    right: 5%;

    &.active {
      display: flex;
    }

    h3 {
      display: none;
    }

    .receiver {
      border: none;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      overflow: hidden;
      padding: 2rem 1.5rem 2rem 2rem;
      position: relative;
      width: 250px;

      &::before {
        background: ${props => props.colors.theme};
        content: '';
        height: 350px;
        left: 30px;
        position: absolute;
        top: 100px;
        transform: rotate(75deg);
        width: 150px;
      }

      .receiver__name {
        cursor: pointer;
        font-size: 1.25rem;
        text-align: left;
        text-transform: uppercase;
        transition: 0.5s;

        &:hover {
          text-decoration: underline;
        }
      }

      .receiver__title {
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

    .sender {
      align-items: center;
      border-left: 1px solid ${props => props.colors.theme};
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 2rem 2rem 2rem 1.5rem;

      input {
        border-bottom: 1px solid ${props => props.colors.theme};
        width: 100%;
      }

      label {
        font-size: 1.25rem;
        text-transform: uppercase;
      }

      p {
        display: flex;
        flex-direction: column;
        padding-bottom: 1rem;
        width: 100%;
      }

      .sender__submit {
        border: none;
        height: auto;
        padding: 0;
        position: relative;
        width: auto;

        &::before {
          border-left: 1px solid ${props => props.colors.theme};
          border-right: 1px solid ${props => props.colors.theme};
          content: '';
          height: 100%;
          position: absolute;
          transform: skewX(-10deg);
          width: 100%;
          transition: 0.5s;
        }

        &:hover {
          &::before {
            background: ${props => props.colors.theme};
          }
        }

        button {
          background: none;
          border: none;
          cursor: pointer;
          font-size: 1.25rem;
          outline-style: none;
          padding: 0.5rem 1.5rem;
          position: relative;
          text-transform: uppercase;
          translate: 0.5s;

          &:hover {
            color: ${props => props.colors.background};
          }
        }
      }
    }
  }
`;

const Aside = () => {
  const color = useContext(Color);
  const leaveMassage = e => {
    const asideWrapper = document.querySelector('.asideWrapper');
    const btnMsg = asideWrapper.querySelector('.btnMsg');
    const msgWrapper = asideWrapper.querySelector('.msgWrapper');
    if (!btnMsg.classList.contains('active')) {
      e.target.classList.add('active');
      msgWrapper.classList.add('active');
      asideWrapper.classList.add('active');
    } else {
      e.target.classList.remove('active');
      msgWrapper.classList.remove('active');
      asideWrapper.classList.remove('active');
    }
  };
  
  return (
    <StyledAside colors={color} className="asideWrapper">
      <button
        type="button"
        colors={color}
        onClick={leaveMassage}
        className="btnMsg"
      />
      <article className="msgWrapper">
        <h3>get in touch</h3>
        <div className="receiver">
          <p className="receiver__name" title="Copy E-mail address">
            to. chaemi lee
          </p>
          <p className="receiver__title">
            get
            <br />
            in
            <br />
            touch
          </p>
        </div>
        <form
          method="post"
          action="/"
          name="sender"
          id="sender"
          className="sender"
        >
          <p className="sender__name">
            <label htmlFor="name">from.</label>
            <input type="text" name="name" id="name" autoFocus />
          </p>
          <p className="sender__email">
            <label htmlFor="email">email address</label>
            <input type="email" name="email" id="email" />
          </p>
          <p className="sender__msg">
            <label htmlFor="msg">message</label>
            <textarea cols="30" rows="5" name="msg" id="msg" />
          </p>
          <p className="sender__submit">
            <button type="submit">send message</button>
          </p>
        </form>
      </article>
    </StyledAside>
  );
};

export default Aside;
